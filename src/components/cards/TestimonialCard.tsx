import { TestimonialDataType } from "@/@types/landingPageTypes";

const TestimonialCard: React.FC<
  TestimonialDataType["testimonials"][0]
> = ({ name, review, location, rating }) => {
  return (
    <div className="h-[200px] w-full rounded-2xl border border-[#D8B66A] bg-white p-4 sm:min-h-[210px] sm:p-5">

      {/* Stars */}
      <div className="mb-3 flex gap-1 text-[#D8B66A]">
        {Array.from({ length: rating }).map((_, index) => (
          <span
            key={index}
            className="text-[12px] leading-none sm:text-[13px]"
          >
            ★
          </span>
        ))}
      </div>

      {/* Review */}
      <p className="font-body text-[13px] leading-5 text-[#777777] sm:text-sm sm:leading-5">
        {review}
      </p>

      {/* Divider */}
      <div className="my-3 border-t border-[#D8B66A]" />

      {/* Guest */}
      <div className="font-body text-[11px] leading-4 text-p2 sm:text-xs">
        <p>{name}</p>
        <p>{location}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;