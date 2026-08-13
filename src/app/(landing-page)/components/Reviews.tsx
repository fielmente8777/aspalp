"use client";

import { FC } from "react";
import Link from "next/link";

import TestimonialsSlider from "@/components/sliders/TestimonialsSlider";
import LinkButton, {
  CalendarIcon,
  WhatsAppIcon,
} from "@/components/buttons/LinkButton";
import { TestimonialDataType } from "@/@types/landingPageTypes";
import { Section, SectionWithContainer } from "@/components/sectionComponants";

interface TestimonialsProps {
  tagline: string;
  title: string;
  testimonials: TestimonialDataType["testimonials"];
  buttons: {
    enquire: {
      label: string;
      href: string;
    };
    book: {
      label: string;
      href: string;
    };
  };
}

const Testimonials: FC<TestimonialsProps> = ({
  tagline,
  title,
  testimonials,
  buttons,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-cream-bg" 
    containerId="#reviews">
      <div className="mx-auto md:w-[1200px] px-4 lg:px-0 ">

        {/* Header */}
        <div className="mb-6 flex flex-col gap-5 sm:mb-8 lg:flex-row lg:items-end lg:justify-between">

          {/* Title */}
          <div>
            <p className="mb-2 font-man text-[11px] uppercase tracking-[0.16em] text-gold-tag sm:text-xs">
              {tagline}
            </p>

            <h2 className="font-serif text-[28px] leading-tight text-p2 sm:text-3xl lg:text-[2.25rem]">
              {title}
            </h2>
          </div>

          {/* CTA Buttons */}
          <div className="flex w-full gap-2.5 sm:w-auto">
            <Link
              target="_blank"
              href={buttons.enquire.href}
              className="flex h-10 flex-1 items-center justify-center gap-2 rounded-lg border border-gold bg-white px-3 text-xs text-p2 transition hover:bg-gold hover:text-white sm:flex-none sm:px-5"
            >
              <WhatsAppIcon />
              {buttons.enquire.label}
            </Link>

             <LinkButton
                  href={buttons.book.href}
                  className="flex rounded-md bg-p1 px-6 py-3 text-white text-sm font-medium flex items-center justify-center hover:bg-p1-hover transition"

                  label="Book Now"
                  calendarIcon
                />
          </div>
        </div>

        {/* Testimonials */}
        <div className="py-6 drop-shadow-2xl">
        <TestimonialsSlider cards={testimonials} />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Testimonials;