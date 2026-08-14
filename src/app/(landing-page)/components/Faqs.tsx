"use client";

import { useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";
import { SectionWithContainer } from "@/components/sectionComponants";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs: FAQItem[];
}

const FAQ = ({ faqs }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <SectionWithContainer
      defaultPadding={false}
      sectionClassName="bg-white"
      containerId="#faqs"
    >
      <div className="mx-auto w-full max-w-4xl py-16 lg:py-16">
        {/* Heading */}
        <h2 className="mb-9 text-center font-serif text-[48px] leading-none text-p2">
          FAQs
        </h2>

        {/* Accordion */}
        <div className="border-t border-[#D8B66A]/40">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="py-4 border-b border-[#D8B66A]/40"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between gap-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-xl md:text-2xl leading-none text-p2">
                    {faq.question}
                  </span>

                  <span className="flex-shrink-0 text-[#D8B66A]">
                    {isOpen ? (
                      <IoRemove size={14} />
                    ) : (
                      <IoAdd size={14} />
                    )}
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-4 mt-4 pr-8 font-body text-sm leading-6 text-[#777777]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWithContainer>
  );
};

export default FAQ;