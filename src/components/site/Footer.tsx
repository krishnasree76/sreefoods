import { Kollam } from "./Kollam";

export function Footer() {
  return (
    <footer className="relative bg-maroon-deep text-ivory/80 pt-16 pb-10 overflow-hidden">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 opacity-10">
        <Kollam size={400} animate={false} color="gold" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-gold text-maroon-deep font-display">S</span>
              <div>
                <div className="font-display text-lg text-ivory">SREE FOODS</div>
                <div className="text-[10px] tracking-[0.3em] text-gold uppercase">Catering · Hyderabad</div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ivory/60 max-w-xs">
              Authentic homestyle food at scale — crafted for weddings, birthdays, and unforgettable celebrations.
            </p>
          </div>

          <div>
            <div className="text-[10px] tracking-[0.4em] uppercase text-gold">Explore</div>
            <ul className="mt-4 space-y-2 text-sm">
              {["About", "Services", "Why Us", "Gallery", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase().replace(" ", "")}`} className="hover:text-gold transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[10px] tracking-[0.4em] uppercase text-gold">Reach Us</div>
            <ul className="mt-4 space-y-2 text-sm text-ivory/70">
              <li><a href="tel:+919912926962" className="hover:text-gold">+91 99129 26962</a></li>
              <li><a href="mailto:sreefoods.23@gmail.com" className="hover:text-gold">sreefoods.23@gmail.com</a></li>
              <li className="leading-relaxed">Indra Nagar, Kothapet, Hyderabad 500035</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 gold-divider" />
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ivory/50">
          <div>© {new Date().getFullYear()} SREE FOODS Catering. All rights reserved.</div>
          <div className="tracking-[0.3em] uppercase text-gold/80">Crafted with care · Hyderabad</div>
        </div>
      </div>
    </footer>
  );
}
