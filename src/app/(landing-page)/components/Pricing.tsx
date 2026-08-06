"use client";

import Link from "next/link";
import { CalendarIcon, WhatsAppIcon } from "@/components/buttons/LinkButton";
import { PricingData } from "./pageData";
import { CheckIcon, GoldenCHeckIcon } from "@/utils/Icons";
import { Container, Section } from "@/components/sectionComponants";

interface Props {
  data: PricingData;
}

const Pricing = ({ data }: Props) => {
  return (
    <Section className="bg-cream-bg px-4">
      <div>
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <p className="text-gold text-xs md:text-sm uppercase tracking-[0.2em]">
              {data.tagline}
            </p>

            <h2
              className="mt-2 font-serif text-3xl md:text-5xl leading-tight text-p2"
              dangerouslySetInnerHTML={{ __html: data.title }}
            />
          </div>
        </Container>

        <div className="mt-8 md:mt-14 grid gap-8 lg:grid-cols-2 max_width px-0!">
          {data.cards.map((card, index) => (
            <div
              key={index}
              className={`rounded-3xl border p-6 lg:p-8 ${
                card.variant === "dark"
                  ? "bg-p1 border-p2 text-white"
                  : "bg-white border-[#ECE7DD] text-p2"
              }`}
            >
              <div >
                <div className="flex justify-between items-center">
                  <p className="text-xs tracking-[0.18em] uppercase text-gold">
                    {card.tag}
                  </p>
                  <span className="inline-flex h-7 items-center justify-center rounded-full border border-gold px-4 text-[10px] font-medium uppercase tracking-wide text-gold text-nowrap">
                    {card.badge}
                  </span>
                </div>

                <h3 className="mt-2 font-serif text-3xl md:text-4xl ">
                  {card.title}
                </h3>
              </div>

              <div className="mt-8 flex items-end gap-2">
                <span className="font-serif text-6xl">{card.price}</span>

                <span>{card.priceSuffix}</span>
              </div>

              <p className="mt-3 text-sm opacity-80">{card.description}</p>

              <ul className="mt-8 space-y-4">
                {card.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    {card.variant === "dark" ? (
                      <GoldenCHeckIcon />
                    ) : (
                      <CheckIcon />
                    )}
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <Link
                  href={card.buttons.enquire.href}
                  className={`w-full sm:flex-1 flex items-center justify-center gap-2 rounded-lg border py-3 transition ${
                    card.variant === "dark"
                      ? "border-white/20 bg-white text-p1 hover:bg-gray-100"
                      : " border border-p2 bg-white text-p1 hover:bg-gray-100 "
                  }`}
                >
                  <WhatsAppIcon />
                  {card.buttons.enquire.label}
                </Link>

                <Link
                  href={card.buttons.book.href}
                  className={`w-full sm:flex-1 flex justify-center items-center gap-2 rounded-lg py-3 ${
                    card.variant === "dark"
                      ? "bg-gold text-white"
                      : "bg-p1 text-white"
                  }`}
                >
                  <CalendarIcon />
                  {card.buttons.book.label}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-[#707070]">{data.note}</p>
      </div>
    </Section>
  );
};

export default Pricing;
