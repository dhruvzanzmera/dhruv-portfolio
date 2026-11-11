import { motion } from "motion/react";
import Magnetic from "./Magnetic";
import { profile } from "../data/content";

const lines = ["DHRUV", "ZANZMERA", "FULL-STACK DEV."];

export default function Hero() {
  let letterIndex = 0;

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="hero-glow pointer-events-none absolute inset-0" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32">
        <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted sm:text-sm">
          <span className="h-px w-8 bg-accent" />
          {profile.role} <span className="text-accent">/</span> {profile.company}
        </p>

        <h1 aria-label={lines.join(" ")} className="font-display font-bold leading-[0.92] tracking-[-0.065em]">
          {lines.map((line) => (
            <span
              key={line}
              aria-hidden="true"
              className={`block overflow-hidden pb-1 ${line === "FULL-STACK DEV." ? "text-[clamp(1.7rem,8.5vw,7.8rem)] text-accent" : "text-[clamp(2.5rem,9.2vw,8.6rem)]"}`}
            >
              {[...line].map((ch) => {
                const i = letterIndex++;
                return (
                  <motion.span
                    key={i}
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.15 + i * 0.035, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block"
                  >
                    {ch === " " ? "\u00A0" : ch}
                  </motion.span>
                );
              })}
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-7 max-w-lg text-base leading-relaxed text-muted sm:text-lg"
        >
          I build thoughtful web experiences, bringing frontend craft and full-stack thinking together from the first idea to the final detail.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.35 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <Magnetic>
            <a href="#projects" className="group flex items-center gap-3 rounded-full border border-accent bg-accent px-6 py-3.5 font-semibold text-white shadow-sm shadow-blue-900/10 transition-transform hover:scale-[1.03]">
              Explore my work
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">↗</span>
            </a>
          </Magnetic>
          <Magnetic>
            <a
              href="#contact"
              className="block rounded-full border border-line bg-surface px-6 py-3.5 font-semibold shadow-sm shadow-slate-900/5 transition-colors hover:border-accent/40 hover:bg-accent-soft"
            >
              Let&apos;s talk
            </a>
          </Magnetic>
        </motion.div>
      </div>
    </section>
  );
}
