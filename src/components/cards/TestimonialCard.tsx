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
    <div className="rounded-2xl backdrop-blur-sm border border-gold bg-white p-6 flex flex-col justify-between gap-5 min-h-65">
      {/* Rating */}
      <p className="text-[#c8a96a]">{"★".repeat(rating || 5)}</p>

      {/* Review */}
      <p className={`text-dark transition-all duration-300`}>
        {review.length > 70 && !isExpanded
          ? review.slice(0, 70) + "..."
          : review}
      </p>

      {/* Read More / Show Less */}
      {review.length > 70 && (
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
      )}

      <div className="space-y-4">
        {/* Divider */}
        <div className="w-full h-px bg-gold" />

        {/* User */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg text-dark capitalize">{name}</p>

            {/* {location && (
            <p className="text-sm text-dark/60">
              {location}
            </p>
          )} */}
          </div>

          <Image src="/g-icon.png" alt="Google Icon" width={24} height={24} />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
