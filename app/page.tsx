import { GiftSection } from "@/components/gift-section";
import { Hero } from "@/components/hero";
import { PlaceDaySection } from "@/components/place-day-section";
import { RsvpSection } from "@/components/rsvp-section";
import { SiteFooter } from "@/components/site-footer";
import { StaySection } from "@/components/stay-section";

export default function Home() {
  return (
    <>
      <main>
        {/* Opening image is the first painted content inside Hero */}
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
