import { useState } from "react";
import { motion } from "motion/react";
import { navLinks, profile } from "../data/content";

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-4 z-50 flex flex-col items-center px-4"
    >
      <nav
        aria-label="Main"
        className="relative grid h-14 w-full max-w-7xl grid-cols-[1fr_auto] items-center rounded-2xl border border-white/10 bg-void/90 px-2 pl-5 shadow-2xl shadow-black/10 backdrop-blur-xl sm:rounded-full lg:h-16 lg:grid-cols-[1fr_auto_1fr] lg:px-3"
      >
        <a href="#home" className="flex min-w-0 items-center gap-3 justify-self-start font-display text-sm font-bold tracking-tight">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-xs text-void">D</span>
          <span>{profile.name}<span className="text-accent">.</span></span>
        </a>
        <ul className="hidden items-center gap-5 justify-self-center xl:flex 2xl:gap-7">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="whitespace-nowrap text-sm text-muted transition-colors hover:text-accent">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 justify-self-end">
          <a
            href="#contact"
            className="hidden rounded-full border border-accent bg-accent px-5 py-2.5 text-sm font-semibold text-void shadow-sm shadow-blue-900/10 transition-transform hover:scale-[1.03] xl:block"
          >
            Let&apos;s talk
          </a>
          <button
            type="button"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            aria-pressed={theme === "light"}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            onClick={onToggleTheme}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bone/5 text-bone transition-colors hover:bg-bone/10"
          >
            {theme === "dark" ? (
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
              </svg>
            ) : (
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />
              </svg>
            )}
          </button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/5 transition-colors hover:bg-white/10 xl:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d={open ? "M6 6l12 12M18 6L6 18" : "M4 8h16M4 16h16"} />
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <motion.ul
          id="mobile-menu"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-2 w-full max-w-7xl rounded-2xl border border-white/10 bg-void/95 p-3 backdrop-blur-xl xl:hidden"
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
