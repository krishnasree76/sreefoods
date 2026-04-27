import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const items = [
  { t: "Premium Quality", d: "Premium rice, handpicked vegetables, pure spices — sourced fresh, every single day.", n: "01" },
  { t: "Authentic Taste", d: "True South Indian flavours, slow-cooked using time-honoured family recipes.", n: "02" },
  { t: "Timely Service", d: "Punctual setup, seamless serving, and respect for your event's schedule.", n: "03" },
  { t: "Customizable Menus", d: "Tailored menus from traditional thalis to fusion live counters — your vision, our craft.", n: "04" },
  { t: "Full Event Support", d: "Crockery, staff, decor coordination — a complete catering partner from start to finish.", n: "05" },
];

export function WhyUs() {
  return (
    <section id="why" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title={<>The <em className="text-gradient-gold not-italic">SREE FOODS</em> Difference</>}
          subtitle="Every detail, considered. Every plate, perfected. Here is what makes our service truly memorable."
        />

        <div className="mt-16 relative">
          {/* central golden line */}
          <div className="absolute left-1/2 top-0 bottom-0 hidden md:block w-px bg-gradient-to-b from-transparent via-gold/60 to-transparent" />

          <div className="space-y-12">
            {items.map((it, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={it.n}
                  initial={{ opacity: 0, x: left ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6 }}
                  className={`relative grid md:grid-cols-2 gap-6 items-center ${left ? "" : "md:[&>*:first-child]:order-2"}`}
                >
                  <div className={`md:px-10 ${left ? "md:text-right" : "md:text-left"}`}>
                    <div className="font-display text-5xl text-gold/60">{it.n}</div>
                    <h3 className="mt-2 font-display text-2xl text-maroon">{it.t}</h3>
                    <p className="mt-2 text-foreground/70 leading-relaxed">{it.d}</p>
                  </div>
                  <div className="hidden md:flex justify-center">
                    <span className="grid h-4 w-4 place-items-center rounded-full bg-gold ring-8 ring-gold/15" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
