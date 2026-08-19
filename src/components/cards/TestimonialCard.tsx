"use client";

import { TestimonialDataType } from "@/@types/landingPageTypes";
import Image from "next/image";
import { useState } from "react";

const TestimonialCard: React.FC<TestimonialDataType["testimonials"][0]> = ({
  name,
  review,
  location,
  rating,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="rounded-2xl backdrop-blur-sm border border-gold bg-white p-4 flex flex-col gap-4">
      {/* Rating */}
      <p className="text-[#c8a96a]">{"★".repeat(rating || 5)}</p>

      {/* Review */}
      <p
        className={`text-dark transition-all duration-300 ${
          isExpanded ? "" : "line-clamp-3"
        }`}
      >
        {review}
      </p>

      {/* Read More / Show Less */}
      <button
        type="button"
        onClick={() => setIsExpanded((prev) => !prev)}
        className="
          w-fit
          text-sm
          font-medium
          text-gold
          underline
          underline-offset-4
          hover:text-gold/80
          transition-colors
        "
      >
        {isExpanded ? "Show Less" : "Read More"}
      </button>

      {/* Divider */}
      <div className="w-full h-px bg-gold" />

      {/* User */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-lg text-dark capitalize">{name}</p>

          {location && <p className="text-sm text-dark/60">{location}</p>}
        </div>

        <Image src="/g-icon.png" alt="Google Icon" width={24} height={24} />
      </div>
    </div>
  );
};

export default TestimonialCard;
