/** Traditional gold divider with central diamond + kollam dots. */
export function SectionDivider() {
  return (
    <div className="flex items-center justify-center gap-4 py-2 text-gold">
      <span className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-gold" />
      <svg width="60" height="14" viewBox="0 0 60 14" fill="none" aria-hidden>
        <circle cx="6" cy="7" r="1.4" fill="currentColor" />
        <circle cx="14" cy="7" r="1.4" fill="currentColor" />
        <path d="M22 7 L30 1 L38 7 L30 13 Z" stroke="currentColor" strokeWidth="1" />
        <circle cx="46" cy="7" r="1.4" fill="currentColor" />
        <circle cx="54" cy="7" r="1.4" fill="currentColor" />
      </svg>
      <span className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-gold" />
    </div>
  );
}
