import { FooterIcon } from "@/utils/Icons";
import { ReactNode } from "react";

export interface FooterData {
  logo: ReactNode;
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
  logo: <FooterIcon/>,

  description:
    "A 10-room boutique stay. Built for travellers who want calm, comfort and easy access to Navi Mumbai's most important corridor.",

  lists: [
    {
      title: "LOCATION",
      links: [
        {
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        },
      ],
    },
    {
      title: "CONTACT",
      links: [
        {
          label: "WhatsApp: +91XXXXXXXXXX",
          href: "https://wa.me/91XXXXXXXXXX",
        },
        {
          label: "Call: +91XXXXXXXXXX",
          href: "tel:+91XXXXXXXXXX",
        },
        {
          label: "reserve@12345678.com",
          href: "mailto:reserve@12345678.com",
        },
      ],
    },
  ],
};