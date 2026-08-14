"use client";

import Image from "next/image";
import Link from "next/link";
import LinkButton, { CalendarIcon, WhatsAppIcon } from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { AboutData } from "./pageData";

const AboutSection: React.FC<AboutData> = ({
  tagline,
  title,
  description,
  image,
  buttons,
}) => {
  return (
    <SectionWithContainer sectionClassName="bg-cream-bg" containerId="#about">
      <div>
        <div className="bg-cream-card xl:rounded-[32px] rounded-2xl p-6 md:p-10 lg:p-12">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="relative hidden xl:block w-full aspect-[4/4.1] rounded-xl overflow-hidden bg-gray-300">
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

              <div className="relative xl:hidden w-full aspect-[3/3] rounded-xl overflow-hidden bg-gray-300">
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

              {/* <div className="flex flex-col sm:flex-row gap-4 pt-2 ">
                <Link
                  target="_blank"
                  href={buttons.enquire.href}
                  className="w-full sm:w-fit flex items-center justify-center gap-2 bg-white text-p1 px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-95 shadow-sm border border-gold"
                >
                  <span>
                    <WhatsAppIcon />
                  </span>
                  <span>{buttons.enquire.label}</span>
                </Link>

                <LinkButton
                  href={buttons.book.href}
                  className="flex rounded-md bg-p1 px-6 py-3 text-white text-sm font-medium flex items-center justify-center hover:bg-p1-hover transition"

                  label="Book Now"
                  calendarIcon
                />
              </div> */}
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
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default AboutSection;
