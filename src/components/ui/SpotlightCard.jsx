import { useRef, useState, useCallback } from "react";
import { cn } from "../../utils/cn";

export default function SpotlightCard({
  children,
  className = "",
  spotlightColor = "rgba(139, 92, 246, 0.16)",
  borderColor = "rgba(167, 139, 250, 0.45)",
  size = 400,
  style = {},
  ...props
}) {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = useCallback(
    (e) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    },
    []
  );

  const handleMouseEnter = useCallback(() => {
    setOpacity(1);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setOpacity(0);
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        WebkitBackdropFilter: "blur(20px)",
        backdropFilter: "blur(20px)",
        transform: "translateZ(0)",
        WebkitTransform: "translateZ(0)",
        willChange: "transform, backdrop-filter",
        ...style,
      }}
      className={cn(
        "relative rounded-3xl border border-white/10 bg-[#0f172a]/45 p-6 md:p-8 transition-all duration-300 overflow-hidden group shadow-2xl shadow-black/50",
        className
      )}
      {...props}
    >
      {/* Background Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(${size}px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />

      {/* Border Spotlight with Corner Highlights */}
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(${size * 0.7}px circle at ${position.x}px ${position.y}px, ${borderColor}, transparent 80%)`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
      />

      {/* Card Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
