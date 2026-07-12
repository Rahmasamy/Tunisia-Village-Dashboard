import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { TrueStoriesCards } from "@/src/shared/lib/consts/data";
import { TestimonialCard } from "@/src/modules/Slider/components/TrueStories/TrueStories";
import CommonButton from "@/src/shared/components/common/Buttons/CommonButton";
export default function TrueStoriesCarousel() {
    const [activeIndex, setActiveIndex] = useState(1); // start at middle card

    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "center",
        startIndex: 1,
        containScroll: false,
        direction: "rtl",
        duration: 40,
    });

    // Sync embla scroll position → activeIndex state
    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setActiveIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        emblaApi.on("select", onSelect);
        onSelect();
    }, [emblaApi, onSelect]);

    // When a card is clicked, scroll embla to it
    const handleCardClick = (index: number) => {
        if (emblaApi) emblaApi.scrollTo(index);
        setActiveIndex(index);
    };

    const scrollPrev = () => emblaApi?.scrollPrev();
    const scrollNext = () => emblaApi?.scrollNext();

    return (
        <div className="min-h-screen  flex flex-col items-center justify-center py-16 px-4">
            {/* Title */}
            <div className="text-center mb-10" dir="rtl">
                <h2 className="text-3xl font-extrabold text-gray-900">قصص نجاح</h2>
                <p className="text-gray-500 mt-2 text-sm">اكتشف تجارب حقيقية من أعضاء مجتمعنا</p>
            </div>

            {/* Carousel wrapper */}
            <div className="w-full max-w-5xl relative">
                {/* Prev / Next arrows */}
                <button
                    onClick={scrollPrev}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-emerald-600 hover:bg-emerald-50 transition -mr-5"
                    aria-label="السابق"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                <button
                    onClick={scrollNext}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center text-emerald-600 hover:bg-emerald-50 transition -ml-5"
                    aria-label="التالي"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Embla viewport */}
                <div className="overflow-hidden py-6 px-10" ref={emblaRef} dir="rtl">
                    <div className="flex gap-6 items-center">
                        {TrueStoriesCards.map((card, i) => (
                            <TestimonialCard
                                key={card.id}
                                card={card}
                                isCenter={i === activeIndex}
                                onClick={() => handleCardClick(i)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Dots */}
            <div className="flex gap-2 mt-6">
                {TrueStoriesCards.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => handleCardClick(i)}
                        className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex ? "w-8 bg-emerald-600" : "w-2 bg-emerald-200"
                            }`}
                    />
                ))}
            </div>

            {/* Bottom CTA */}

            <CommonButton text="أصنع أثرك وشاركه معنا
"
                className="mt-4 bg-[var(--color-primary)] hover:bg-[var( --color-primary-light)]"
            />
        </div>
    );
}
