"use client";

import Image from "next/image";
import Link from "next/link";
import LinkButton, {
  CalendarIcon,
  WhatsAppIcon,
} from "@/components/buttons/LinkButton";
import { GalleryData } from "./pageData";
import { SectionWithContainer } from "@/components/sectionComponants";
import { GalleryIcon } from "@/utils/Icons";
import { useWebContext } from "@/context-api/WebContext";

const Gallery = ({
  tagline,
  title,
  description,
  images,
  buttons,
}: GalleryData) => {
  const { openGallery } = useWebContext();
  return (
    <SectionWithContainer
      sectionClassName="bg-cream-bg py-8"
      containerId="#gallery"
      defaultPadding={false}
    >
      <div>
        {/* Header */}
        <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_420px] lg:items-start">
          <div>
            <p className="mb-2 text-xs md:text-sm uppercase tracking-[0.2em] text-gold">
              {tagline}
            </p>

            <h2
              className="font-serif text-3xl md:text-[56px] leading-[1.1] text-p2 [&>span]:text-gold"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </div>

          <p className="max-w-md text-md md:text-lg leading-8 text-[#6E6E6E]">
            {description}
          </p>
        </div>
        <div className="relative mt-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {images.slice(0, 9).map((image, index) => (
              <div
                key={index}
                className="cursor-pointer relative aspect-[4/3] overflow-hidden rounded-2xl"
                onClick={() =>
                  openGallery({
                    images,
                    index,
                  })
                }
              >
                <Image
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  fill
                  className="object-cover transition duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>

          <button
            onClick={() =>
              openGallery({
                images,
                index: 0,
              })
            }
            className="absolute bottom-5 right-5 flex items-center gap-2 rounded-lg bg-p2 px-4 py-2 text-sm font-medium text-white shadow-lg backdrop-blur transition"
          >
            <GalleryIcon />
            View All
          </button>
        </div>

        {/* CTA */}
        <ul className="grid grid-cols-1 mt-8 mx-auto md:grid-cols-2 max-w-sm gap-4 justify-center ">
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
    </SectionWithContainer>
  );
};

export default Gallery;
