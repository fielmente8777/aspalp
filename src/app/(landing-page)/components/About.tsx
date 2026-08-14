"use client";

import Image from "next/image";
import Link from "next/link";
import LinkButton, {
  CalendarIcon,
  WhatsAppIcon,
} from "@/components/buttons/LinkButton";
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
                        ? "bg-white text-p1 border border-[#c8a96a]"
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
