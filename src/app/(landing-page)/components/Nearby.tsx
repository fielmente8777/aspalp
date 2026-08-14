"use client";

import Link from "next/link";
import { CalendarIcon, WhatsAppIcon } from "@/components/buttons/LinkButton";
import { NearbyPlacesData } from "./pageData";
import { SectionWithContainer } from "@/components/sectionComponants";

const NearbyPlaces = ({
  tagline,
  title,
  buttons,
  places,
}: NearbyPlacesData) => {
  return (
    <SectionWithContainer
      sectionClassName="bg-p1 text-white"
      containerId="#nearby"
    >
      <div>
        <div className="grid gap-3 lg:gap-20 grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left */}
          <div className="lg:sticky lg:top-28 h-fit">
            <p className="mb-4 text-xs md:text-sm uppercase tracking-[0.2em] text-gold">
              {tagline}
            </p>

            <h2
              className="font-serif text-3xl md:text-5xl leading-[1.1] [&>span]:text-gold"
              dangerouslySetInnerHTML={{ __html: title }}
            />

            <div className="mt-10 hidden lg:flex gap-4">
              <Link
                href={buttons.enquire.href}
                className="flex h-14 min-w-[220px] items-center justify-center gap-2 rounded-xl bg-white font-medium text-p1"
              >
                <WhatsAppIcon />
                {buttons.enquire.label}
              </Link>

              <Link
                href={buttons.book.href}
                className="flex h-14 min-w-[220px] items-center justify-center gap-2 rounded-xl bg-gold text-white font-medium"
              >
                <CalendarIcon />
                {buttons.book.label}
              </Link>
            </div>
          </div>

          {/* Right */}
          <div>
            {places.map((place, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-white/20 py-6"
              >
                <div className="flex items-center gap-4">
                  {place.icon}

                  <span className="text-sm md:text-lg">{place.title}</span>
                </div>

                <span className="text-sm md:text-lg text-white/90">
                  {place.duration}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-4 lg:hidden">
            <Link
              href={buttons.enquire.href}
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-p2 shadow"
            >
              <WhatsAppIcon />
              {buttons.enquire.label}
            </Link>

            <Link
              href={buttons.book.href}
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-gold px-6 py-3 font-medium text-white"
            >
              <CalendarIcon />
              {buttons.book.label}
            </Link>
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default NearbyPlaces;
