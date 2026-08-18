import Form2 from "@/components/forms/Form2";
import { SectionWithContainer } from "@/components/sectionComponants";
import AboutSection from "./(landing-page)/components/About";
import Amenities from "./(landing-page)/components/Amenities";
import FAQ from "./(landing-page)/components/Faqs";
import Gallery from "./(landing-page)/components/Gallery";
import HeroSection from "./(landing-page)/components/HeroSection";
import NearbyPlaces from "./(landing-page)/components/Nearby";
import {
  AboutData,
  AmenitiesData,
  FAQData,
  GalleryData,
  heroPageData,
  NearbyPlacesData,
  statsData,
  StayData,
  TestimonialsData
} from "./(landing-page)/components/pageData";
import Testimonials from "./(landing-page)/components/Reviews";
import StatsSection from "./(landing-page)/components/Stats";
import StayGrid from "./(landing-page)/components/StayGrid";

export default function Home() {
  return (
    <main>
      <HeroSection {...heroPageData.hero} />
      <SectionWithContainer
        defaultPadding={false}
        sectionClassName="py-14 bg-p1"
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
      <Testimonials {...TestimonialsData} />
      {/* <Pricing data={PricingData} /> */}
      <Gallery {...GalleryData} />
      <FAQ {...FAQData} />
    </main>
  );
}
