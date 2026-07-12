import { ThumbStrip } from "../ThumbStrip";

export function TestimonialCard({ card, isCenter, onClick }
    : {
        card : any,
        isCenter : boolean,
        onClick : () => void
    }
) {
  return (
    <div
      onClick={onClick}
      className={`
        flex-shrink-0 cursor-pointer select-none
        transition-all duration-500 ease-in-out
        ${isCenter
          ? "w-[520px] opacity-100 scale-100 z-20"
          : "w-[360px] opacity-50 scale-95 z-10"
        }
      `}
      style={{ scrollSnapAlign: "center" }}
    >
      <div
        className={`
          bg-white rounded-3xl overflow-hidden shadow-2xl
          transition-all duration-500
          ${isCenter ? "shadow-[0_20px_60px_rgba(0,150,100,0.25)]" : "shadow-lg"}
        `}
        dir="rtl"
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-5 pt-5 pb-3">
          <img
            src={card.thumbnail}
            alt={card.name}
            className="w-14 h-14 rounded-full object-cover border-3 border-emerald-400 ring-2 ring-emerald-100"
          />
          <div>
            <p className="font-bold text-gray-900 text-base leading-tight">{card.name}</p>
            <p className="text-emerald-600 text-xs mt-0.5">{card.tag}</p>
          </div>
          <span className="mr-auto text-4xl text-emerald-300 leading-none font-serif">"</span>
        </div>
 
        {/* Quote */}
        <p className="px-5 text-gray-700 text-sm leading-relaxed">{card.quote}</p>
 
        {/* Main image */}
        <div className="relative mx-4 mt-3 rounded-2xl overflow-hidden">
          <img
            src={card.images[0]}
            alt=""
            className={`w-full object-cover transition-all duration-500 ${isCenter ? "h-56" : "h-36"}`}
          />
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur flex items-center justify-center shadow-lg">
              <svg className="w-5 h-5 text-emerald-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
 
        {/* Thumbnails strip */}
        <div className="px-4 pb-4">
          <ThumbStrip images={card.images} />
 
          {/* Read more button — only on center */}
          {isCenter && (
            <button className="mt-4 w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-bold text-sm transition-colors duration-200">
              اقرأ المزيد
            </button>
          )}
        </div>
      </div>
    </div>
  );
}