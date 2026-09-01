import {
  AirIcon,
  BottleIcon,
  ChairIcon,
  EntryIcon,
  HouseKeepingIcon,
  Item,
  KitchenIcon,
  MachineIcon,
  OvenIcon,
  ParkingIcon,
  PowerIcon,
  SecurityIcon,
  TowelIcon,
  TvIcon,
  WaterIcon,
  WifiIcon,
} from "@/utils/amenities";
import { contact } from "@/utils/constent";
import {
  AirBnbIcon,
  BookingIcon,
  CapIcon,
  FaceIcon,
  GoogleIcon,
  MapIcon,
  PlaneIcon,
  RoomIcon,
  SetuIcon,
} from "@/utils/Icons";
import { ReactNode } from "react";

interface button {
  label: string;
  link: string;
}
export interface HeroData {
  tag?: string;
  title: string;
  description: string;
  images: string[];
  imagesMobile: string[];
  buttons: button[];
  benefits: string;
  features: HeroFeature[];
}
export interface HeroFeature {
  icon: ReactNode;
  value: string;
  title: ReactNode;
  subtitle: string;
  stars?: string;
}

export interface AboutData {
  tagline: string;
  title: string;
  description: string;
  image: string;
  buttons: button[];
}

export interface StayCard {
  title: string;
  description: string;
  image: string;
  buttons: button[];
}

export interface StayData {
  title: string;
  tagline: string;
  stays: StayCard[];
}

export interface AmenityCard {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface AmenitiesData {
  tagline: string;
  title: string;
  buttons: button[];
  amenities: AmenityCard[];
}

export interface NearbyPlace {
  icon: ReactNode;
  title: string;
  duration: string;
}

export interface NearbyPlacesData {
  tagline: string;
  title: string;
  mapSrc: string;
  buttons: button[];
  places: NearbyPlace[];
}

export interface GalleryData {
  tagline: string;
  title: string;
  description: string;
  images: string[];
  buttons: button[];
}

// export interface PricingCard {
//   tag: string;
//   title: string;
//   badge: string;
//   price: string;
//   priceSuffix: string;
//   description: string;
//   features: string[];
//   variant: "light" | "dark";
//   buttons: button[];
// }
// export interface PricingData {
//   tagline: string;
//   title: string;
//   cards: PricingCard[];
//   note: string;
// }

export const heroPageData = {
  hero: {
    // tag: "ASPA ULWE",
    title: `For Stays You <span class='text-gold italic'> Remember</span> Long After <br/> You've <span class='text-gold italic'>Checked </span> Out`,
    description: "Refresh . Relax · Rejuvenate · Reimagine · Remember",
    images: [
      "/69-A.jpeg",
      "/images/58.jpeg",
      "/images/48.jpeg",
      "/images/50.jpeg",
      "/images/banner.jpeg",
      "/20-A.jpeg",
      // "/images/22.jpeg",
    ],
    imagesMobile: [
      "/69-A.jpeg",
      "/images/58.jpeg",
      "/room.png",
      "/room-2.png",
      "/images/banner.jpeg",
      "/20-A.jpeg",
      // "/images/22.jpeg",
    ],
    buttons: [
      {
        label: "Enquire Now",
        link: contact.WhatsappCta,
      },
      {
        label: "Book Now",
        link: "#form",
      },
    ],
    benefits: "Free cancellation on most dates* - Instant confirmation",

    features: [
      {
        icon: <GoogleIcon />,
        stars: "★★★★★",
        title: "Google Reviews",
        value: "4.9/5",
        subtitle: "(300+ Verified Stays)",
      },
      {
        icon: <AirBnbIcon />,
        stars: "★★★★★",
        title: "Airbnb Superhost",
        value: "4.8/5",
        subtitle: "(70+ Guests & Guest Favourite)",
      },
      {
        icon: <BookingIcon />,
        stars: "★★★★★",
        title: "Booking.com Exceptional Rating",
        value: "9.5/10",
        subtitle: "(60+ Guests)",
      },
      {
        icon: <FaceIcon />,
        title: "Facial Recognition  Entry",
        value: "",
        subtitle: "Next-gen safety for peace of mind",
      },
      {
        icon: <RoomIcon />,
        title: "Full 2 BHK Living",
        value: "",
        subtitle: "650+ sq. ft. of private comfort",
      },
      {
        icon: <CapIcon />,
        title: "Fully Loaded Kitchen",
        value: "",
        subtitle: "Fully equipped for home-cooked meals",
      },
      {
        icon: <SetuIcon />,
        title: (
          <>
            5 Mins to
            <br />
            Atal Setu
          </>
        ),
        value: "",
        subtitle: "Reach South Mumbai in ~45 minutes",
      },
    ],
  },
};

export const AboutData = {
  tagline: "OUR STORY",
  title: 'Upgrade to a <span class="text-gold-tag">Private Escape!</span>',
  description: `
    <p>
      Welcome to <strong> aspa</strong>, a premium serviced-apartment experience in the peaceful neighbourhood of <strong> Ulwe, Navi Mumbai </strong> —where the comfort of home meets the convenience of a professionally managed stay.
    </p>
    <p>    
Whether you're here for <strong> business, medical visits, JNPT operations, relocation, family occasions, leisure or a spiritual journey </strong>, ASPA gives you more space, privacy and flexibility than a conventional hotel room.
Ideally located with convenient connectivity to <strong> Atal Setu, South Mumbai, Apollo Hospitals, JNPT and Navi Mumbai International Airport </strong>, ASPA makes it easy to stay close to the places that matter
    </p>
    <p>
      Our thoughtfully designed apartments, modern amenities, secure surroundings and attentive service make every stay <strong> comfortable, convenient and hassle-free </strong> —whether you're staying for a night, a weekend, a few weeks or longer.
    </p>

    <p>
    <strong>
    ASPA isn't just a place to stay. It's your home away from home.
     </strong>
    </p>
  `,
  image: "/69-A.jpeg",
  buttons: [
    {
      label: "Enquire Now",
      link: contact.WhatsappCta,
    },
    {
      label: "Book Now",
      link: "#form",
    },
  ],
};
export const statsData = [
  {
    value: 'Rated <span class="text-gold-tag">4.8/5</span> Stars',
    label: "From More Than 80+ Airbnb Reviews",
  },
  {
    value: "Guest Favourite",
    label: `This Home is a guest favourite based on ratings, reviews and reliability. <span class ="text-black/50">Source Airbnb</span>`,
  },
  {
    value: 'Rated <span class="text-gold-tag">4.8/5</span> Stars',
    label: "For cleanliness Airbnb Reviews",
  },
  {
    value: 'Rated <span class="text-gold-tag">4.8/5</span> Stars',
    label: "For value Airbnb Reviews",
  },
];
export const StayData = {
  tagline: "STAYS",
  title: `Find the Stay that <br /><span class="text-gold italic ">Matches</span> your Trip.`,
  stays: [
    {
      title: "Business Travel",
      description:
        "Work comfortably. Stay conveniently.\nFast Wi-Fi, a dedicated dining/work desk, a quiet private apartment and 24×7 assistance—with GST invoicing available for corporate bookings.",
      image: "/images/img1.jpg",
      buttons: [
        {
          label: "Enquire Now",
          link: contact.WhatsappCta,
        },
        {
          label: "Book Now",
          link: "#form",
        },
      ],
    },
    {
      title: "Pet-Friendly Rentals",
      description:
        "When some of the family member has four legs. Bring the family pet. Room to roam, a private entrance and green walking space right outside the tower.",
      image: "/images/img2.jpg",
      buttons: [
        {
          label: "Enquire Now",
          link: contact.WhatsappCta,
        },
        {
          label: "Book Now",
          link: "#form",
        },
      ],
    },
    {
      title: "Group Travel",
      description:
        "Stay together, with space for everyone.\nIdeal for families, friends and larger groups, with multiple apartments available on the same floor. Enjoy the convenience of staying close together, with spacious bedrooms, multiple beds and fully equipped kitchens with large sized refrigerator & washing machines.",
      image: "/images/img3.jpg",
      buttons: [
        {
          label: "Enquire Now",
          link: contact.WhatsappCta,
        },
        {
          label: "Book Now",
          link: "#form",
        },
      ],
    },
    {
      title: "Weekend Getaways",
      description:
        "A balcony with skyline views, quick access to Mumbai's markets and temples, and a self-check-in that fits a two-night trip.",
      image: "/images/img4.jpg",
      buttons: [
        {
          label: "Enquire Now",
          link: contact.WhatsappCta,
        },
        {
          label: "Book Now",
          link: "#form",
        },
      ],
    },
    {
      title: "Long Stays",
      description:
        "Stay longer. Live comfortably. Ideal for extended stays, with monthly rates on request, a large refrigerator, washing machine, fully equipped kitchen and daily housekeeping—giving you all the comforts of home, even when you're away.",
      image: "/images/img5.jpg",
      buttons: [
        {
          label: "Enquire Now",
          link: contact.WhatsappCta,
        },
        {
          label: "Book Now",
          link: "#form",
        },
      ],
    },
    // {
    //   title: "Family Rentals",
    //   description:
    //     "Because family time deserves more than a hotel room. Spread out, relax and enjoy quality time together in a spacious 650 sq. ft. apartment, complete with a comfortable living space, two bathrooms and a fully equipped kitchen. It's the freedom and privacy of having your own home while you're away from home.",
    //   image: "/images/img6.jpg",
    //   buttons: [
    //     {
    //       label: "Enquire Now",
    //       link: contact.WhatsappCta,
    //     },
    //     {
    //       label: "Book Now",
    //       link: "#form",
    //     },
    //   ],
    // },
    {
      title: "Romantic Getaways",
      description:
        "A little more privacy. A little more togetherness.Enjoy quiet surroundings, a private balcony and an entire apartment to yourselves—the perfect setting to relax, reconnect and enjoy quality time together.",
      image: "/images/img7.jpg",
      buttons: [
        {
          label: "Enquire Now",
          link: contact.WhatsappCta,
        },
        {
          label: "Book Now",
          link: "#form",
        },
      ],
    },
    {
      title: "Medical Tourism",
      description:
        "Comfort when it matters most. A peaceful, wheelchair-friendly apartment, neat pathway within campus to walk, a fully equipped kitchen to prepare fresh, home-cooked meals suited to the patient’s recommended diet.",
      image: "/images/img8.jpg",
      buttons: [
        {
          label: "Enquire Now",
          link: contact.WhatsappCta,
        },
        {
          label: "Book Now",
          link: "#form",
        },
      ],
    },
    // {
    //   title: "Religious & Cultural Visits",
    //   description:
    //     "Explore Mumbai’s diverse heritage.Conveniently visit, within an hour via Atal Setu, Siddhivinayak, Mahalakshmi, Haji Ali, St. Thomas Cathedral,  Babulnath, Mumbadevi, Gateway of India and CSMT while enjoying the comfort of your own apartment.",
    //   image: "/images/img9.jpg",
    //   buttons: [
    //     {
    //       label: "Enquire Now",
    //       link: contact.WhatsappCta,
    //     },
    //     {
    //       label: "Book Now",
    //       link: "#form",
    //     },
    //   ],
    // },
    {
      title: "Celebrations",
      description:
        "Make your special day feel truly personal.Celebrate the occasion with your loved ones in the comfort and privacy of your own apartment.",
      image: "/images/img10.jpg",
      buttons: [
        {
          label: "Enquire Now",
          link: contact.WhatsappCta,
        },
        {
          label: "Book Now",
          link: "#form",
        },
      ],
    },
    // {
    //   title: "House Warming Stays",
    //   description:
    //     "Make room for the people who matter.Hosting friends and relatives for your new home? Give them the comfort, privacy and convenience of a spacious apartment while they celebrate this special milestone with you.",
    //   image: "/images/img11.jpg",
    //   buttons: [
    //     {
    //       label: "Enquire Now",
    //       link: contact.WhatsappCta,
    //     },
    //     {
    //       label: "Book Now",
    //       link: "#form",
    //     },
    //   ],
    // },
    {
      title: "Religious & Cultural Visits",
      description:
        "Explore Mumbai’s diverse heritage. Conveniently visit, within an hour via Atal Setu, Siddhivinayak, Mahalakshmi, Haji Ali, St. Thomas Cathedral, Babulnath, Mumbadevi, Gateway of India and CSMT while enjoying the comfort of your own apartment.",
      image: "/images/img12.jpg",
      buttons: [
        {
          label: "Enquire Now",
          link: contact.WhatsappCta,
        },
        {
          label: "Book Now",
          link: "#form",
        },
      ],
    },
  ],
};

export const AmenitiesData = {
  tagline: "AMENITIES",
  title:
    'Quietly thoughtful. <span class="text-gold italic">Nothing</span> Missing.',
  buttons: [
    {
      label: "Enquire Now",
      link: contact.WhatsappCta,
    },
    {
      label: "Book Now",
      link: "#form",
    },
  ],
  amenities: [
    {
      icon: <AirIcon />,
      title: "Air Conditioning",
      description: "Stay cool and comfortable throughout your relaxing stay.",
    },
    {
      icon: <WifiIcon />,
      title: "High-speed Wi-Fi",
      description: "Fast, reliable Wi-Fi for work, streaming, and browsing.",
    },
    {
      icon: <WaterIcon />,
      title: "Hot Water",
      description: "Enjoy uninterrupted hot water anytime, day or night.",
    },
    {
      icon: <KitchenIcon />,
      title: "Kitchen Access",
      description: "Cook your favorite meals in our fully equipped kitchen.",
    },
    {
      icon: <ParkingIcon />,
      title: "Secure Parking",
      description:
        "Safe, hassle-free parking available for every guest vehicle.",
    },
    {
      icon: <SecurityIcon />,
      title: "24/7 Security",
      description: "Round-the-clock security ensures complete peace of mind.",
    },
    // {
    //   icon: <PowerIcon />,
    //   title: "Power Backup",
    //   description:
    //     "Uninterrupted comfort with reliable backup during power outages.",
    // },
    {
      icon: <HouseKeepingIcon />,
      title: "Daily Housekeeping",
      description: "Fresh, clean rooms maintained daily for your comfort.",
    },
    {
      icon: <EntryIcon />,
      title: "Biometric Gate Entry",
      description:
        "Enhanced safety with secure biometric access for guests only.",
    },
    {
      icon: <TvIcon />,
      title: "Smart TV",
      description:
        "Enjoy your favorite shows, movies, and entertainment from the comfort of your stay.",
    },
    {
      icon: <MachineIcon />,
      title: "Washing Machine",
      description:
        "Convenient laundry facilities to keep your clothes fresh throughout your stay.",
    },
    {
      icon: <OvenIcon />,
      title: "Microwave",
      description: "Quickly heat and prepare your meals with ease.",
    },
    {
      icon: <BottleIcon />,
      title: "Bottled Water",
      description:
        "Enjoy clean, refreshing bottled water throughout your stay.",
    },
    {
      icon: <ChairIcon />,
      title: "IKEA Furniture",
      description:
        "Relax in stylish, thoughtfully designed IKEA furnishings for a comfortable stay.",
    },
    {
      icon: <TowelIcon />,
      title: "Fresh Linen & Towels",
      description:
        "Enjoy fresh, clean linen and soft towels for a comfortable stay.",
    },

    {
      icon: <Item />,
      title: "Kitchen Essentials",
      description:
        "Everything you need for convenient everyday cooking and dining.",
    },
  ],
};

export const NearbyPlacesData = {
  tagline: "NEARBY PLACES",
  title:
    'Find the Stay that <span class="text-gold italic">Matches</span> your Trip',
  buttons: [
    {
      label: "Enquire Now",
      link: contact.WhatsappCta,
    },
    {
      label: "Book Now",
      link: "#form",
    },
  ],
  mapSrc: "",
  places: [
    {
      icon: <PlaneIcon />,
      title: "Navi Mumbai International Airport",
      duration: "15 min",
    },
    {
      icon: <MapIcon />,
      title: "Atal Setu (Sea Bridge)",
      duration: "5 min",
    },
    {
      icon: <MapIcon />,
      title: "South Mumbai via Atal Setu",
      duration: "45 min",
    },
    {
      icon: <MapIcon />,
      title: "Central Mumbai",
      duration: "20 min",
    },
    {
      icon: <MapIcon />,
      title: "JNPT (Jawaharlal Nehru Port)",
      duration: "20–25 min",
    },
    {
      icon: <MapIcon />,
      title: "Apollo Hospitals, Belapur",
      duration: "20–25 min",
    },
    {
      icon: <MapIcon />,
      title: "Tata Memorial Hospital",
      duration: "45–60 min",
    },
    {
      icon: <MapIcon />,
      title: "Bandra Kurla Complex",
      duration: "35 min",
    },
    {
      icon: <MapIcon />,
      title: "South Mumbai",
      duration: "45 min",
    },
    {
      icon: <MapIcon />,
      title: "CBD Belapur",
      duration: "15 min",
    },
    {
      icon: <MapIcon />,
      title: "Nexus Seawoods",
      duration: "15 min",
    },
    {
      icon: <MapIcon />,
      title: "DY Patil Stadium",
      duration: "20 min",
    },
  ],
};

export const GalleryData = {
  tagline: "EXPLORE GALLERY",
  title:
    'Step inside, <span class="text-gold italic">Before you Arrive.</span>',
  description:
    "A look at the rooms, lounge spaces and quiet corners across the <strong> aspa </strong> building.",
  images: [
    "/images/58.jpeg",
    "/69-A.jpeg",
    "/images/67.jpeg",
    "/images/50.jpeg",
    "/images/48.jpeg",
    "/images/42.jpeg",
    "/images/41.jpeg",
    "/images/30.jpeg",
    "/images/21.jpeg",
    "/images/9.jpeg",
    "/images/14.jpeg",
    "/images/15.jpeg",
  ],
  buttons: [
    {
      label: "Enquire Now",
      link: contact.WhatsappCta,
    },
    {
      label: "Book Now",
      link: "#form",
    },
  ],
};

// export const PricingData: PricingData = {
//   tagline: "STAY WITH US",
//   title:
//     'Two ways to stay. Both <br/><span class="text-gold italic">fairly priced.</span>',

//   cards: [
//     {
//       tag: "SHORT STAY",
//       title: "Nightly Suite",
//       badge: "POPULAR",
//       price: "₹4.5k",
//       priceSuffix: "/ night",
//       description: "All-inclusive • No hidden charges",
//       variant: "light",
//       features: [
//         "Daily housekeeping",
//         "All utilities included",
//         "Fresh linen & toiletries",
//         "Wi-Fi + power backup",
//       ],
//       buttons: [
//         {
//           label: "Enquire Now",
//           link: contact.WhatsappCta,
//         },
//         {
//           label: "Book Now",
//           link: "#form",
//         },
//       ],
//     },
//     {
//       tag: "LONG STAY",
//       title: "Extended Residence",
//       badge: "SAVE ₹1K/NIGHT",
//       price: "₹3.5k",
//       priceSuffix: "/ night",
//       description: "Electricity billed on actuals • Ideal for 7+ nights",
//       variant: "dark",
//       features: [
//         "Kitchen access",
//         "Discounted weekly rate",
//         "Electricity on actuals",
//         "Workspace setup on request",
//       ],
//       buttons: [
//         {
//           label: "Enquire Now",
//           link: contact.WhatsappCta,
//         },
//         {
//           label: "Book Now",
//           link: "#form",
//         },
//       ],
//     },
//   ],

//   note: "All bookings are confirmed manually within a few hours. Prefer to talk? WhatsApp us directly.",
// };

export const TestimonialsData = {
  tagline: "REVIEWS",
  title: "Trusted by Travellers",
  testimonials: [
    {
      rating: 5,
      review:
        "Had a really pleasant stay at this property in Navi Mumbai. The place is exceptionally clean and very well maintained, which immediately made it feel comfortable and welcoming. You can tell the management puts in consistent effort to keep everything in top condition—from the rooms to the common areas. The overall ambiance is calm and neat, making it a great option whether you're traveling for work or just a short getaway. Everything felt organized and thoughtfully managed, which made the stay smooth and hassle-free. Definitely a reliable choice if you're looking for a clean, well-kept place in Navi Mumbai. Would happily stay here again!",
      name: "Rey — Canada",
      location: "Guest, Delhi",
    },
    {
      rating: 5,
      review:
        "Excellent spacious apartment, new furniture, new appliances, clean, fresh linens and towels. Polite and attentive staff. I recommend it.",
      name: "Krasnopyorova — Kazakhstan 🇰🇿",
      location: "Guest, Delhi",
    },
    {
      rating: 5,
      review:
        "We were in Navi Mumbai for a family trip and work. Had booked a long stay. First of all the location: It is very close to Atal Setu, so coming in from Mumbai, once you cross Atal Setu, the property is just within 5 mins. So convenient for both…",
      name: "Rajarshi — UAE 🇦🇪",
      location: "Guest, Delhi",
    },
    {
      rating: 5,
      review:
        "Had a very pleasant stay at this service apartment in Mumbai. The apartment was clean, comfortable, and well-maintained. What stood out the most was the excellent service and caring customer support. The staff was always responsive, helpful, and…",
      name: "Durai — UAE 🇦🇪",
      location: "Guest, Delhi",
    },
    {
      rating: 5,
      review:
        "The apartment is very well kept and very large and very modern with all facilities. The hosts are very hospitable and friendly. Mr Pandey is a very helpful and nice person. This is a great place to stay, it is very well located!",
      name: "Karl — India 🇮🇳",
      location: "Guest, Delhi",
    },
    {
      rating: 5,
      review:
        "It was spotlessly clean and the check-in was smooth. Mr Mitra was extremely helpful and he helped me check in even when we were 50 mins late. I highly recommend this place.",
      name: "Akansha — India 🇮🇳",
      location: "Guest, Delhi",
    },
    {
      rating: 5,
      review:
        "Lavish & Modern Amenities. What truly sets this home apart are the lavishing amenities. It is equipped with everything a modern traveler needs: High-End Tech: Smart entertainment systems and high-speed connectivity. Gourmet Kitchen: Fully modular and stocked with premium appliances. Designer Bathrooms: Featuring contemporary fixtures that provide a spa-like experience. Climate Control: Perfectly regulated for a comfortable stay regardless of the weather outside. Superb Hospitality By Mitra Pandey, Guard ji and team.",
      name: "Hemant — India 🇮🇳",
      location: "Guest, Delhi",
    },
    {
      rating: 5,
      review:
        "It was a very pleasant and comfortable stay. The host was a very polite person and he helped us with everything. Recommended for everyone.",
      name: "Akshay — India 🇮🇳",
      location: "Guest, Delhi",
    },
    {
      rating: 5,
      review:
        "It was very convenient, comfy and tidy. Overall a great experience And recommended for both leisure and business.",
      name: "Sriram — India 🇮🇳",
      location: "Guest, Delhi",
    },
    {
      rating: 5,
      review: "Nice spacious apartment with all facilities. Very helpful host.",
      name: "Ajithkumar — India 🇮🇳",
      location: "Guest, Delhi",
    },
    {
      rating: 5,
      review:
        "Very nice place to stay. near to New Mumbai airport, away from all the noises and pollution. Comfy and very supportive staff.",
      name: "Ram — India 🇮🇳",
      location: "Guest, Delhi",
    },
    {
      rating: 5,
      review: "Stay was very comfortable. Well light room, good ventilation.",
      name: "Aman — India 🇮🇳",
      location: "Guest, Delhi",
    },
    {
      rating: 5,
      review:
        "It was a very nice stay. The host was very good he was available at a single call. Worth it.",
      name: "Swati — India 🇮🇳",
      location: "Guest, Delhi",
    },
    {
      rating: 5,
      review:
        "The place was very tidy and comfortable for our stay with all the facilities.",
      name: "Mir — India 🇮🇳",
      location: "Guest, Delhi",
    },
    {
      rating: 5,
      review:
        "We liked the quick response of the apartment staff while checking and also nice services at the room.",
      name: "Praveen — India 🇮🇳",
      location: "Guest, Delhi",
    },
    {
      rating: 5,
      review:
        "A good location, clean and safe place to stay. The onsite supervisor always ready to help you.",
      name: "Mansoor T. - United States US",
      location: "Guest, Delhi",
    },
    {
      rating: 5,
      review:
        "The house at ASPA reminds me of my home in Somalia - spacious, quiet, neat and beautiful.",
      name: "Abdullahi Abdi Somalia SO",
      location: "Guest, Delhi",
    },
    {
      rating: 5,
      review:
        "Had a beautiful stay at ASPA Apartment. The staff were incredibly kind, welcoming, and made the whole place feel like home from the moment I arrived. Everything was very clean, comfortable, and well taken care of. You can really feel the warmth and hospitality here. Highly recommend to anyone looking for a peaceful and pleasant stay!",
      name: "Dil Buttar Canada CA",
      location: "Guest, Delhi",
    },
  ],

  buttons: [
    {
      label: "Enquire Now",
      link: contact.WhatsappCta,
    },
    {
      label: "Book Now",
      link: "#form",
    },
  ],
};

export const FAQData = {
  faqs: [
    // {
    //   question: "What are the check-in and check-out timings?",
    //   answer:
    //     "Check-in and check-out timings are subject to the property's standard policies. Please contact us for the exact timings and any early check-in or late check-out options.",
    // },
    {
      question: "Is Wi-Fi complimentary?",
      answer:
        "Yes, complimentary high-speed Wi-Fi is available for guests throughout their stay.",
    },
    // {
    //   question: "Does the resort have a restaurant?",
    //   answer:
    //     "Please contact our team for information about dining options and nearby restaurants available during your stay.",
    // },
    {
      question: "Is parking available?",
      answer:
        "Yes, parking facilities are available for guests. Please contact us in advance for further details.",
    },
    {
      question: "How can I make a reservation?",
      answer:
        "You can make a reservation by using the Book Now option on the website or by contacting our team directly.",
    },
    {
      question: "How many people can stay in an apartment?",
      answer:
        "Up to 4 adults and 2 children can stay in an apartment. For every extra adult, up to a maximum of six, additional Rs.1,000/- per night shall be levied.",
    },
    {
      question: "Are house-keeping & Utensil-cleaning complimentary?",
      answer: "Yes, both the services are complimentary.",
    },
    {
      question: "Is there a kitchen?",
      answer: "Yes, Fully loaded kitchen with all modern amenities.",
    },
    {
      question: "Do you allow long stays?",
      answer:
        "Yes, guests can stay as long as they want provided they follow the house-rules.",
    },
    {
      question: "Are families welcome?",
      answer: "Yes, Families are welcome.",
    },
    {
      question: "What are the check-in and check-out timings?",
      answer: "Check-in time is 1pm whereas check-out time is 11am.",
    },
    {
      question: "How do I reach ASPA?",
      answer: "Click on the Location at the footer of the page.",
    },
    {
      question: "Can I contact someone directly?",
      answer: "Yes, You can call at +91 7028010831",
    },
  ],
};
