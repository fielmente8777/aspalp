"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LinkButton, {
  CalendarIcon,
  WhatsAppIcon,
} from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { StayCard, StayData } from "./pageData";

const StayGrid = ({ title, tagline, stays }: StayData) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleDescription = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  return (
    <SectionWithContainer sectionClassName="bg-cream-bg" containerId="#stays">
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
                className="overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col"
              >
                <div className="relative h-[240px]">
                  <Image
                    src={stay.image}
                    alt={stay.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-1 flex-col p-4">
                  <h3 className="font-serif text-3xl text-p2 mb-3">
                    {stay.title}
                  </h3>

                  <p
                    className={`text-sm text-gray-600 leading-7 ${
                      isExpanded ? "" : "line-clamp-3"
                    }`}
                  >
                    {stay.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => toggleDescription(index)}
                    className="mt-1 mb-4 w-fit text-sm font-medium text-gold underline underline-offset-4 hover:text-gold/80 transition-colors"
                  >
                    {isExpanded ? "Show Less" : "Know More"}
                  </button>

                  <ul className="grid grid-cols-1 md:grid-cols-2 max-w-sm gap-4 justify-center ">
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
                                          ? "bg-transparent text-p1"
                                          : "border border-primary text-white bg-p1"
                                      }
                                      `}
                        />
                      </li>
                    ))}
                  </ul>
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
