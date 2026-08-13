"use client";

import { Section } from "@/components/sectionComponants";

interface Stat {
  value: string;
  label: string;
}

interface StatsProps {
  stats: Stat[];
}

const StatsSection = ({ stats }: StatsProps) => {
  return (
    <Section defaultPadding={false}>
      <section className="border-y border-[#D8D1C4] bg-white">
        <div>
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((item, index) => (
              <div
                key={index}
                className={`
               flex flex-col
  py-4
  text-center
  border-[#D8D1C4]
  border-b
  even:border-l
  lg:border-b-0
  lg:even:border-l-0
                ${index !== stats.length - 1 ? "lg:border-r" : ""}
              `}
              >
                <h3
                  className="font-serif text-[2.25rem] leading-none text-p2 font-instrument"
                  dangerouslySetInnerHTML={{ __html: item.value }}
                />

                <p
                  className="mt-4 font-mono text-sm tracking-[0.18em] text-p2"
                  dangerouslySetInnerHTML={{ __html: item.label }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Section>
  );
};

export default StatsSection;
