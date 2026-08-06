import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./style.scss";
import LandingNavbar from "@/components/navbar/LandingNavBar";
import { cormorant, manrope } from "./font";
import Footer from "@/components/footer/Landingfooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "ASPA Apartments | Premium Serviced Apartments in Ulwe, Navi Mumbai | Short & Long Stay",

  description:
    "Book premium serviced apartments in Ulwe, Navi Mumbai. Spacious 2 BHK stays with fully equipped kitchens, high-speed Wi-Fi, housekeeping, secure parking, and easy access to Atal Setu, Navi Mumbai Airport, JNPT, Apollo Hospital, and South Mumbai. Ideal for business trips, family stays, medical tourism, and long-term rentals.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LandingNavbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
