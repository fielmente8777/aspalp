"use client";

import { FC } from "react";
import { Autoplay, Navigation } from "swiper/modules";

import SwiperCarousel from "./SwiperCarousel";
import AnimateOnScroll from "@/hooks/AnimateOnScroll";
import TestimonialCard from "../cards/TestimonialCard";
import { TestimonialDataType } from "@/@types/landingPageTypes";

interface TestimonialsSliderProps {
  cards: TestimonialDataType["testimonials"];
}

const TestimonialsSlider: FC<TestimonialsSliderProps> = ({ cards }) => {
  return (
    <AnimateOnScroll direction="right">
      <SwiperCarousel
        data={cards}
        slidesPerView={1}
        spaceBetween={24}
        loop
        modules={[Autoplay, Navigation]}
        navigation={{
          nextEl: ".testimonials-next",
          prevEl: ".testimonials-prev",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={1000}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="w-full"
        renderSlide={(card) => <TestimonialCard {...card} />}
      />
    </AnimateOnScroll>
  );
};

export default TestimonialsSlider;