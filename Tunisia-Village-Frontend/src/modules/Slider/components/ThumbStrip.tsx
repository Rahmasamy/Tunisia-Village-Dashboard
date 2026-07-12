export function ThumbStrip({ images } : {
    images : string[]
}) {
  return (
    <div className="flex gap-2 mt-3">
      {images.slice(1).map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className="w-20 h-14 object-cover rounded-xl border-2 border-white/30"
        />
      ))}
      {/* "+3" badge on last thumb */}
      <div className="w-20 h-14 rounded-xl bg-black/40 border-2 border-white/20 flex items-center justify-center text-white font-bold text-sm">
        +3
      </div>
    </div>
  );
}