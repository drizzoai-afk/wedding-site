/** Stylized olive leaves + poppies — hero background only. */
export function HeroFlora() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {/* Soft olive / terracotta wash behind motifs */}
      <div className="absolute inset-0 opacity-55 [background:radial-gradient(ellipse_55%_45%_at_8%_88%,color-mix(in_srgb,var(--olive)_28%,transparent),transparent_70%),radial-gradient(ellipse_50%_40%_at_92%_12%,color-mix(in_srgb,var(--terracotta)_20%,transparent),transparent_68%)]" />

      <svg
        className="hero-flora-left absolute -bottom-[2%] -left-[2%] h-[min(82vh,46rem)] w-auto max-w-[78vw] opacity-[0.72] md:-left-[1%] md:opacity-[0.8]"
        viewBox="0 0 420 640"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="hero-flora-sway-slow origin-[40%_90%]">
          {/* Olive branch stem */}
          <path
            d="M48 620 C90 520 70 420 118 340 C160 274 148 210 188 148 C220 98 248 64 292 28"
            stroke="var(--olive)"
            strokeWidth="2.2"
            strokeLinecap="round"
            opacity="0.85"
          />
          {/* Olive leaves */}
          <g fill="var(--olive)" opacity="0.78">
            <ellipse cx="78" cy="540" rx="38" ry="14" transform="rotate(-52 78 540)" />
            <ellipse cx="108" cy="470" rx="42" ry="15" transform="rotate(-38 108 470)" />
            <ellipse cx="92" cy="410" rx="36" ry="13" transform="rotate(-58 92 410)" />
            <ellipse cx="142" cy="360" rx="44" ry="15" transform="rotate(-28 142 360)" />
            <ellipse cx="128" cy="300" rx="38" ry="13" transform="rotate(-48 128 300)" />
            <ellipse cx="178" cy="250" rx="40" ry="14" transform="rotate(-22 178 250)" />
            <ellipse cx="168" cy="198" rx="34" ry="12" transform="rotate(-42 168 198)" />
            <ellipse cx="218" cy="158" rx="36" ry="12" transform="rotate(-18 218 158)" />
            <ellipse cx="248" cy="98" rx="32" ry="11" transform="rotate(-34 248 98)" />
            <ellipse cx="278" cy="58" rx="28" ry="10" transform="rotate(-12 278 58)" />
          </g>
          {/* Leaf veins (lighter) */}
          <g stroke="color-mix(in srgb, var(--ink) 35%, var(--olive))" strokeWidth="0.8" opacity="0.45">
            <path d="M52 552 L98 528" />
            <path d="M82 482 L128 458" />
            <path d="M118 372 L162 348" />
            <path d="M154 262 L198 240" />
            <path d="M198 168 L236 150" />
          </g>
          {/* Poppies along the branch */}
          <g className="hero-flora-bloom">
            <Poppy cx={118} cy={448} r={28} rotate={-18} />
            <Poppy cx={168} cy={288} r={24} rotate={12} />
            <Poppy cx={232} cy={128} r={22} rotate={-8} />
          </g>
        </g>
      </svg>

      <svg
        className="hero-flora-right absolute -top-[1%] -right-[2%] h-[min(68vh,38rem)] w-auto max-w-[70vw] opacity-[0.68] md:-right-[1%] md:opacity-[0.76]"
        viewBox="0 0 400 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="hero-flora-sway origin-[70%_8%]">
          <path
            d="M340 24 C300 90 318 150 278 210 C244 260 252 310 214 362 C178 412 148 458 96 502"
            stroke="var(--olive)"
            strokeWidth="2.1"
            strokeLinecap="round"
            opacity="0.85"
          />
          <g fill="var(--olive)" opacity="0.76">
            <ellipse cx="318" cy="70" rx="34" ry="12" transform="rotate(48 318 70)" />
            <ellipse cx="292" cy="128" rx="38" ry="13" transform="rotate(36 292 128)" />
            <ellipse cx="308" cy="178" rx="32" ry="11" transform="rotate(58 308 178)" />
            <ellipse cx="262" cy="228" rx="40" ry="14" transform="rotate(28 262 228)" />
            <ellipse cx="278" cy="278" rx="34" ry="12" transform="rotate(46 278 278)" />
            <ellipse cx="232" cy="328" rx="36" ry="13" transform="rotate(22 232 328)" />
            <ellipse cx="246" cy="378" rx="30" ry="11" transform="rotate(40 246 378)" />
            <ellipse cx="198" cy="418" rx="34" ry="12" transform="rotate(18 198 418)" />
            <ellipse cx="168" cy="458" rx="28" ry="10" transform="rotate(32 168 458)" />
            <ellipse cx="128" cy="488" rx="26" ry="9" transform="rotate(14 128 488)" />
          </g>
          <g className="hero-flora-bloom-delay">
            <Poppy cx={286} cy={152} r={26} rotate={14} />
            <Poppy cx={244} cy={302} r={22} rotate={-16} />
            <Poppy cx={176} cy={432} r={20} rotate={8} />
          </g>
        </g>
      </svg>

      {/* Small floating petal accents near edges */}
      <svg
        className="absolute top-[16%] left-[5%] h-12 w-12 opacity-55 md:h-14 md:w-14"
        viewBox="0 0 48 48"
        fill="none"
      >
        <Poppy cx={24} cy={24} r={14} rotate={-24} />
      </svg>
      <svg
        className="absolute right-[7%] bottom-[20%] h-11 w-11 opacity-50 md:h-12 md:w-12"
        viewBox="0 0 48 48"
        fill="none"
      >
        <Poppy cx={24} cy={24} r={13} rotate={20} />
      </svg>
    </div>
  );
}

function Poppy({
  cx,
  cy,
  r,
  rotate = 0,
}: {
  cx: number;
  cy: number;
  r: number;
  rotate?: number;
}) {
  const petal = r * 0.72;
  const offsets = [
    [0, -petal * 0.85],
    [petal * 0.78, -petal * 0.28],
    [petal * 0.48, petal * 0.7],
    [-petal * 0.48, petal * 0.7],
    [-petal * 0.78, -petal * 0.28],
  ] as const;

  return (
    <g transform={`translate(${cx} ${cy}) rotate(${rotate})`}>
      {offsets.map(([x, y], i) => (
        <ellipse
          key={i}
          cx={x}
          cy={y}
          rx={petal * 0.55}
          ry={petal * 0.78}
          fill="var(--terracotta)"
          opacity={0.88 - i * 0.04}
          transform={`rotate(${i * 72} ${x} ${y})`}
        />
      ))}
      {/* Soft sun-washed inner petals */}
      <circle cx={0} cy={0} r={r * 0.38} fill="var(--sun)" opacity="0.55" />
      <circle cx={0} cy={0} r={r * 0.22} fill="var(--brown)" opacity="0.9" />
      <circle cx={0} cy={0} r={r * 0.1} fill="var(--sand-0)" opacity="0.7" />
    </g>
  );
}
