import { CoupleSection } from "@/components/couple-section";
import { Details } from "@/components/details";
import { GiftSection } from "@/components/gift-section";
import { Hero } from "@/components/hero";
import { RsvpSection } from "@/components/rsvp-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StaySection } from "@/components/stay-section";
import { VenueSection } from "@/components/venue-section";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <VenueSection />
        <CoupleSection />
        <Details />
        <StaySection />
        <GiftSection />
        <RsvpSection />
      </main>
      <SiteFooter />
    </>
  );
}
