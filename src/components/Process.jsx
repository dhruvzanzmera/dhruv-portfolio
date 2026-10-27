import { useRef } from "react";
import { motion, useScroll } from "motion/react";
import SectionHeading from "./SectionHeading";
import { processSteps } from "../data/content";

export default function Process() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });

  return (
    <section id="process" className="mx-auto max-w-7xl px-5 py-20 md:py-32">
      <SectionHeading title="A considered process" text="Good work starts with clarity. Each step moves the idea closer to a useful, polished product." />

      <div ref={ref} className="relative max-w-3xl">
        <div className="absolute bottom-0 left-[17px] top-0 w-px bg-white/10" />
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute bottom-0 left-[17px] top-0 w-px origin-top bg-hot"
        />

        <ol className="space-y-14">
          {processSteps.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative pl-16 sm:pl-20"
            >
              <span className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full border border-hot/40 bg-void font-display text-sm font-semibold text-hot">
                {i + 1}
              </span>
              <h3 className="font-display text-xl font-bold tracking-tight sm:text-2xl">{s.title}</h3>
              <p className="mt-2 max-w-lg leading-relaxed text-dim">{s.text}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
