import { TestimonialDataType } from "@/@types/landingPageTypes";

const TestimonialCard: React.FC<TestimonialDataType["testimonials"][0]> = ({
  name,
  review,
  location,
  rating,
}) => {
  return (
    <div className="rounded-2xl  backdrop-blur-sm border border-gold bg-background-dark-2 p-6 flex flex-col gap-5">
      <p className="text-[#c8a96a]">★★★★★</p>
      <p className="text-dark">{review}</p>
      <div className="w-full h-px bg-gold" />
      <p className="text-lg text-dark capitalize">{name}</p>
    </div>
  );
};

export default TestimonialCard;
