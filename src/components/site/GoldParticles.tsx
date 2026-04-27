/** Floating golden particles overlay (CSS-only). */
export function GoldParticles({ count = 18 }: { count?: number }) {
  const particles = Array.from({ length: count }).map((_, i) => {
    const size = 2 + Math.random() * 4;
    const left = Math.random() * 100;
    const delay = Math.random() * 12;
    const duration = 14 + Math.random() * 16;
    const opacity = 0.3 + Math.random() * 0.5;
    return { i, size, left, delay, duration, opacity };
  });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <span
          key={p.i}
          className="absolute bottom-[-20px] rounded-full bg-gold animate-float-up"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            boxShadow: "0 0 8px var(--gold)",
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
