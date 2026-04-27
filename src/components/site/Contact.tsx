import { motion } from "framer-motion";
import { useState } from "react";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-gradient-maroon text-ivory overflow-hidden">
      <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_1px_1px,_var(--gold)_1px,_transparent_0)] [background-size:28px_28px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <span className="text-[11px] tracking-[0.4em] uppercase text-gold">Get In Touch</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl">
            Let’s Cater Your Next <em className="text-gradient-gold not-italic">Celebration</em>
          </h2>
          <div className="mt-4 mx-auto h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-10">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              { l: "Founder", v: "Pulijala Sai Ram Kishore" },
              { l: "Phone", v: "+91 99129 26962", href: "tel:+919912926962" },
              { l: "Email", v: "sreefoods.23@gmail.com", href: "mailto:sreefoods.23@gmail.com" },
              { l: "Address", v: "Flat No 102/A, Jubilee Homes Apartment, Road No 2, Indra Nagar, Kothapet, Hyderabad – 500035" },
            ].map((it) => (
              <div key={it.l} className="border-b border-gold/20 pb-5">
                <div className="text-[10px] tracking-[0.4em] uppercase text-gold">{it.l}</div>
                {it.href ? (
                  <a href={it.href} className="mt-2 block font-display text-xl text-ivory hover:text-gold transition-colors">{it.v}</a>
                ) : (
                  <div className="mt-2 font-display text-xl text-ivory leading-snug">{it.v}</div>
                )}
              </div>
            ))}

            <div className="flex gap-3">
              <a href="https://instagram.com/sreefoods.23" target="_blank" rel="noreferrer"
                 className="rounded-full border border-gold/30 px-5 py-2 text-xs hover:bg-gold hover:text-maroon-deep transition-colors">
                Instagram · sreefoods.23
              </a>
              <a href="#" className="rounded-full border border-gold/30 px-5 py-2 text-xs hover:bg-gold hover:text-maroon-deep transition-colors">
                Facebook · SREE FOODS
              </a>
            </div>

            <div className="overflow-hidden rounded-2xl border border-gold/20 shadow-soft">
              <iframe
                title="SREE FOODS Location"
                src="https://www.google.com/maps?q=Kothapet,Hyderabad&output=embed"
                className="w-full h-[220px] grayscale-[0.2]"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-3xl glass shadow-soft p-8 space-y-5 text-foreground"
            style={{ background: "color-mix(in oklab, var(--ivory) 92%, transparent)" }}
          >
            <h3 className="font-display text-2xl text-maroon">Request a Quote</h3>
            <p className="text-sm text-foreground/60">Tell us about your event — we’ll respond within a few hours.</p>

            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Your Name" name="name" />
              <Field label="Phone" name="phone" type="tel" />
            </div>
            <Field label="Event Type" name="event" placeholder="Wedding · Birthday · House party…" />
            <Field label="Date & Guest Count" name="date" placeholder="e.g. 12 Dec · 250 guests" />
            <div>
              <label className="text-[11px] tracking-[0.3em] uppercase text-foreground/55">Message</label>
              <textarea
                name="message"
                rows={4}
                className="mt-1.5 w-full rounded-xl border border-input bg-ivory/70 px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition-all"
                placeholder="Anything we should know…"
              />
            </div>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full rounded-full bg-gradient-maroon py-3.5 text-sm text-ivory shadow-soft hover:shadow-gold transition-shadow"
            >
              {sent ? "Thank you — we’ll be in touch ✦" : "Send Enquiry"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-[11px] tracking-[0.3em] uppercase text-foreground/55">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-xl border border-input bg-ivory/70 px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/30 transition-all"
      />
    </div>
  );
}
