import { GiftSection } from "@/components/gift-section";
import { Hero } from "@/components/hero";
import { PlaceDaySection } from "@/components/place-day-section";
import { RsvpSection } from "@/components/rsvp-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StaySection } from "@/components/stay-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <PlaceDaySection />
        <StaySection />
        <GiftSection />
        <RsvpSection />
      </main>
      <SiteFooter />
    </>
  );
}
