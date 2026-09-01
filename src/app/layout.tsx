import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import "./style.scss";
import LandingNavbar from "@/components/navbar/LandingNavBar";
import { cormorant, manrope } from "./font";
import Footer from "@/components/footer/Landingfooter";
import { WebProvider } from "@/context-api/WebContext";
import ImagePopup from "@/components/pop-up/ImagePopup";
import Script from "next/script";
import Call from "@/components/ContactButton/Call";
import { contact } from "@/utils/constent";
import Whatsapp from "@/components/ContactButton/WhatsApp";
import PopUpForm from "@/components/pop-up/PopUpForm";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
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
      className={`${geistSans.variable} ${geistMono.variable} ${manrope.variable} ${cormorant.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <head>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          id="analytics"
          strategy="afterInteractive"
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-BR98CN78BK"
        ></Script>
        <Script id="google-analytics" strategy="afterInteractive">
          {` window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-BR98CN78BK');`}
        </Script>
      </head>
      <body suppressHydrationWarning={true}>
        <WebProvider>
          <LandingNavbar />
          {children}
          <Footer />
          <ImagePopup />
          <Call callNumber={contact.phone[0]} />
          <Whatsapp whatsAppNumber={contact.phone[0]} />
          <PopUpForm />
        </WebProvider>
      </body>

      <Script id="chatbot-config" strategy="afterInteractive">
        {`
    window.eazbotConfig = {
       ndid: "272710ae-0ff8-4684-a39c-a3a4756173dd",
       hid: "69831210",
    };
  `}
      </Script>
      <Script
        src="https://cb-script.dyq28lyxrazm2.amplifyapp.com/widget/lead-chatbot.js"
        strategy="afterInteractive"
      />
    </html>
  );
}
