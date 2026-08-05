"use client";

import Image from "next/image";
import { footerData, FooterData } from "./footerdata";
import Form2 from "../forms/Form2";
import { Container, Section } from "../sectionComponants";
import Link from "next/dist/client/link";

const Footer = () => {
  const data = footerData;
  return (
    <footer className="bg-p1 text-white">
      <Section defaultPadding={false}>
        <Form2 />

        <div className="border-b border-gold" />

        <Container>
          <div className="grid py-14 grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_.7fr_.5fr] gap-12">
            {/* Logo */}
            <div className="flex flex-col gap-6 lg:max-w-sm">
              <div className="relative w-40 aspect-[4/1]">
                {footerData.logo}
              </div>

              <p className="text-white/70 leading-7">
                {footerData.description}
              </p>
            </div>

            {/* Location & Contact */}
            {footerData.lists.map((list, index) => (
              <div key={index}>
                <h3 className="mb-6 text-xs tracking-[0.25em] uppercase text-gold">
                  {list.title}
                </h3>

                <ul className="space-y-4">
                  {list.links.map((item, i) => (
                    <li key={i}>
                      {item.href ? (
                        <Link
                          href={item.href}
                          target="_blank"
                          className="text-white/80 hover:text-white transition"
                        >
                          {item.label}
                        </Link>
                      ) : (
                        <p className="text-white/80 leading-8">{item.title}</p>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="h-px bg-white/10" />

          <div className="flex flex-col md:flex-row justify-between items-center py-6 text-sm text-white/60">
            <p>© {new Date().getFullYear()} ASPA. All rights reserved.</p>

            <p>
              Powered by{" "}
              <Link
                href="https://www.fielmente.com"
                target="_blank"
                className="text-white hover:text-gold"
              >
                Fielmente
              </Link>
            </p>
          </div>
        </Container>
      </Section>
    </footer>
  );
};

export default Footer;
  