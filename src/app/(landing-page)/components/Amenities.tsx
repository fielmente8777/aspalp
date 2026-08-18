
import LinkButton from "@/components/buttons/LinkButton";
import SectionWithContainer from "@/components/sectionComponants/SectionWithContainer";

import { AmenitiesData } from "./pageData";

const Amenities = ({ tagline, title, buttons, amenities }: AmenitiesData) => {
  return (
    <SectionWithContainer
      sectionClassName="bg-cream-card"
      containerId="#amenities"
    >
      <div>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-gold">
              {tagline}
            </p>

            <h2
              className="font-serif text-3xl lg:text-5xl text-p2 leading-tight [&>span]:text-gold"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          </div>

          <ul className="hidden md:grid grid-cols-1 md:grid-cols-2 max-w-sm gap-4 justify-center ">
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
                        ? "bg-white text-p1 border-none"
                        : "border-none text-white bg-p1"
                    }
                    `}
                />
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-1 xl:grid-cols-3">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-4 lg:p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className=" md:mb-6 flex h-10 w-10 items-center justify-center">
                {item.icon}
              </div>

              <h3 className="font-serif mt-4 md:mt-0 text-2xl lg:text-2xl text-p2">
                {item.title}
              </h3>

              <p className="mt-2 mb:mt-4 text-base leading-7 text-[#6B6B6B]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <ul className="md:hidden mt-8 grid grid-cols-1 md:grid-cols-2 max-w-sm gap-4 justify-center ">
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
    </SectionWithContainer>
  );
};

export default Amenities;
