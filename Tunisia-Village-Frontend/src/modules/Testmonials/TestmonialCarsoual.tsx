import { TestmonialCard } from "@/src/modules/Testmonials/components/Testmonial";
import { TitleTag } from "@/src/shared/components/wrappers/BoxWrapper";
import { reviews } from "@/src/shared/lib/consts/data";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

export default function TestmonialCarousel() {
  const [activeIndex, setActiveIndex] = useState<number>(1);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    startIndex: 1,
    containScroll: false,
    direction: "rtl",
  });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = (index: number): void => emblaApi?.scrollTo(index);
  const scrollPrev = (): void => emblaApi?.scrollPrev();
  const scrollNext = (): void => emblaApi?.scrollNext();

  return (
    <div className="bg-white  py-14 px-6 border border-gray-200 rounded-xl" dir="rtl">
      {/* Heading */}

      <div className="w-full flex items-center justify-center">

        <TitleTag>
          آراء العملاء
        </TitleTag>

        <TitleTag>
          آراء العملاء
        </TitleTag>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Prev arrow */}
        <button
          onClick={scrollPrev}
          aria-label="السابق"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center text-gray-500 hover:text-[var(--color-primary)] hover:border-[var(--color-primary-light)] transition -mr-4"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Next arrow */}
        <button
          onClick={scrollNext}
          aria-label="التالي"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center text-gray-500 hover:text-[var(--color-primary)] hover:border-[var(--color-primary-light)] transition -ml-4"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Embla viewport */}
        <div className="overflow-hidden py-7" ref={emblaRef}>
          <div className="flex gap-5 items-center">
            {reviews.map((review, i) => (
              <TestmonialCard
                key={review.id}
                review={review}
                isCenter={i === activeIndex}
                onClick={() => scrollTo(i)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {reviews.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`الانتقال إلى التقييم ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex ? "w-6 bg-[var(--color-primary)]" : "w-2 bg-[var(--color-primary-light)]"
              }`}
          />
        ))}
      </div>
    </div>
  );
}