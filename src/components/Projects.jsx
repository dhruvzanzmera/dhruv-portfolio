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
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-haze p-5"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx,50%) var(--my,50%), rgba(255,61,129,.22), transparent 45%)",
        }}
      />

      <div className="relative">
        <img
          src={p.image}
          alt={`${p.title} project preview`}
          loading="lazy"
          className="aspect-video w-full rounded-2xl object-cover"
        />
        <h3 className="mt-5 font-display text-2xl font-black leading-tight">{p.title}</h3>
        <p className="mt-2 line-clamp-5 text-dim">{p.summary}</p>
        <dl className="mt-5 space-y-4 border-t border-white/10 pt-5">
          {p.tech.map(({ category, items }) => (
            <div key={category} className="grid gap-1 sm:grid-cols-[8rem_1fr] sm:gap-3">
              <dt className="font-mono text-xs uppercase tracking-wider text-hot">{category}</dt>
              <dd className="text-sm leading-relaxed text-dim">{items.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 py-20 md:py-32">
      <SectionHeading title="Projects" text="A selection of frontend projects and the tools behind them." />
      <div className="grid auto-rows-fr items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p, i) => <Card key={p.title} p={p} i={i} />)}
      </div>
    </section>
  );
}
