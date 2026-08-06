import { contact } from "@/utils/constent";

export const navData = {
  logo: "/images/logo.png",

  links: [
    { label: "About", href: "#about" },
    { label: "Stays", href: "#stays" },
    { label: "Amenities", href: "#amenities" },
    { label: "Nearby", href: "#nearby" },
    { label: "Gallery", href: "#gallery" },
    // { label: "Reviews", href: "#reviews" },
    // { label: "Contact", href: "#contact" },
  ],

  buttons: [
    { label: "Enquire Now", href: contact.WhatsappCta },
    { label: "Book Now", href: "#form" },
  ],
};
