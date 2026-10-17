import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import SectionHeading from "./SectionHeading";
import { about, experience } from "../data/content";

function Word({ word, range, progress }) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.25em] inline-block">
      {word}
    </motion.span>
  );
}

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.6"] });
  const words = about.join(" ").split(" ");

  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-20 md:py-32">
      <SectionHeading title="About me" />

      <p ref={ref} className="max-w-5xl font-display text-xl font-semibold leading-snug sm:text-3xl lg:text-4xl">
        {words.map((w, i) => (
          <Word key={i} word={w} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} />
        ))}
      </p>

      <div id="experience" className="mt-20 grid gap-6 md:grid-cols-2">
        {experience.map((job) => (
          <motion.div
            key={job.role + job.company}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-haze p-6"
          >
            <p className="font-mono text-xs text-hot">{job.period}</p>
            <h3 className="mt-2 font-display text-2xl font-black">{job.role}</h3>
            <p className="text-dim">{job.company}</p>
            {job.points.length > 0 && (
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-dim">
                {job.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
