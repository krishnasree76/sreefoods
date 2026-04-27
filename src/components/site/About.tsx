import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Kollam } from "./Kollam";
import chefImg from "@/assets/gallery-6.jpg";

const cards = [
  { t: "Fresh Ingredients", d: "Hand-picked produce sourced daily from trusted local growers.", i: "🌿" },
  { t: "Traditional Recipes", d: "Heirloom South Indian recipes passed down through generations.", i: "🪔" },
  { t: "Hygienic Preparation", d: "Spotless kitchens, certified handling, FSSAI standards.", i: "✦" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute -left-20 top-20 opacity-20"><Kollam size={260} animate={false} /></div>
      <div className="absolute -right-20 bottom-20 opacity-20"><Kollam size={260} animate={false} color="gold" /></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Story"
          title={<>About <em className="text-gradient-gold not-italic font-display">SREE FOODS</em></>}
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-[2rem] border border-gold/40" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] shadow-soft">
              <img src={chefImg} alt="Chef plating a traditional dish" className="h-full w-full object-cover" loading="lazy" width={1280} height={1024} />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-ivory">
                <div className="text-[11px] tracking-[0.3em] uppercase text-gold">Founder</div>
                <div className="font-display text-2xl mt-1">Pulijala Sai Ram Kishore</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6 text-foreground/75 leading-relaxed"
          >
            <p className="text-lg">
              Founded in 2023 by <span className="text-maroon font-medium">Pulijala Sai Ram Kishore</span>, SREE FOODS CATERING delivers
              authentic homestyle food at scale — without ever compromising on taste or quality.
            </p>
            <p>
              Based in the heart of Hyderabad, we have proudly served{" "}
              <span className="text-gold font-medium">700+ orders</span> spanning grand weddings, intimate
              birthdays, housewarmings and corporate events. Every plate tells a story of tradition, care, and craft.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {cards.map((c, i) => (
                <motion.div
                  key={c.t}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  whileHover={{ y: -4 }}
                  className="group relative rounded-2xl bg-card p-5 border border-border hover:border-gold/60 transition-colors shadow-soft"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-maroon text-gold text-lg">
                    {c.i}
                  </div>
                  <div className="mt-3 font-display text-maroon">{c.t}</div>
                  <div className="mt-1 text-xs text-foreground/60 leading-relaxed">{c.d}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
