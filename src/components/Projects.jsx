import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/content";

function Card({ p, i }) {
  const ref = useRef(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [7, -7]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-7, 7]), { stiffness: 200, damping: 20 });

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    mx.set(px);
    my.set(py);
    ref.current.style.setProperty("--mx", `${px * 100}%`);
    ref.current.style.setProperty("--my", `${py * 100}%`);
  };
  const onLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: i * 0.1 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-haze p-3 transition-colors duration-300 hover:border-hot/30 sm:p-4 2xl:p-3"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx,50%) var(--my,50%), rgba(201,240,107,.10), transparent 45%)",
        }}
      />

      <div className="relative flex flex-1 flex-col">
        <img
          src={p.image}
          alt={`${p.title} project preview`}
          loading="lazy"
          className="aspect-[1.65] w-full rounded-xl border border-white/10 object-cover"
        />
        <h3 className="mt-4 font-display text-[clamp(1.05rem,1.3vw,1.5rem)] font-bold leading-tight tracking-tight">{p.title}</h3>
        <p className="mt-2 line-clamp-3 text-[clamp(0.85rem,0.9vw,1rem)] leading-relaxed text-dim">{p.summary}</p>
        <ul aria-label={`${p.title} highlights`} className="mt-auto flex flex-wrap gap-1.5 pt-4">
          {p.highlights.map((highlight) => (
            <li
              key={highlight}
              className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[0.7rem] font-medium text-dim"
            >
              {highlight}
            </li>
          ))}
        </ul>
        <a
          href={p.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-hot transition-colors hover:text-bone"
        >
          Visit live site
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 py-20 md:py-32">
      <SectionHeading title="Selected work" text="A few concepts and builds, each shaped around a clear idea and a considered experience." />
      <div className="grid auto-rows-fr items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-5">
        {projects.map((p, i) => <Card key={p.title} p={p} i={i} />)}
      </div>
    </section>
  );
}
