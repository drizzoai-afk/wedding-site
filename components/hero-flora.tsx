"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type MotifKind = "olive" | "leaf" | "poppy";

type Motif = {
  id: string;
  kind: MotifKind;
  side: "left" | "right";
  /** 0–1 within the side gutter */
  lane: number;
  /** start as fraction of hero height (−0.2 … 1) */
  start: number;
  size: number;
  rotate: number;
  duration: number;
  sway: number;
  scrollFactor: number;
  mouseFactor: number;
};

/** Thin terracotta line-art — same graphic language as program-timeline icons. */
const MOTIFS: Motif[] = [
  { id: "l1", kind: "olive", side: "left", lane: 0.15, start: -0.1, size: 52, rotate: -18, duration: 18, sway: 18, scrollFactor: 0.4, mouseFactor: 22 },
  { id: "l2", kind: "poppy", side: "left", lane: 0.55, start: 0.08, size: 34, rotate: 12, duration: 14, sway: -14, scrollFactor: 0.6, mouseFactor: 28 },
  { id: "l3", kind: "leaf", side: "left", lane: 0.32, start: 0.32, size: 40, rotate: -42, duration: 16, sway: 12, scrollFactor: 0.3, mouseFactor: 16 },
  { id: "l4", kind: "poppy", side: "left", lane: 0.7, start: 0.52, size: 28, rotate: 28, duration: 20, sway: -20, scrollFactor: 0.5, mouseFactor: 24 },
  { id: "l5", kind: "olive", side: "left", lane: 0.22, start: 0.7, size: 46, rotate: 8, duration: 15, sway: 16, scrollFactor: 0.35, mouseFactor: 18 },
  { id: "l6", kind: "leaf", side: "left", lane: 0.48, start: 0.88, size: 32, rotate: -55, duration: 17, sway: -10, scrollFactor: 0.55, mouseFactor: 20 },
  { id: "r1", kind: "olive", side: "right", lane: 0.2, start: -0.12, size: 50, rotate: 22, duration: 17, sway: -16, scrollFactor: 0.42, mouseFactor: 20 },
  { id: "r2", kind: "poppy", side: "right", lane: 0.6, start: 0.05, size: 36, rotate: -14, duration: 15, sway: 14, scrollFactor: 0.58, mouseFactor: 30 },
  { id: "r3", kind: "leaf", side: "right", lane: 0.35, start: 0.28, size: 38, rotate: 48, duration: 19, sway: -18, scrollFactor: 0.32, mouseFactor: 16 },
  { id: "r4", kind: "olive", side: "right", lane: 0.72, start: 0.45, size: 44, rotate: -8, duration: 16, sway: 12, scrollFactor: 0.45, mouseFactor: 22 },
  { id: "r5", kind: "poppy", side: "right", lane: 0.28, start: 0.66, size: 30, rotate: 35, duration: 21, sway: -14, scrollFactor: 0.5, mouseFactor: 26 },
  { id: "r6", kind: "leaf", side: "right", lane: 0.55, start: 0.9, size: 34, rotate: -30, duration: 14, sway: 15, scrollFactor: 0.38, mouseFactor: 18 },
];

type PieceState = {
  el: HTMLElement;
  baseX: number;
  fall: number;
  rot: number;
  swayPhase: number;
  motif: Motif;
};

/** Falling olive leaves + poppies on hero sides — GSAP fall/scroll + mouse. */
export function HeroFlora() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    gsap.registerPlugin(ScrollTrigger);

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = Array.from(
      root.querySelectorAll<HTMLElement>("[data-flora-piece]"),
    );

    const mouse = { x: 0, y: 0 };
    const scrollBoost = { v: 0 };
    const pieces: PieceState[] = [];

    const place = () => {
      const w = root.clientWidth;
      const h = root.clientHeight;
      const gutter = Math.min(150, Math.max(72, w * 0.18));

      pieces.length = 0;
      els.forEach((el, i) => {
        const motif = MOTIFS[i];
        if (!motif) return;
        const baseX =
          motif.side === "left"
            ? 8 + motif.lane * (gutter - motif.size)
            : w - gutter + motif.lane * (gutter - motif.size - 8);
        pieces.push({
          el,
          baseX,
          fall: motif.start * h,
          rot: motif.rotate,
          swayPhase: Math.random() * Math.PI * 2,
          motif,
        });
        gsap.set(el, {
          x: baseX,
          y: motif.start * h,
          rotation: motif.rotate,
          opacity: reduce ? 0.4 : 0.62,
          force3D: true,
        });
      });
    };

    place();

    if (reduce) {
      const onResize = () => place();
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }

    const st = ScrollTrigger.create({
      trigger: root,
      start: "top top",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        scrollBoost.v = self.progress;
      },
    });

    const onPointer = (event: PointerEvent) => {
      const rect = root.getBoundingClientRect();
      mouse.x = gsap.utils.clamp(
        -1,
        1,
        ((event.clientX - rect.left) / rect.width) * 2 - 1,
      );
      mouse.y = gsap.utils.clamp(
        -1,
        1,
        ((event.clientY - rect.top) / rect.height) * 2 - 1,
      );
    };

    // Enable pointer tracking on the hero section (flora itself is pointer-events none)
    const hero = root.parentElement;
    hero?.addEventListener("pointermove", onPointer);

    const tick = () => {
      const h = root.clientHeight || 1;
      const dt = gsap.ticker.deltaRatio() / 60;

      pieces.forEach((p) => {
        const speed = h / p.motif.duration;
        p.fall += speed * dt * (1 + scrollBoost.v * 0.85);
        if (p.fall > h + 60) p.fall = -80 - Math.random() * 40;

        p.swayPhase += dt * (0.55 + Math.abs(p.motif.sway) * 0.02);
        const swayX = Math.sin(p.swayPhase) * p.motif.sway;
        const sideSign = p.motif.side === "left" ? 1 : -1;
        const mx = mouse.x * p.motif.mouseFactor * sideSign;
        const my = mouse.y * p.motif.mouseFactor * 0.35;
        const sy = scrollBoost.v * p.motif.scrollFactor * h * 0.22;

        gsap.set(p.el, {
          x: p.baseX + swayX + mx,
          y: p.fall + sy + my,
          rotation: p.rot + Math.sin(p.swayPhase * 0.7) * 12,
        });
      });
    };

    gsap.ticker.add(tick);

    const onResize = () => {
      place();
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", onResize);

    return () => {
      gsap.ticker.remove(tick);
      hero?.removeEventListener("pointermove", onPointer);
      window.removeEventListener("resize", onResize);
      st.kill();
    };
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden
      data-hero-flora=""
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <svg width="0" height="0" className="absolute" aria-hidden>
        <defs>
          <symbol id="flora-olive" viewBox="0 0 64 96" fill="none">
            <path
              d="M32 8 C30 28 30 52 32 88"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
            />
            <ellipse
              cx="22"
              cy="28"
              rx="11"
              ry="5.5"
              transform="rotate(-38 22 28)"
              stroke="currentColor"
              strokeWidth="1.25"
            />
            <ellipse
              cx="42"
              cy="40"
              rx="12"
              ry="5.5"
              transform="rotate(32 42 40)"
              stroke="currentColor"
              strokeWidth="1.25"
            />
            <ellipse
              cx="20"
              cy="54"
              rx="11"
              ry="5"
              transform="rotate(-42 20 54)"
              stroke="currentColor"
              strokeWidth="1.25"
            />
            <ellipse
              cx="44"
              cy="66"
              rx="11.5"
              ry="5"
              transform="rotate(28 44 66)"
              stroke="currentColor"
              strokeWidth="1.25"
            />
            <path
              d="M14 30 L28 26 M36 42 L48 38 M12 56 L26 52 M38 68 L50 64"
              stroke="currentColor"
              strokeWidth="0.7"
              opacity="0.7"
            />
          </symbol>
          <symbol id="flora-leaf" viewBox="0 0 40 64" fill="none">
            <path
              d="M20 6 C34 20 34 42 20 58 C6 42 6 20 20 6 Z"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinejoin="round"
            />
            <path
              d="M20 12 L20 52"
              stroke="currentColor"
              strokeWidth="0.9"
              strokeLinecap="round"
            />
            <path
              d="M20 24 C14 26 10 30 8 34 M20 34 C26 36 30 40 32 44"
              stroke="currentColor"
              strokeWidth="0.7"
              opacity="0.75"
            />
          </symbol>
          <symbol id="flora-poppy" viewBox="0 0 56 56" fill="none">
            <path
              d="M28 10 C34 14 38 20 36 26 C42 24 48 28 48 34 C44 38 38 40 32 38 C34 44 30 50 24 50 C20 46 18 40 20 34 C14 36 8 32 8 26 C12 20 18 16 24 18 C22 12 24 8 28 10 Z"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinejoin="round"
            />
            <circle cx="28" cy="30" r="4.5" stroke="currentColor" strokeWidth="1.1" />
            <circle cx="28" cy="30" r="1.6" stroke="currentColor" strokeWidth="0.9" />
          </symbol>
        </defs>
      </svg>

      {MOTIFS.map((m) => {
        const aspect = m.kind === "olive" ? 1.5 : m.kind === "leaf" ? 1.6 : 1;
        const href =
          m.kind === "olive"
            ? "#flora-olive"
            : m.kind === "leaf"
              ? "#flora-leaf"
              : "#flora-poppy";
        const viewBox =
          m.kind === "olive"
            ? "0 0 64 96"
            : m.kind === "leaf"
              ? "0 0 40 64"
              : "0 0 56 56";
        return (
          <span
            key={m.id}
            data-flora-piece=""
            data-side={m.side}
            className="absolute top-0 left-0 text-[color:var(--terracotta)] will-change-transform"
            style={{ width: m.size, height: m.size * aspect }}
          >
            <svg viewBox={viewBox} className="h-full w-full" aria-hidden>
              <use href={href} />
            </svg>
          </span>
        );
      })}
    </div>
  );
}
