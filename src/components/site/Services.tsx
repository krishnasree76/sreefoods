import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import wedding from "@/assets/service-wedding.jpg";
import birthday from "@/assets/service-birthday.jpg";
import house from "@/assets/service-house.jpg";
import farm from "@/assets/service-farmhouse.jpg";

const services = [
  { t: "Wedding Catering", d: "Grand multi-cuisine spreads designed for the most important day of your life.", img: wedding },
  { t: "Birthday Catering", d: "Joyful menus that turn cakes and curries into lasting memories.", img: birthday },
  { t: "House Parties", d: "Intimate gatherings, homestyle warmth, with chef-grade service at your doorstep.", img: house },
  { t: "Farmhouse Events", d: "Outdoor feasts under the stars — full setup, full flavour, full hospitality.", img: farm },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-maroon-deep text-ivory overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_1px_1px,_var(--gold)_1px,_transparent_0)] [background-size:32px_32px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <span className="text-[11px] tracking-[0.4em] uppercase text-gold">What We Offer</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl">
            Crafted For <em className="text-gradient-gold not-italic">Every Occasion</em>
          </h2>
          <div className="mt-4 mx-auto h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent" />
          <p className="mt-5 mx-auto max-w-2xl text-ivory/70">
            Bespoke menus, expert service, and an unwavering devotion to taste — across every kind of celebration.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.article
              key={s.t}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-3xl border border-gold/15 bg-maroon/40 backdrop-blur transition-all hover:border-gold/60 hover:shadow-gold"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={s.img}
                  alt={s.t}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep via-maroon-deep/40 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="font-display text-xl text-ivory group-hover:text-gold transition-colors">
                  {s.t}
                </div>
                <div className="mt-2 text-sm text-ivory/70 leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all">
                  {s.d}
                </div>
                <div className="mt-4 inline-flex items-center gap-2 text-xs text-gold">
                  Enquire
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
              {/* gold corner glow on hover */}
              <div className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" style={{ boxShadow: "inset 0 0 60px color-mix(in oklab, var(--gold) 25%, transparent)" }} />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
