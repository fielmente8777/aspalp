import { SectionWithContainer } from "@/components/sectionComponants";
import HeroSection from "./(landing-page)/components/HeroSection";
import Form2 from "@/components/forms/Form2";
import AboutSection from "./(landing-page)/components/About";
import {
  AboutData,
  AmenitiesData,
  GalleryData,
  heroPageData,
  NearbyPlacesData,
  PricingData,
  statsData,
  StayData,
} from "./(landing-page)/components/pageData";
import StayGrid from "./(landing-page)/components/StayGrid";
import Amenities from "./(landing-page)/components/Amenities";
import NearbyPlaces from "./(landing-page)/components/Nearby";
import Gallery from "./(landing-page)/components/Gallery";
import StatsSection from "./(landing-page)/components/Stats";
import Stats from "./(landing-page)/components/Stats";
import Pricing from "./(landing-page)/components/Pricing";

export default function Home() {
  return (
    <main>
      <HeroSection {...heroPageData.hero} />
      <SectionWithContainer
        defaultPadding={false}
        sectionClassName="py-8 bg-p1"
        containerClassName="space-y-4"
      >
        <Form2 />
        <p className="text-center text-white">
          Free cancellation on most dates* · Instant confirmation
        </p>
      </SectionWithContainer>

      <AboutSection {...AboutData} />
      <StatsSection stats={statsData} />
      <StayGrid {...StayData} />
      <Amenities {...AmenitiesData} />
      <NearbyPlaces {...NearbyPlacesData} />
      <Pricing data={PricingData} />
      <Gallery {...GalleryData} />
    </main>
  );
}
