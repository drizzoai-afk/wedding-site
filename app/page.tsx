import { Details } from "@/components/details";
import { Hero } from "@/components/hero";
import { RsvpSection } from "@/components/rsvp-section";
import { SiteHeader } from "@/components/site-header";
import { coupleNames } from "@/lib/wedding";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Details />
        <RsvpSection />
      </main>
      <footer className="border-t border-border/70 px-6 py-10 text-center text-sm text-muted-foreground">
        With love — {coupleNames()}
      </footer>
    </>
  );
}
