import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left bg-gradient-gold"
      />
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div
          className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
            scrolled ? "" : ""
          }`}
        >
          <div
            className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
              scrolled ? "glass shadow-soft" : ""
            }`}
          >
            <a href="#home" className="flex items-center gap-3 group">
              <motion.span
                whileHover={{ rotate: 12 }}
                className="grid h-10 w-10 place-items-center rounded-full bg-gradient-maroon text-ivory shadow-soft"
              >
                <span className="font-display text-lg">S</span>
              </motion.span>
              <div className="leading-tight">
                <div className="font-display text-lg text-maroon">SREE FOODS</div>
                <div className="text-[10px] tracking-[0.3em] text-gold uppercase">Catering</div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="relative text-sm text-foreground/80 hover:text-maroon transition-colors group"
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              className="hidden md:inline-flex items-center rounded-full bg-gradient-maroon px-5 py-2.5 text-sm text-ivory shadow-soft hover:shadow-gold transition-shadow"
            >
              Book Now
            </a>

            <button
              aria-label="Menu"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden grid h-10 w-10 place-items-center rounded-full glass"
            >
              <span className={`block h-0.5 w-5 bg-maroon transition-transform ${open ? "translate-y-0.5 rotate-45" : "-translate-y-1"}`} />
              <span className={`block h-0.5 w-5 bg-maroon transition-transform ${open ? "-translate-y-0.5 -rotate-45" : "translate-y-1"}`} />
            </button>
          </div>

          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-2 rounded-2xl glass shadow-soft p-4 flex flex-col gap-2"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm hover:bg-maroon/5 hover:text-maroon"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-1 text-center rounded-full bg-gradient-maroon px-4 py-2.5 text-sm text-ivory"
              >
                Book Now
              </a>
            </motion.div>
          )}
        </div>
      </motion.header>
    </>
  );
}
