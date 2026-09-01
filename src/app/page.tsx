import { SectionWithContainer } from "@/components/sectionComponants";
import HeroSection from "./(landing-page)/components/HeroSection";
import Form2 from "@/components/forms/Form2";
import AboutSection from "./(landing-page)/components/About";
import {
  AboutData,
  AmenitiesData,
  FAQData,
  GalleryData,
  heroPageData,
  NearbyPlacesData,
  statsData,
  StayData,
  TestimonialsData,
} from "./(landing-page)/components/pageData";
import StayGrid from "./(landing-page)/components/StayGrid";
import Amenities from "./(landing-page)/components/Amenities";
import NearbyPlaces from "./(landing-page)/components/Nearby";
import Gallery from "./(landing-page)/components/Gallery";
import StatsSection from "./(landing-page)/components/Stats";
import Testimonials from "./(landing-page)/components/Reviews";
import FAQ from "./(landing-page)/components/Faqs";
import FeaturesSlider from "./(landing-page)/components/FeaturesSlider";

export default function Home() {
  return (
    <main>
      <HeroSection {...heroPageData.hero} />
      <div className="xl:hidden">
        <FeaturesSlider features={heroPageData.hero.features} />
      </div>
      <SectionWithContainer
        defaultPadding={false}
        sectionClassName="lg:py-14 py-10 bg-p1"
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
