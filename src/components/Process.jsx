import { useRef } from "react";
import { motion, useScroll } from "motion/react";
import SectionHeading from "./SectionHeading";
import { processSteps } from "../data/content";

export default function Process() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });

  return (
    <section id="process" className="mx-auto max-w-7xl px-5 py-20 md:py-32">
      <SectionHeading title="How I work" text="Scroll down. The line fills as each step is done." />

      <div ref={ref} className="relative max-w-3xl">
        <div className="absolute bottom-0 left-[17px] top-0 w-0.5 bg-white/10" />
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute bottom-0 left-[17px] top-0 w-0.5 origin-top bg-gradient-to-b from-hot to-electric"
        />

        <ol className="space-y-14">
          {processSteps.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative pl-16"
            >
              <span className="absolute left-0 top-0 flex h-9 w-9 items-center justify-center rounded-full bg-hot font-display text-sm font-black text-void">
                {i + 1}
              </span>
              <h3 className="font-display text-2xl font-black sm:text-3xl">{s.title}</h3>
              <p className="mt-2 max-w-lg text-dim">{s.text}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
