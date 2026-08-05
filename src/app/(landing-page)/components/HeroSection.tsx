"use client";

import Image from "next/image";
import Link from "next/link";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { CalendarIcon, WhatsAppIcon } from "@/components/buttons/LinkButton";
import { SectionWithContainer } from "@/components/sectionComponants";
import { HeroFeature } from "./pageData";

export interface HeroDataProps {
  title: string;
  description: string;
  images: string[];
  features: HeroFeature[];
  buttons: {
    enquire: { label: string; href: string };
    book: { label: string; href: string };
  };
  benefits?: string;
}

const ImageBanner: React.FC<HeroDataProps> = ({
  title,
  description,
  images,
  buttons,
  features,
}: HeroDataProps) => {
  return (
    <>
      <SectionWithContainer sectionClassName="relative w-full min-h-[85vh] md:min-h-[90vh] flex flex-col justify-between overflow-hidden">
        <div className="absolute inset-0 z-0">
          <SwiperCarousel<string>
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
            className="h-full w-full hero-swiper"
            swiperSlideClassName="relative w-full h-full"
            renderSlide={(imgSrc: string, index?: number) => (
              <div className="relative w-full h-full min-h-[90vh]">
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
        </div>

        <div className="relative z-10 flex-1 flex items-center w-full py-20 md:py-20">
          <div className="max_width">
            <div className="max-w-[480px] bg-gradient-to-b from-p2/60 to-black/60 backdrop-blur-md p-[24px] rounded-[16px] text-white flex flex-col gap-[16px] border border-white/10 shadow-2xl">
              <h1
                className="hero-title text-4xl md:text-5xl lg:text-6xl leading-tight font-normal text-white [&>span]:text-gold"
                dangerouslySetInnerHTML={{ __html: title }}
              />

              <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                {description}
              </p>

              <div className="flex items-center gap-8 pt-2">
                <Link
                  href={buttons.enquire.href}
                  className="flex items-center gap-2 bg-white text-p1 px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-95 shadow-sm"
                >
                  <span>
                    <WhatsAppIcon />
                  </span>
                  <span>{buttons.enquire.label}</span>
                </Link>

                <Link
                  href={buttons.book.href}
                  className="flex items-center gap-2 bg-p1 text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-p1-hover transition-all duration-300 hover:scale-95 shadow-sm border border-white/20"
                >
                  <span>
                    <CalendarIcon />
                  </span>
                  <span>{buttons.book.label}</span>
                </Link>
              </div>
            </div>
            <div className="mt-8 hidden lg:block">
              <div className="rounded-3xl border border-[#0EA5FF] bg-[#1B2C27]/90 backdrop-blur-xl px-8 py-6">
                <div className="grid grid-cols-7 divide-x divide-white/20">
                  {features.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col text-center"
                    >
                       <div className="mb-3 flex items-start justify-center gap-3">
    <div className="shrink-0">
      {item.icon}
    </div>
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
                      <p className="mt-1 text-sm text-white text-start px-4">{item.title}</p>

                      <p className="mt-2 text-sm leading-5 text-white text-start px-4">
                        {item.subtitle}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWithContainer>
      <div className="relative z-10 lg:hidden mt-4 pb-6">
        <div className="max_width">
          <SwiperCarousel<HeroFeature>
            data={features}
            modules={[Pagination, Autoplay]}
            slidesPerView={1.2}
            spaceBetween={16}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            className="feature-swiper"
            swiperSlideClassName="h-auto"
            renderSlide={(item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-[#0EA5FF] bg-[#1B2C27]/90 backdrop-blur-xl p-5"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3 text-gold">{item.icon}</div>

                  {item.stars && (
                    <div className="mb-2 flex justify-center text-gold">
                      {item.stars}
                    </div>
                  )}

                  <p className="text-sm font-semibold text-white">
                    {item.value}
                  </p>

                  <p className="mt-1 text-xs text-white">{item.title}</p>

                  <p className="mt-2 text-[11px] leading-5 text-white/70">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            )}
          />
        </div>
      </div>
    </>
  );
};

export default ImageBanner;
