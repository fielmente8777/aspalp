"use client";

import SwiperCarousel from "@/components/sliders/SwiperCarousel";
import { Autoplay } from "swiper/modules";
import { HeroFeature } from "./pageData";

interface FeaturesSliderProps {
  features: HeroFeature[];
}

const FeaturesSlider = ({ features }: FeaturesSliderProps) => {
  return (
    <>
      {/* MOBILE - Slider */}
      <div className="block md:hidden">
        <div className="mx-auto w-full max-w-[360px]">
          <div className="bg-linear-to-b from-p2/60 to-black/60 px-8 py-6 backdrop-blur-[2px]">
            <SwiperCarousel
              data={features}
              modules={[Autoplay]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              slidesPerView={1}
              spaceBetween={0}
              loop
              className="w-full"
              renderSlide={(item) => (
                <div className="flex min-h-[90px] flex-col items-center justify-center text-center">
                  <div className="mb-3 flex items-center justify-center gap-3">
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

                        {item.value && (
                          <span className="mt-1 text-md font-semibold leading-none text-white">
                            {item.value}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  <p className="px-4 text-sm text-white">
                    {item.title}
                  </p>

                  {item.subtitle && (
                    <p className="mt-2 px-4 text-sm leading-5 text-white">
                      {item.subtitle}
                    </p>
                  )}
                </div>
              )}
            />
          </div>
        </div>
      </div>

      {/* TABLET - Grid below hero */}
      <div className="hidden md:block xl:hidden">
        <div className="mx-auto w-full max-w-9xl">
          <div className="bg-linear-to-b from-p2/60 to-black/60 px-8 py-6 backdrop-blur-[2px]">
            <div className="grid grid-cols-7 divide-x divide-white/20">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col text-center"
                >
                  <div className="mb-3 flex items-center justify-center gap-2">
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

                        {item.value && (
                          <span className="mt-1 text-sm font-semibold leading-none text-white">
                            {item.value}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  <p className="px-2 text-xs text-white">
                    {item.title}
                  </p>

                  {item.subtitle && (
                    <p className="mt-2 px-2 text-xs leading-4 text-white">
                      {item.subtitle}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesSlider;