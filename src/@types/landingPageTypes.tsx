import { JSX } from "react/jsx-runtime";

// export interface AccommodationSectionProps {
//   tagline: string;
//   title: string;
//   description: string;
//   note: string;
//   cards: {
//     title: string;
//     type: string;
//     description: string;
//     amenities: {
//       icon: JSX.Element;
//       label: string;
//     }[];
//     inRoomAmenities: {
//       icon: JSX.Element;
//       label: string;
//     }[];
//     startingPrice: string;
//     moreInfo: {
//       description: string[];
//       listOfData: {
//         title: string;
//         list: string[];
//       };
//       review: {
//         author: string;
//         description: string;
//       };
//     };
//     note: {
//       title: string;
//       notes: string[];
//     };
//     location: string;
//     images: string[];
//     cta: {
//       label: string;
//       href: string;
//     };
//   }[];
// }

export interface Testimonial {
  rating: number;
  review: string;
  name: string;
  location: string;
}

export interface TestimonialDataType {
  testimonials: Testimonial[];
}

export interface FaqSectionProps {
  tagline: string;
  title: string;
  items: {
    q: string;
    a: string;
  }[];
  concierge: {
    tagline: string;
    title: string;
    description: string;
    note: string;
  };
}
