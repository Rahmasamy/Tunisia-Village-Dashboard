import { TimelineNodeProps } from "./FeatureEffect.types";

export function TimelineNode({ item, index, isActive, onClick }: TimelineNodeProps) {
  const isAbove = item.position === "above";
  const CIRCLE_SIZE = isActive ? 120 : 96;
  const HALF = CIRCLE_SIZE / 2;
 
  return (
    <div className="relative flex flex-col items-center" style={{ minWidth: 110 }}>
      {/* ── Above slot ── */}
      <div
        className="flex flex-col items-center"
        style={{ height: 170, justifyContent: isAbove ? "flex-end" : "flex-start" }}
      >
        {isAbove && (
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={onClick}
            style={{ animationDelay: `${index * 80}ms` }}
          >
            {/* Label */}
            <div
              className="text-center mb-2 transition-all duration-400"
              style={{ opacity: isActive ? 1 : 0.55 }}
            >
              <p
                className="font-semibold text-sm"
                style={{ color: "#FF9149", fontFamily: "'Cairo', sans-serif" }}
              >
                {item.title}
              </p>
              {isActive && (
                <p className="text-xs mt-0.5" style={{ color: "#FF9149", maxWidth: 100 }}>
                  {item.description}
                </p>
              )}
            </div>
 
            {/* Image circle */}
            <div
              className="relative rounded-full overflow-hidden transition-all duration-500"
              style={{
                width: CIRCLE_SIZE,
                height: CIRCLE_SIZE,
                border: `2.5px solid ${isActive ? "#FF9149" : "#E5B99A"}`,
                boxShadow: isActive
                  ? "0 8px 32px rgba(216,149,106,0.35)"
                  : "0 2px 8px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500"
                style={{ transform: isActive ? "scale(1.08)" : "scale(1)" }}
              />
              {/* Warm overlay */}
              <div
                className="absolute inset-0 transition-opacity duration-400"
                style={{
                  background:
                    "radial-gradient(circle at 60% 40%, rgba(216,149,106,0.18) 0%, transparent 70%)",
                  opacity: isActive ? 1 : 0,
                }}
              />
            </div>
 
            {/* Connector dashes */}
            <div
              style={{
                width: 1.5,
                height: 24,
                borderLeft: "1.5px dashed #FF9149",
                marginTop: 4,
              }}
            />
          </div>
        )}
      </div>
 
      {/* ── Track dot ── */}
      <div
        className="relative cursor-pointer transition-all duration-300"
        style={{ zIndex: 10 }}
        onClick={onClick}
      >
        <div
          className="rounded-full transition-all duration-400"
          style={{
            width: isActive ? 14 : 10,
            height: isActive ? 14 : 10,
            background: isActive ? "#FF9149" : "#fff",
            border: `2px solid ${isActive ? "#d97c4dff" : "#FF9149"}`,
            boxShadow: isActive ? "0 0 0 4px rgba(216,149,106,0.2)" : "none",
          }}
        />
      </div>
 
      {/* ── Year label ── */}
      <p
        className="text-xs font-semibold mt-1 transition-all duration-300"
        style={{
          color: isActive ? "#B06540" : "#C9956F",
          fontFamily: "'Cairo', sans-serif",
          fontSize: isActive ? 13 : 11,
        }}
      >
        {item.year}
      </p>
 
      {/* ── Below slot ── */}
      <div
        className="flex flex-col items-center"
        style={{ height: 170, justifyContent: isAbove ? "flex-end" : "flex-start" }}
      >
        {!isAbove && (
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={onClick}
          >
            {/* Connector dashes */}
            <div
              style={{
                width: 1.5,
                height: 24,
                borderLeft: "1.5px dashed #FF9149",
                marginBottom: 4,
              }}
            />
 
            {/* Image circle */}
            <div
              className="relative rounded-full overflow-hidden transition-all duration-500"
              style={{
                width: CIRCLE_SIZE,
                height: CIRCLE_SIZE,
                border: `2.5px solid ${isActive ? "#FF9149" : "#E5B99A"}`,
                boxShadow: isActive
                  ? "0 8px 32px rgba(216,149,106,0.35)"
                  : "0 2px 8px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500"
                style={{ transform: isActive ? "scale(1.08)" : "scale(1)" }}
              />
              <div
                className="absolute inset-0 transition-opacity duration-400"
                style={{
                  background:
                    "radial-gradient(circle at 60% 40%, rgba(216,149,106,0.18) 0%, transparent 70%)",
                  opacity: isActive ? 1 : 0,
                }}
              />
            </div>
 
            {/* Label */}
            <div
              className="text-center mt-2 transition-all duration-400"
              style={{ opacity: isActive ? 1 : 0.55 }}
            >
              <p
                className="font-semibold text-sm"
                style={{ color: "#B06540", fontFamily: "'Cairo', sans-serif" }}
              >
                {item.title}
              </p>
              {isActive && (
                <p className="text-xs mt-0.5" style={{ color: "#C48560", maxWidth: 100 }}>
                  {item.description}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}