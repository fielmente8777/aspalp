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
    <SectionWithContainer sectionClassName="bg-p1 text-white">
      <div>
        <div className="grid gap-20 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left */}
          <div className="lg:sticky lg:top-28 h-fit"> 
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-gold">
              {tagline}
            </p>

            <h2
              className="font-serif text-5xl leading-[1.1] [&>span]:text-gold"
              dangerouslySetInnerHTML={{ __html: title }}
            />

            <div className="mt-10 flex flex-wrap gap-4">
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
          <div >
            {places.map((place, index) => (
              <div
                key={index}
                className="flex items-center justify-between border-b border-white/20 py-6"
              >
                <div className="flex items-center gap-4">
                  {place.icon}

                  <span className="text-md md:text-lg">{place.title}</span>
                </div>

                <span className="text-md md:text-lg text-white/90">{place.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default NearbyPlaces;
