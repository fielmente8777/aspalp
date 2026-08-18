"use client";

import { Section } from "@/components/sectionComponants";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import Image from "next/image";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { HeroData } from "./pageData";
import FeaturesSlider from "./FeaturesSlider";

const ImageBanner: React.FC<HeroData> = ({
  title,
  description,
  images,
  buttons,
  features,
}) => {
  return (
    <main>
      <Section
        className="relative w-full overflow-hidden"
        defaultPadding={false}
      >
        <div className="absolute z-40 pb-8 flex-1 flex items-end inset-0 w-full">
          <div className="max_width">
            <div className=" w-full max-w-[500px] bg-linear-to-b from-p2/60 to-black/60 backdrop-blur-[2px] p-6 rounded-2xl text-white flex flex-col gap-4 border border-white/10 shadow-2xl">
              <h1
                className="font-serif text-[28px] md:text-4xl lg:text-5xl leading-tight font-normal text-white [&>span]:text-gold"
                dangerouslySetInnerHTML={{ __html: title }}
              />
              <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                {description}
              </p>

              {/* <ul className="md:grid hidden grid-cols-1 md:grid-cols-2 max-w-sm gap-4 justify-center ">
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
              </ul> */}
            </div>
            <div className="mt-8 hidden xl:block">
              <div className="rounded-3xl bg-linear-to-b from-p2/60 to-black/60 backdrop-blur-[2px] px-8 py-6">
                <div className="grid grid-cols-7 divide-x divide-white/20">
                  {features.map((item, index) => (
                    <div key={index} className="flex flex-col text-center">
                      <div className="mb-3 flex items-center justify-center gap-3">
                        <div className="shrink-0">{item.icon}</div>
                        {(item.stars || item.value) && (
                          <div className="flex flex-col items-start">
                            {item.stars && (
                              <span className="text-[11px] leading-none text-gold">
                                {item.stars}
                              </span>
                            )}

                            <span className="mt-1 text-md font-semibold leading-none text-white">
                              {item.value}
                            </span>
                          </div>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-white text-center px-4">
                        {item.title}
                      </p>

                      <p className="mt-2 text-sm leading-5 text-white text-center px-4">
                        {item.subtitle}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <SwiperCarousel
          data={images}
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass:
              "inline-block h-2.5 w-2.5 rounded-full bg-white/50 transition-all duration-300 cursor-pointer mx-1",
            bulletActiveClass: "!w-8 !bg-white",
          }}
          swiperSlideClassName=" "
          renderSlide={(imgSrc: string, index?: number) => (
            <div className="relative w-full aspect-[4/5.5] md:aspect-[16/9] ">
              <Image
                src={imgSrc}
                alt={`Hero Slide ${index !== undefined ? index + 1 : 1}`}
                fill
                priority={index === 0}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          )}
        />
      </Section>
    </main>
  );
};

export default ImageBanner;
