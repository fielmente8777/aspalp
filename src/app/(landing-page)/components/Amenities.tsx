"use client";

import Link from "next/link";
import LinkButton, {
  CalendarIcon,
  WhatsAppIcon,
} from "@/components/buttons/LinkButton";
import SectionWithContainer from "@/components/sectionComponants/SectionWithContainer";
import { ReactNode } from "react";

interface AmenityCard {
  icon: ReactNode;
  title: string;
  description: string;
}

interface AmenitiesProps {
  tagline: string;
  title: string;
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
  amenities: AmenityCard[];
}

const Amenities = ({ tagline, title, buttons, amenities }: AmenitiesProps) => {
  return (
    <SectionWithContainer
      sectionClassName="bg-cream-card"
      containerId="#amenities"
    >
      <div>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-gold">
              {tagline}
            </p>

            <h2
              className="font-serif text-3xl lg:text-5xl text-p2 leading-tight [&>span]:text-gold"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </div>

          <div className="hidden lg:flex gap-4">
            <Link
              href={buttons.enquire.href}
              className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-p2 shadow"
            >
              <WhatsAppIcon />
              {buttons.enquire.label}
            </Link>

            <Link
              href={buttons.book.href}
              className="flex items-center gap-2 rounded-lg bg-p1 px-6 py-3 font-medium text-white"
            >
              <CalendarIcon />
              {buttons.book.label}
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-1 xl:grid-cols-3">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-lg bg-[#F5F5F5]">
                {item.icon}
              </div>

              <h3 className="font-serif text-2xl lg:text-2xl text-p2">
                {item.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-[#6B6B6B]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 lg:hidden">
          <Link
            target="_blank"
            href={buttons.enquire.href}
            className="w-full flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-p2 shadow"
          >
            <WhatsAppIcon />
            {buttons.enquire.label}
          </Link>

          <LinkButton
            href={buttons.book.href}
            className="flex rounded-md bg-p1 px-8 py-3 text-white text-sm font-medium flex items-center justify-center hover:bg-p1-hover transition"

            label="Book Now"
            calendarIcon
          />
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Amenities;
