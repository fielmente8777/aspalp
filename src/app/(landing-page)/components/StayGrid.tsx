"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  CalendarIcon,
  WhatsAppIcon,
} from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";

export interface StayCard {
  title: string;
  description: string;
  image: string;
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

interface StayGridProps {
  title: string;
  tagline: string;
  stays: StayCard[];
}

const StayGrid = ({ title, tagline, stays }: StayGridProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleDescription = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <SectionWithContainer
      sectionClassName="bg-cream-bg"
      containerId="#stays"
    >
      <div>
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <p className="text-gold-tag uppercase tracking-[0.2em] text-xs md:text-sm font-medium font-man mb-2">
            {tagline}
          </p>

          <h2
            className="font-serif text-2xl lg:text-5xl leading-tight text-p2"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {stays.map((stay, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={index}
                className="overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col"
              >
                {/* Image */}
                <div className="relative h-[240px]">
                  <Image
                    src={stay.image}
                    alt={stay.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-serif text-2xl text-p2 mb-3">
                    {stay.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-sm text-gray-600 leading-7 ${
                      isExpanded ? "" : "line-clamp-3"
                    }`}
                  >
                    {stay.description}
                  </p>

                  {/* Know More */}
                  <button
                    type="button"
                    onClick={() => toggleDescription(index)}
                    className="mt-1 mb-4 w-fit text-sm font-medium text-gold underline underline-offset-4 hover:text-gold/80 transition-colors"
                  >
                    {isExpanded ? "Show Less" : "Know More"}
                  </button>

                  {/* Buttons */}
                  <div className="mt-auto pt-2 flex gap-4">
                    <Link
                      href={stay.buttons.enquire.href}
                      className="flex-1 h-11 rounded-md border border-p2 text-p2 text-sm font-medium flex items-center justify-center gap-2 hover:bg-p2 hover:text-white transition"
                    >
                      <WhatsAppIcon />
                      Enquire Now
                    </Link>

                    <Link
                      href={stay.buttons.book.href}
                      className="flex-1 h-11 rounded-md bg-p1 text-white text-sm font-medium flex items-center justify-center gap-2 hover:bg-p1-hover transition"
                    >
                      <CalendarIcon />
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default StayGrid;