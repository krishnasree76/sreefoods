import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero-feast.jpg";
import { Kollam } from "./Kollam";
import { GoldParticles } from "./GoldParticles";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="home" ref={ref} className="relative min-h-screen overflow-hidden pt-28 pb-16">
      {/* Soft radial glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-ivory" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-gold/10 blur-3xl animate-pulse-glow" />

      {/* Animated kollam — center large, slowly drawing */}
      <motion.div
        style={{ y, opacity }}
        className="pointer-events-none absolute inset-0 grid place-items-center"
      >
        <div className="relative animate-spin-slow opacity-[0.18]">
          <Kollam size={760} />
        </div>
      </motion.div>

      <GoldParticles count={22} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [0, 60]) }} className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-ivory/60 px-4 py-1.5 text-[11px] tracking-[0.3em] uppercase text-maroon"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            Hyderabad · Since 2023
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } } }}
            className="mt-6 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-maroon"
          >
            {["Premium", "Catering for", "Every"].map((w, i) => (
              <motion.span
                key={i}
                variants={{ hidden: { y: 40, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                className="block"
              >
                {w}
              </motion.span>
            ))}
            <motion.span
              variants={{ hidden: { y: 40, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
              className="block italic text-gradient-gold"
            >
              Celebration.
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-6 max-w-xl text-base sm:text-lg text-foreground/70 leading-relaxed"
          >
            Authentic Taste. Elegant Presentation. Memorable Experiences — crafted with the warmth of homestyle cooking and the precision of a master kitchen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-maroon px-7 py-3.5 text-sm text-ivory shadow-soft transition-all hover:shadow-gold hover:-translate-y-0.5"
            >
              Book Now
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-maroon/20 bg-ivory/60 px-7 py-3.5 text-sm text-maroon hover:border-gold hover:bg-ivory transition-all"
            >
              View Menu
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mt-12 flex items-center gap-8"
          >
            {[
              { n: "700+", l: "Events Catered" },
              { n: "100%", l: "Homestyle Recipes" },
              { n: "5★", l: "Client Rating" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-2xl text-maroon">{s.n}</div>
                <div className="text-[11px] tracking-widest uppercase text-foreground/55">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Hero image with parallax + frame */}
        <motion.div style={{ y: yImg }} className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
            className="relative mx-auto aspect-[4/5] w-full max-w-md"
          >
            {/* gold frame */}
            <div className="absolute -inset-3 rounded-[2rem] border border-gold/50" />
            <div className="absolute -inset-6 rounded-[2.5rem] border border-gold/20" />
            <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] shadow-soft">
              <img
                src={heroImg}
                alt="South Indian wedding feast served on banana leaf"
                className="h-full w-full object-cover"
                width={1024}
                height={1280}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/40 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -bottom-6 -left-6 rounded-2xl glass shadow-soft px-5 py-4 flex items-center gap-3"
            >
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-gold text-maroon-deep">
                <span className="font-display text-lg">★</span>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-foreground/55">Trusted by</div>
                <div className="font-display text-maroon">700+ Families</div>
              </div>
            </motion.div>

            <div className="absolute -top-4 -right-4 opacity-50">
              <Kollam size={120} color="gold" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground/50"
      >
        <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="h-6 w-px bg-gold"
        />
      </motion.div>
    </section>
  );
}
