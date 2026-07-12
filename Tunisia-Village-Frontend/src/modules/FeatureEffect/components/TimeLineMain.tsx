import { timelineItems } from "@/src/shared/lib/consts/data";
import { useEffect, useRef, useState } from "react";
import { TimelineNode } from "./FeatreEffect";

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const trackRef = useRef<HTMLDivElement>(null);

  // Auto-advance every 3s
  useEffect(() => {
    if (timelineItems.length === 0) return;
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % timelineItems.length);
    }, 3000);
    return () => clearInterval(id);
  }, [timelineItems.length]);

  return (
    <>



      <section
        className="w-full py-20 px-6 overflow-hidden"
        style={{

          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}

      >


        {/* Timeline track + nodes */}
        <div className="w-full max-w-4xl relative" ref={trackRef}>
          {/* Horizontal dashed line */}
          <div
            className="absolute"
            style={{
              top: "50%",
              left: 0,
              right: 0,
              height: 1.5,
              background:
                "repeating-linear-gradient(90deg, #FF9149 0px, #FF9149 7px, transparent 7px, transparent 13px)",
              transform: "translateY(-50%)",
              zIndex: 1,
            }}
          />

          {/* Nodes row */}
          <div
            className="relative flex items-center justify-between"
            style={{ zIndex: 2 }}
          >
            {timelineItems.map((item, i) => (
              <TimelineNode
                key={item.year}
                item={item}
                index={i}
                isActive={i === activeIndex}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex gap-2 mt-8 ">
          {timelineItems.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === activeIndex ? 24 : 8,
                height: 8,
                background: i === activeIndex ? "#FF9149" : "#E5C9B4",
                border: "none",
                cursor: "pointer",
              }}
              aria-label={`Go to year ${timelineItems[i].year}`}
            />
          ))}
        </div>
      </section>
    </>
  );
}