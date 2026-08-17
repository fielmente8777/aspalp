"use client";

import Image from "next/image";
import { footerData } from "./footerdata";
import Form2 from "../forms/Form2";
import { Container, Section, SectionWithContainer } from "../sectionComponants";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-p1">
      <Section defaultPadding={false}>
        <SectionWithContainer
          defaultPadding={false}
          sectionClassName="py-8 bg-p1"
          containerClassName="space-y-4"
        >
          <Form2 />

          <p className="text-center text-white">
            Free cancellation on most dates* · Instant confirmation
          </p>
        </SectionWithContainer>

        <div className="border-b border-gold" />

        <Container>
          <div className="grid py-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_.7fr_.5fr] gap-12">

            {/* Logo */}
            <div className="flex flex-col gap-2 lg:max-w-sm lg:items-center">
              <div className="relative w-40 aspect-[4/2]">
                <Image
                  src={footerData.logo}
                  alt="ASPA Apartments Logo"
                  fill
                  className="object-cover"
                />
              </div>

              <p className="text-white/70 leading-7 lg:text-center">
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
                        <p className="text-white/80 leading-8">
                          {item.title}
                        </p>
                      )}
                    </li>
                  ))}
                </ul>

                {/* Social Icons - Only under CONTACT */}
                {list.title === "CONTACT" && (
                  <div className="flex items-center gap-4 mt-7">
                    <Link
                      href="YOUR_FACEBOOK_URL"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-gold hover:border-gold hover:text-p1 transition-all duration-300"
                    >
                      <FaFacebookF size={15} />
                    </Link>

                    <Link
                      href="YOUR_INSTAGRAM_URL"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-gold hover:border-gold hover:text-p1 transition-all duration-300"
                    >
                      <FaInstagram size={17} />
                    </Link>
                  </div>
                )}
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