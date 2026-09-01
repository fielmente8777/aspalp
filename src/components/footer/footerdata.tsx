import { contact } from "@/utils/constent";
import { FooterIcon } from "@/utils/Icons";
import { ReactNode } from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

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
  socials: {
    icon: ReactNode;
    href: string;
    label: string;
  }[];
}

export const footerData: FooterData = {
  logo: "/images/footer1.png",

  description:
    "A premium serviced-apartment experience in the peaceful neighbourhood of Ulwe, Navi Mumbai",

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

  socials: [
    {
      icon: <FaFacebookF />,
      href: "YOUR_FACEBOOK_LINK",
      label: "Facebook",
    },
    {
      icon: <FaInstagram />,
      href: "YOUR_INSTAGRAM_LINK",
      label: "Instagram",
    },
  ],
};