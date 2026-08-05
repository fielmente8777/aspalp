"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarIcon, WhatsAppIcon } from "@/components/buttons/LinkButton";
import { GalleryData } from "./pageData";
import { SectionWithContainer } from "@/components/sectionComponants";
import { GalleryIcon } from "@/utils/Icons";

const Gallery = ({
  tagline,
  title,
  description,
  images,
  buttons,
}: GalleryData) => {
  return (
    <SectionWithContainer sectionClassName="bg-cream-bg" containerId="#gallery">
      <div>
        {/* Header */}
        <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_420px] lg:items-start">
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.2em] text-gold">
              {tagline}
            </p>

            <h2
              className="font-serif text-[56px] leading-[1.1] text-p2 [&>span]:text-gold"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </div>

          <p className="max-w-md text-lg leading-8 text-[#6E6E6E]">
            {description}
          </p>
        </div>

        {/* Gallery */}
        {/* <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                fill
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div> */}
        {/* Gallery */}
        <div className="relative mt-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl"
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

          <Link
            href="/gallery"
            className="absolute bottom-5 right-5 flex items-center gap-2 rounded-lg bg-p2 px-4 py-2 text-sm font-medium text-white shadow-lg backdrop-blur transition hover:bg-white"
          >

            <GalleryIcon />
            
            View All
          </Link>
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-wrap justify-center gap-4">
          <Link
            href={buttons.enquire.href}
            className="flex h-12 min-w-[190px] items-center justify-center gap-2 rounded-lg border border-gold bg-white text-p1 font-medium transition hover:bg-gray-100 "
          >
            <WhatsAppIcon />
            {buttons.enquire.label}
          </Link>

          <Link
            href={buttons.book.href}
            className="flex h-12 min-w-[190px] items-center justify-center gap-2 rounded-lg bg-p1 text-white font-medium transition hover:bg-p1-hover"
          >
            <CalendarIcon />
            {buttons.book.label}
          </Link>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default Gallery;
