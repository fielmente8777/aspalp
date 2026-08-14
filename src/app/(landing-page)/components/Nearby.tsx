"use client";

import Link from "next/link";
import LinkButton, {
  CalendarIcon,
  WhatsAppIcon,
} from "@/components/buttons/LinkButton";
import { NearbyPlacesData } from "./pageData";
import { SectionWithContainer } from "@/components/sectionComponants";
import LazyLoadedMap from "@/components/map/LazyLoadedMap";
import { contact } from "@/utils/constent";

const NearbyPlaces = ({
  tagline,
  title,
  buttons,
  places,
  mapSrc,
}: NearbyPlacesData) => {
  return (
    <SectionWithContainer
      sectionClassName="bg-p1 text-white"
      containerId="#nearby"
    >
      <div>
        <div className="grid gap-3 lg:gap-20 grid-cols-1 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left */}
          <div>
            <p className="mb-4 text-xs md:text-sm uppercase tracking-[0.2em] text-gold">
              {tagline}
            </p>

            <h2
              className="font-serif text-3xl md:text-5xl leading-[1.1] [&>span]:text-gold"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            {/* 
            <div className="mt-10 hidden lg:flex gap-4">
              <Link
                href={buttons.enquire.href}
                className="flex h-14 w-[220px] rounded-md items-center justify-center gap-2 rounded-xl bg-white font-medium text-p1"
              >
                <WhatsAppIcon />
                {buttons.enquire.label}
              </Link>
              <Link
                target="_blank"
                href={buttons.enquire.href}
                className="flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-p2 text-[16px] shadow"
              >
                <WhatsAppIcon />
                {buttons.enquire.label}
              </Link>

              <Link
                href={buttons.book.href}
                className="flex h-14 w-[220px] items-center justify-center gap-2 rounded-xl bg-gold text-white font-medium"
              >
                <CalendarIcon />
                {buttons.book.label}
              </Link>
              <LinkButton
                href={buttons.book.href}
                className="flex rounded-md px-10 border-none bg-gold px-6 py-3 text-white text-[16px] font-medium items-center justify-center"
                label="Book Now"
                calendarIcon
              />
            </div> */}
            <ul className="hidden md:grid mt-10 grid-cols-1 md:grid-cols-2 max-w-sm gap-4 justify-center ">
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
                        ? "bg-white text-p1"
                        : "border border-primary text-white bg-p1"
                    }
                    `}
                  />
                </li>
              ))}
            </ul>
            <div className="mt-14 h-[400px] md:h-[630px] w-full overflow-hidden rounded-xl">
              <LazyLoadedMap src={contact.mapUrl} />
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
          {/* <div className="mt-8 flex flex-col gap-4 lg:hidden">
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
              className="flex rounded-md bg-p1 px-6 py-3 text-white text-sm font-medium items-center justify-center hover:bg-p1-hover transition"
              label="Book Now"
              calendarIcon
            />
          </div> */}
           <ul className="md:hidden grid mt-6 grid-cols-1 md:grid-cols-2 max-w-sm gap-4 justify-center ">
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
                        ? "bg-white text-p1"
                        : "border border-primary text-white bg-p1"
                    }
                    `}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default NearbyPlaces;
