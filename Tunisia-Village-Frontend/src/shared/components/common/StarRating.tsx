import React from 'react';
import { Star } from 'lucide-react';

export interface StarRatingProps {
  rating: number;
  max?: number;
}

export function StarRating({ rating, max = 5 }: StarRatingProps) {
  // Clamp the rating between 0 and max
  const clampedRating = Math.max(0, Math.min(rating, max));

  return (
    <div className="flex items-center gap-0.5" dir="ltr">
      {Array.from({ length: max }).map((_, index) => {
        const starValue = index + 1;
        // Determine whether this star should be full, half, or empty
        const isFull = clampedRating >= starValue;
        const isHalf = !isFull && clampedRating > index && clampedRating < starValue;

        return (
          <div key={index} className="relative flex items-center justify-center shrink-0">
            {isHalf ? (
              <div className="relative w-4 h-4">
                {/* Gray background star */}
                <Star className="absolute inset-0 w-4 h-4 text-gray-200 fill-none" strokeWidth={2} />
                {/* Golden half star */}
                <div className="absolute inset-0 overflow-hidden w-1/2 select-none pointer-events-none">
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500" strokeWidth={2} />
                </div>
              </div>
            ) : isFull ? (
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" strokeWidth={2} />
            ) : (
              <Star className="w-4 h-4 text-gray-200 fill-none" strokeWidth={2} />
            )}
          </div>
        );
      })}
    </div>
  );
}
