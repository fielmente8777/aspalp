import { contact } from "@/utils/constent";
import { FooterIcon } from "@/utils/Icons";
import { ReactNode } from "react";

export interface FooterData {
  logo: string;
  description: string;
  lists: {
    title: string;
    links: {
      label?: string;
      title?: string;
      href?: string;
    }[];
  }[];
}

export const footerData: FooterData = {
  logo: "/images/footer1.png",
  description:
    "ASPA Apartments in Navi Mumbai offers spacious apartments with two bedrooms and two bathrooms. Each unit features a terrace and free WiFi, ensuring a comfortable stay.",

  lists: [
    {
      title: "LOCATION",
      links: [
        {
          label: "X2C8+6RF, Sector 9, Ulwe, Gavthan, Maharashtra 410206",
          href: contact.addressLink,
        },
      ],
    },
    {
      title: "CONTACT",
      links: [
        // {
        //   label: "WhatsApp: +9172080 10831",
        //   href: "https://wa.me/917208010831",
        // },
        {
          label: "Call: +9172080 10831",
          href: "tel:+917208010831",
        },
        {
          label: "aspa@aspaserviceapartments.com",
          href: "mailto:aspa@aspaserviceapartments.com",
        },
      ],
    },
  ],
};
