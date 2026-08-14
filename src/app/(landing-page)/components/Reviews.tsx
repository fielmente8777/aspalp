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
    label: string;
    link: string;
  }[];
}

const Testimonials: FC<TestimonialsProps> = ({
  tagline,
  title,
  testimonials,
  buttons,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-cream-bg" containerId="#reviews">
      <div className="mx-auto ">
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
          <ul className="lg:grid hidden grid-cols-1 md:grid-cols-2 max-w-sm gap-4 justify-center ">
            {buttons.map((button, index) => (
              <li key={index}>
                <LinkButton
                  href={button.link}
                  label={button.label}
                  whatsAppIcon={index === 0}
                  calendarIcon={index === 1}
                  className={`rounded-md w-full justify-center
                    ${
                      index === 0
                        ? "bg-white text-p1 border border-[#c8a96a]"
                        : "border border-primary text-white bg-p1"
                    }
                    `}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Testimonials */}
        <div className="py-6 drop-shadow-2xl">
          <TestimonialsSlider cards={testimonials} />
        </div>
        <ul className="lg:hidden grid grid-cols-1 md:grid-cols-2 max-w-sm gap-4 justify-center ">
          {buttons.map((button, index) => (
            <li key={index}>
              <LinkButton
                href={button.link}
                label={button.label}
                whatsAppIcon={index === 0}
                calendarIcon={index === 1}
                className={`rounded-md w-full justify-center
                    ${
                      index === 0
                        ? "bg-white text-p1 border border-[#c8a96a]"
                        : "border-none text-white bg-p1"
                    }
                    `}
              />
            </li>
          ))}
        </ul>
      </div>
    </SectionWithContainer>
  );
};

export default Testimonials;
