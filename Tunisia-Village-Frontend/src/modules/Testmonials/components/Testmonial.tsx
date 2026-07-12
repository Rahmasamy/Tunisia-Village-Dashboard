import { StarRating } from "@/src/shared/components/common/StarRating";
import { ReviewCardProps } from "./Testmonial.types";

export function TestmonialCard({ review, isCenter, onClick }: ReviewCardProps ) {
    return (
    <div
      className={`
        flex-shrink-0 transition-all duration-500 ease-in-out
        ${isCenter ? "w-[380px] opacity-100 scale-100" : "w-[320px] opacity-40 scale-95"}
      `}
    >
      <div
        className={`
          bg-white rounded-2xl px-6 py-5 h-full border transition-all duration-500
          ${isCenter
            ? "border-[var(--color-primary-light)] shadow-[0_8px_40px_rgba(26,125,90,0.12)]"
            : "border-gray-100 shadow-sm"
          }
        `}
        dir="rtl"
      >
        {/* Name & date */}
        <div className=" mb-1">
          <p className="font-bold text-gray-900 text-base">{review.name}</p>
          <p className="text-gray-400 text-xs mt-0.5">{review.date}</p>
        </div>
 
        {/* Stars */}
        <div className="flex justify-center">
          <StarRating rating={review.rating} />
        </div>
 
        {/* Divider */}
        <div className={`h-px my-3 ${isCenter ? "bg-[var(--color-primary)]" : "bg-gray-100"}`} />
 
        {/* Review text */}
        <p className="text-gray-600 text-sm leading-relaxed text-center">{review.text}</p>
      </div>
    </div>
  );
}
