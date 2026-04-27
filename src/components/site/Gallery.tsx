import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import w from "@/assets/service-wedding.jpg";
import f from "@/assets/service-farmhouse.jpg";

const images = [g1, g2, g3, g4, g5, g6, w, f];

export function Gallery() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-ivory">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Moments On A Plate"
          title={<>A Glimpse Of Our <em className="text-gradient-gold not-italic">Craft</em></>}
          subtitle="A curated gallery from real events and kitchens — flavours, settings, and the joy of celebration."
        />

        <div className="mt-14 columns-2 md:columns-3 lg:columns-4 gap-4 [column-fill:_balance]">
          {images.map((src, i) => (
            <motion.button
              key={src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
              onClick={() => setActive(src)}
              className="group relative mb-4 block w-full overflow-hidden rounded-2xl shadow-soft break-inside-avoid"
            >
              <img
                src={src}
                alt="SREE Foods catering"
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-deep/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-3 left-3 right-3 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all">
                <span className="text-[10px] tracking-[0.3em] uppercase text-gold">View</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[80] grid place-items-center bg-maroon-deep/80 backdrop-blur-md p-6 cursor-zoom-out"
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={active}
              alt="Preview"
              className="max-h-[88vh] max-w-[92vw] rounded-2xl shadow-gold"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
