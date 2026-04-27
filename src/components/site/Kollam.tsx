import { motion } from "framer-motion";

interface KollamProps {
  className?: string;
  size?: number;
  animate?: boolean;
  color?: "maroon" | "gold";
}

/**
 * Decorative South Indian kollam / muggulu pattern.
 * Drawn with strokeDasharray animation for a hand-drawn feel.
 */
export function Kollam({ className, size = 200, animate = true, color = "maroon" }: KollamProps) {
  const stroke = color === "maroon" ? "var(--maroon)" : "var(--gold)";
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      fill="none"
    >
      <g stroke={stroke} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" opacity="0.85">
        {/* dot grid */}
        {Array.from({ length: 5 }).map((_, r) =>
          Array.from({ length: 5 }).map((_, c) => (
            <circle key={`d-${r}-${c}`} cx={40 + c * 30} cy={40 + r * 30} r="1.4" fill={stroke} />
          ))
        )}

        {/* central lotus */}
        <motion.g
          initial={animate ? { pathLength: 0, opacity: 0 } : false}
          whileInView={animate ? { pathLength: 1, opacity: 0.9 } : undefined}
          viewport={{ once: true }}
          transition={{ duration: 4, ease: "easeInOut" }}
        >
          {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
            <motion.path
              key={deg}
              d="M100 100 C 110 70, 130 60, 100 40 C 70 60, 90 70, 100 100 Z"
              transform={`rotate(${deg} 100 100)`}
            />
          ))}
          <circle cx="100" cy="100" r="8" />
          <circle cx="100" cy="100" r="3" fill={stroke} />
        </motion.g>

        {/* outer petals */}
        <motion.g
          initial={animate ? { pathLength: 0 } : false}
          whileInView={animate ? { pathLength: 1 } : undefined}
          viewport={{ once: true }}
          transition={{ duration: 5, ease: "easeInOut", delay: 0.3 }}
        >
          {[0, 60, 120, 180, 240, 300].map((deg) => (
            <path
              key={`o-${deg}`}
              d="M100 30 Q 115 50 100 70 Q 85 50 100 30 Z"
              transform={`rotate(${deg} 100 100)`}
            />
          ))}
          <circle cx="100" cy="100" r="70" />
          <circle cx="100" cy="100" r="88" strokeDasharray="2 5" />
        </motion.g>
      </g>
    </svg>
  );
}

export function CornerKollam({ position = "tl", size = 140 }: { position?: "tl" | "tr" | "bl" | "br"; size?: number }) {
  const map = {
    tl: "top-0 left-0",
    tr: "top-0 right-0 -scale-x-100",
    bl: "bottom-0 left-0 -scale-y-100",
    br: "bottom-0 right-0 -scale-100",
  } as const;
  return (
    <div className={`pointer-events-none absolute ${map[position]} opacity-25`}>
      <Kollam size={size} animate={false} />
    </div>
  );
}
