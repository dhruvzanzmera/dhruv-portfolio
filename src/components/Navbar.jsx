import { useState } from "react";
import { motion } from "motion/react";
import { navLinks, profile } from "../data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.6 }}
      className="fixed inset-x-0 top-4 z-50 flex flex-col items-center px-4"
    >
      <nav
        aria-label="Main"
        className="flex w-full max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-void/80 py-2 pl-5 pr-2 shadow-2xl shadow-black/10 backdrop-blur-xl sm:rounded-full sm:pl-6"
      >
        <a href="#home" className="flex items-center gap-3 font-display text-sm font-bold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-hot text-xs text-void">D</span>
          <span>{profile.name}<span className="text-hot">.</span></span>
        </a>
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-dim transition-colors hover:text-hot">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden rounded-full bg-hot px-5 py-2.5 text-sm font-semibold text-void transition-transform hover:scale-[1.03] md:block"
        >
          Let&apos;s talk
        </a>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-white/10 md:hidden"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d={open ? "M6 6l12 12M18 6L6 18" : "M4 8h16M4 16h16"} />
          </svg>
        </button>
      </nav>

      {open && (
        <motion.ul
          id="mobile-menu"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 w-full max-w-7xl rounded-2xl border border-white/10 bg-void/95 p-3 backdrop-blur-xl md:hidden"
        >
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 font-medium text-dim transition-colors hover:bg-white/5 hover:text-hot"
              >
                {l.label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.header>
  );
}
