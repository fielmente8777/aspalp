"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarIcon, WhatsAppIcon } from "@/components/buttons/LinkButton";
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
  highlight: string;
  stays: StayCard[];
}

const StayGrid = ({ title, highlight, stays }: StayGridProps) => {
  return (
    <SectionWithContainer sectionClassName="bg-cream-bg" containerId="#stays">
      <div className="">
        {/* Heading */}
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="font-serif text-4xl leading-tight text-p2">
            {title}
            <br />
            <span className="text-gold">{highlight}</span>
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {stays.map((stay, index) => (
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

                <p className="text-sm text-gray-600 leading-7 mb-4">
                  {stay.description}
                </p>

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
          ))}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default StayGrid;
