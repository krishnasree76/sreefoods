import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { Kollam } from "./Kollam";

const quotes = [
  { q: "SREE Foods catered our wedding for 600 guests. Every dish tasted like home — but elevated. Compliments still pouring in!", n: "Lakshmi & Karthik", e: "Wedding · Hyderabad" },
  { q: "Punctual, professional and incredibly tasty. The biryani was the talk of the entire housewarming.", n: "Ravi Teja", e: "Griha Pravesh · Kothapet" },
  { q: "From traditional thalis to live dosa counters — they handled everything beautifully. Truly premium service.", n: "Anjali Reddy", e: "Birthday · Jubilee Hills" },
  { q: "We host quarterly corporate lunches with SREE Foods. Consistent quality, every single time.", n: "Vamsi K.", e: "Corporate · Madhapur" },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % quotes.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute -left-32 top-0 opacity-15"><Kollam size={400} animate={false} color="gold" /></div>
      <div className="absolute -right-32 bottom-0 opacity-15"><Kollam size={400} animate={false} /></div>

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          eyebrow="Kind Words"
          title={<>Loved By Hosts <em className="text-gradient-gold not-italic">Across</em> Hyderabad</>}
        />

        <div className="mt-14 relative h-[280px] sm:h-[240px]">
          <AnimatePresence mode="wait">
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 rounded-3xl glass shadow-soft p-8 sm:p-12 text-center flex flex-col justify-center"
            >
              <div className="text-6xl font-display text-gold/40 leading-none">“</div>
              <blockquote className="font-display text-xl sm:text-2xl text-maroon leading-relaxed">
                {quotes[i].q}
              </blockquote>
              <figcaption className="mt-6">
                <div className="text-sm font-medium text-foreground">{quotes[i].n}</div>
                <div className="text-[11px] tracking-[0.3em] uppercase text-gold mt-1">{quotes[i].e}</div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex justify-center gap-3">
          {quotes.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Testimonial ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-gradient-gold" : "w-3 bg-maroon/20 hover:bg-maroon/40"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
