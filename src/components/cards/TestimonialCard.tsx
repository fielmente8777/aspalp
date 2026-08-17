import { TestimonialDataType } from "@/@types/landingPageTypes";
import Image from "next/image";

const TestimonialCard: React.FC<TestimonialDataType["testimonials"][0]> = ({
  name,
  review,
  location,
  rating,
}) => {
  return (
    <div className="rounded-2xl backdrop-blur-sm border border-gold bg-white p-6 flex flex-col gap-5">
      <p className="text-[#c8a96a]">★★★★★</p>
      <p className="text-dark">{review}</p>
      <div className="w-full h-px bg-gold" />
      <div className="flex items-center gap-3 justify-between">
        <p className="text-lg text-dark capitalize">{name}</p>
        <Image src="/g-icon.png" alt="Google Icon" width={24} height={24} />
      </div>
    </div>
  );
};

export default TestimonialCard;
