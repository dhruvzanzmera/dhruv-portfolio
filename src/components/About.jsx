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
    <section id="about" className="mx-auto max-w-7xl border-t border-line px-5 py-20 md:py-32">
      <SectionHeading title="Behind the build" />

      <p ref={ref} className="max-w-5xl font-display text-xl font-medium leading-[1.4] tracking-tight sm:text-3xl lg:text-4xl">
        {words.map((w, i) => (
          <Word key={i} word={w} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} />
        ))}
      </p>

      <div id="experience" className="mt-16 md:mt-20">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">Experience</p>
        <div className="grid gap-4 md:grid-cols-2">
          {experience.map((job) => (
            <motion.div
              key={job.role + job.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-line bg-surface p-6 shadow-sm shadow-slate-900/5 transition-colors hover:border-accent/40 sm:p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">{job.period}</p>
              <h3 className="mt-3 font-display text-xl font-bold tracking-tight sm:text-2xl">{job.role}</h3>
              <p className="mt-1 text-muted">{job.company}</p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">{job.summary}</p>
              {job.points.length > 0 && (
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
                  {job.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
