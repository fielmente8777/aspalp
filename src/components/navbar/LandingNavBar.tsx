"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarIcon, WhatsAppIcon } from "../buttons/LinkButton";
import { navData } from "./navData";
import Image from "next/image";

const LandingNavbar = () => {
  const pathName = usePathname();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  if (pathName === "/thank-you/") {
    return null;
  }

  return (
    <header className="absolute inset-x-0 top-0 z-50 w-full">
      <nav className="max_width relative flex items-center justify-between py-3 px-4 lg:py-4 lg:px-8">
        {/* Logo */}
        <div className="relative aspect-[4/2.22] w-36 md:w-36 lg:w-44 shrink-0 z-10">
          <Image
            src={navData.logo}
            alt="ASPA Apartments Logo"
            fill
            className="object-contain"
          />
        </div>

        {/* Center Navigation */}
        <ul className="absolute left-1/2 -translate-x-1/2 hidden lg:flex items-center gap-1 rounded-full border border-white/20 bg-white/10 px-6 py-2 backdrop-blur-md shadow-lg">
          {navData.links.map((link, index) => (
            <li key={index}>
              <button
                type="button"
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-1.5 text-sm font-medium text-white transition hover:text-gold"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <ul className="flex gap-2 lg:items-center lg:gap-3 z-1">
          {navData.buttons.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className={`flex items-center gap-2 rounded-md
px-3 py-2 text-xs
md:px-4 md:text-sm
lg:px-5 lg:py-2 lg:text-sm
font-semibold transition ${
                  index === 0
                    ? "bg-white text-p1"
                    : "bg-p1 border border-white/20 text-white"
                }`}
              >
                {index === 0 ? <WhatsAppIcon /> : <CalendarIcon />}
                <span className="hidden lg:inline-block">{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default LandingNavbar;
