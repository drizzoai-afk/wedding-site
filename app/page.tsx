import { CoupleSection } from "@/components/couple-section";
import { GiftSection } from "@/components/gift-section";
import { Hero } from "@/components/hero";
import { MasseriaSection } from "@/components/masseria-section";
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
        <MasseriaSection />
        <PlaceDaySection />
        <CoupleSection />
        <StaySection />
        <GiftSection />
        <RsvpSection />
      </main>
      <SiteFooter />
    </>
  );
}
