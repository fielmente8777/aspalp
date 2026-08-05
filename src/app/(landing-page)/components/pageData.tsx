import {
  AirIcon,
  EntryIcon,
  HouseKeepingIcon,
  KitchenIcon,
  ParkingIcon,
  PowerIcon,
  SecurityIcon,
  WaterIcon,
  WifiIcon,
} from "@/utils/amenities";

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

export interface HeroData {
  tag?: string;
  title: string;
  description: string;
  images: string[];
  buttons: {
    enquire: { label: string; href: string };
    book: { label: string; href: string };
  };
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
  buttons: {
    enquire: { label: string; href: string };
    book: { label: string; href: string };
  };
}

export interface StayCard {
  title: string;
  description: string;
  image: string;
  buttons: {
    enquire: {
      label: string;
      href: string;
    };
    book: {
      label: string;
      href: string;
    };
  };
}

export interface StayData {
  title: string;
  highlight: string;
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
  buttons: {
    enquire: {
      label: string;
      href: string;
    };
    book: {
      label: string;
      href: string;
    };
  };
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
  buttons: {
    enquire: {
      label: string;
      href: string;
    };
    book: {
      label: string;
      href: string;
    };
  };
  places: NearbyPlace[];
}

export interface GalleryData {
  tagline: string;
  title: string;
  description: string;
  images: string[];
  buttons: {
    enquire: {
      label: string;
      href: string;
    };
    book: {
      label: string;
      href: string;
    };
  };
}

export interface PricingCard {
  tag: string;
  title: string;
  badge: string;
  price: string;
  priceSuffix: string;
  description: string;
  features: string[];
  variant: "light" | "dark";
  buttons: {
    enquire: {
      label: string;
      href: string;
    };
    book: {
      label: string;
      href: string;
    };
  };
}
export interface PricingData {
  tagline: string;
  title: string;
  cards: PricingCard[];
  note: string;
}

export const heroPageData: { hero: HeroData } = {
  hero: {
    // tag: "ASPA ULWE",
    title:
      'Home,<br />Reimagined for<br /><span class="text-gold">Every Journey.</span>',
    description:
      "Spacious serviced apartments crafted for peaceful and luxurious stays.",
    images: [
      "/images/bg.jpg",
      "/images/bg.jpg",
      "/images/bg.jpg",
      "/images/bg.jpg",
      "/images/bg.jpg",
    ],
    buttons: {
      enquire: {
        label: "Enquire Now",
        href: "#enquire",
      },
      book: {
        label: "Book Now",
        href: "#book",
      },
    },
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
        title: "Booking.com Rating",
        value: "9.5/10",
        subtitle: "(50+ Guests)",
      },
      {
        icon: <FaceIcon />,
        title: "Facial Recognition",
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
        title: "Fully Loaded",
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
  tagline: "ABOUT ASPA APARTMENTS",
  title:
    'Don\'t Settle for a <em>Cramped Hotel Room.</em> Upgrade to a <span class="text-gold">Private Escape!</span>',
  description: `
    <p>
      Welcome to ASPA, a premium serviced apartment in the peaceful neighborhood of Ulwe, Navi Mumbai, designed for travelers who value comfort, convenience, and a true home-away-from-home experience.
    </p>
    <p>
      Whether you're visiting for <strong>medical treatment</strong>, <strong>business meetings</strong>, <strong>JNPT port operations</strong>, <strong>relocation</strong>, <strong>family celebrations</strong>, or a <strong>spiritual trip to Siddhivinayak Temple</strong>, ASPA places you close to everything that matters.
    </p>
    <p>
      With seamless connectivity via <strong>Atal Setu</strong>, easy access to the <strong>upcoming Navi Mumbai International Airport</strong>, <strong>Apollo Hospital</strong>, and <strong>South Mumbai</strong>, our spacious apartments, modern amenities, and secure environment make every stay relaxing and hassle-free. From short weekend getaways to extended business or family stays, ASPA is the perfect base for every journey.
    </p>
  `,
  image: "/images/about.jpg",
  buttons: {
    enquire: {
      label: "Enquire Now",
      href: "#enquire",
    },
    book: {
      label: "Book Now",
      href: "#book",
    },
  },
};
export const statsData = [
  {
    value: "9.5",
    label: "GUEST RATING",
  },
  {
    value: "9.6",
    label: "CLEANLINESS",
  },
  {
    value: "9.7",
    label: "STAFF",
  },
  {
    value: "400+",
    label: "VERIFIED REVIEWS",
  },
];
export const StayData = {
  title: "Find the Stay that",
  highlight: "Matches your Trip.",
  stays: [
    {
      title: "Business Travel",
      description:
        "Fast Wi-Fi, a real dining-table desk and a 24-hour front desk for late landings — plus GST invoicing for corporate bookings.",
      image: "/images/img1.jpg",
      buttons: {
        enquire: {
          label: "Enquire Now",
          href: "#enquire",
        },
        book: {
          label: "Book Now",
          href: "#book",
        },
      },
    },
    {
      title: "Pet-Friendly Rentals",
      description:
        "Bring the family pet. Tiled floors, a private entrance and green walking space right outside the tower.",
      image: "/images/img2.jpg",
      buttons: {
        enquire: {
          label: "Enquire Now",
          href: "#enquire",
        },
        book: {
          label: "Book Now",
          href: "#book",
        },
      },
    },
    {
      title: "Group Travel",
      description:
        "Two bedrooms, four beds and a full kitchen — with interconnected rooms so a larger group can stay side by side.",
      image: "/images/img3.jpg",
      buttons: {
        enquire: {
          label: "Enquire Now",
          href: "#enquire",
        },
        book: {
          label: "Book Now",
          href: "#book",
        },
      },
    },
    {
      title: "Weekend Getaways",
      description:
        "A balcony with skyline views, quick access to Mumbai's markets and temples, and a self-check-in that fits a two-night trip.",
      image: "/images/img4.jpg",
      buttons: {
        enquire: {
          label: "Enquire Now",
          href: "#enquire",
        },
        book: {
          label: "Book Now",
          href: "#book",
        },
      },
    },
    {
      title: "Long Stays",
      description:
        "Washing machine, kitchen and daily housekeeping make a month feel like living here. Monthly rates on request.",
      image: "/images/img5.jpg",
      buttons: {
        enquire: {
          label: "Enquire Now",
          href: "#enquire",
        },
        book: {
          label: "Book Now",
          href: "#book",
        },
      },
    },
    {
      title: "Family Rentals",
      description:
        "650 sq ft of space, two bathrooms and a sofa bed — with wheelchair-accessible units and free private parking.",
      image: "/images/img6.jpg",
      buttons: {
        enquire: {
          label: "Enquire Now",
          href: "#enquire",
        },
        book: {
          label: "Book Now",
          href: "#book",
        },
      },
    },
    {
      title: "Romantic Getaways",
      description:
        "Rated 8.4 by couples. Quiet floors, a private terrace and a whole apartment to yourselves.",
      image: "/images/img7.jpg",
      buttons: {
        enquire: {
          label: "Enquire Now",
          href: "#enquire",
        },
        book: {
          label: "Book Now",
          href: "#book",
        },
      },
    },
    {
      title: "Medical Tourism",
      description: "Ideal for patients and families visiting nearby hospitals.",
      image: "/images/img8.jpg",
      buttons: {
        enquire: {
          label: "Enquire Now",
          href: "#enquire",
        },
        book: {
          label: "Book Now",
          href: "#book",
        },
      },
    },
    {
      title: "Relocation Tourism",
      description: "For guests relocating to Navi Mumbai.",
      image: "/images/img9.jpg",
      buttons: {
        enquire: {
          label: "Enquire Now",
          href: "#enquire",
        },
        book: {
          label: "Book Now",
          href: "#book",
        },
      },
    },
    {
      title: "Birthday Parties",
      description:
        "Celebrate intimate occasions without booking a large hotel.",
      image: "/images/img10.jpg",
      buttons: {
        enquire: {
          label: "Enquire Now",
          href: "#enquire",
        },
        book: {
          label: "Book Now",
          href: "#book",
        },
      },
    },
    {
      title: "House Warming",
      description: "Hosting friends or relatives visiting for a new home?",
      image: "/images/img11.jpg",
      buttons: {
        enquire: {
          label: "Enquire Now",
          href: "#enquire",
        },
        book: {
          label: "Book Now",
          href: "#book",
        },
      },
    },
    {
      title: "Visit Siddhivinayak Temple",
      description:
        "Stay comfortably in Ulwe and visit one of Mumbai's most revered temples.",
      image: "/images/img12.jpg",
      buttons: {
        enquire: {
          label: "Enquire Now",
          href: "#enquire",
        },
        book: {
          label: "Book Now",
          href: "#book",
        },
      },
    },
  ],
};

export const AmenitiesData = {
  tagline: "AMENITIES",
  title:
    'Quietly thoughtful. <span class="text-gold italic">Nothing</span> Missing.',
  buttons: {
    enquire: {
      label: "Enquire Now",
      href: "#enquire",
    },
    book: {
      label: "Book Now",
      href: "#book",
    },
  },
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
    {
      icon: <PowerIcon />,
      title: "Power Backup",
      description:
        "Uninterrupted comfort with reliable backup during power outages.",
    },
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
  ],
};

export const NearbyPlacesData = {
  tagline: "NEARBY PLACES",
  title:
    'Find the Stay that <span class="text-gold italic">Matches</span> your Trip',
  buttons: {
    enquire: {
      label: "Enquire Now",
      href: "#enquire",
    },
    book: {
      label: "Book Now",
      href: "#book",
    },
  },
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
  ],
};

export const GalleryData = {
  tagline: "EXPLORE GALLERY",
  title:
    'Step inside, <span class="text-gold italic">Before you Arrive.</span>',
  description:
    "A look at the rooms, lounge spaces and quiet corners across the ASPA building.",
  images: [
    "/images/gallery/gallery-1.jpg",
    "/images/gallery/gallery-2.jpg",
    "/images/gallery/gallery-3.jpg",
    "/images/gallery/gallery-4.jpg",
    "/images/gallery/gallery-5.jpg",
    "/images/gallery/gallery-6.jpg",
  ],
  buttons: {
    enquire: {
      label: "Enquire Now",
      href: "#enquire",
    },
    book: {
      label: "Book Now",
      href: "#book",
    },
  },
};

export const PricingData: PricingData = {
  tagline: "STAY WITH US",
  title:
    'Two ways to stay. Both <br/><span class="text-gold italic">fairly priced.</span>',

  cards: [
    {
      tag: "SHORT STAY",
      title: "Nightly Suite",
      badge: "POPULAR",
      price: "₹4.5k",
      priceSuffix: "/ night",
      description: "All-inclusive • No hidden charges",
      variant: "light",
      features: [
        "Daily housekeeping",
        "All utilities included",
        "Fresh linen & toiletries",
        "Wi-Fi + power backup",
      ],
      buttons: {
        enquire: {
          label: "Enquire Now",
          href: "#enquire",
        },
        book: {
          label: "Book Now",
          href: "#book",
        },
      },
    },
    {
      tag: "LONG STAY",
      title: "Extended Residence",
      badge: "SAVE ₹1K/NIGHT",
      price: "₹3.5k",
      priceSuffix: "/ night",
      description: "Electricity billed on actuals • Ideal for 7+ nights",
      variant: "dark",
      features: [
        "Kitchen access",
        "Discounted weekly rate",
        "Electricity on actuals",
        "Workspace setup on request",
      ],
      buttons: {
        enquire: {
          label: "Enquire Now",
          href: "#enquire",
        },
        book: {
          label: "Book Now",
          href: "#book",
        },
      },
    },
  ],

  note: "All bookings are confirmed manually within a few hours. Prefer to talk? WhatsApp us directly.",
};
