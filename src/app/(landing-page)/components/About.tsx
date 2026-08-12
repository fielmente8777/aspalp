"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarIcon, WhatsAppIcon } from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";

export interface AboutSectionProps {
  tagline: string;
  title: string;
  description: string;
  image: string;
  buttons: {
    enquire: { label: string; href: string };
    book: { label: string; href: string };
  };
}

const AboutSection: React.FC<AboutSectionProps> = ({
  tagline,
  title,
  description,
  image,
  buttons,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-cream-bg" containerId="#about">
      <div>
        <div className="bg-cream-card rounded-[32px] p-6 md:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative hidden lg:block w-full aspect-[4/4.1] rounded-xl overflow-hidden bg-gray-300">
              <Image
                src={image}
                alt="About ASPA Apartments"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex flex-col gap-6">
              <p className="text-xs md:text-sm font-semibold tracking-widest text-gold uppercase">
                {tagline}
              </p>

              <h2
                className="font-serif text-2xl md:text-4xl lg:text-5xl text-heading-dark leading-tight"
                dangerouslySetInnerHTML={{ __html: title }}
              />

              <div className="relative lg:hidden w-full aspect-[3/3] rounded-[24px] overflow-hidden bg-gray-300">
                <Image
                  src={image}
                  alt="About ASPA Apartments"
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className="text-gray-700 text-sm md:text-[18px] space-y-3"
                dangerouslySetInnerHTML={{ __html: description }}
              />

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link
                  href={buttons.enquire.href}
                  className="w-full sm:w-fit flex items-center justify-center gap-2 bg-white text-p1 px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-95 shadow-sm border border-gold"
                >
                  <span>
                    <WhatsAppIcon />
                  </span>
                  <span>{buttons.enquire.label}</span>
                </Link>

                <Link
                  href={buttons.book.href}
                  className="w-full sm:w-fit flex items-center justify-center gap-2 bg-p1 text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-p1-hover transition-all duration-300 hover:scale-95 shadow-sm border border-white/10"
                >
                  <span>
                    <CalendarIcon />
                  </span>
                  <span>{buttons.book.label}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default AboutSection;
