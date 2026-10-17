import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import SectionHeading from "./SectionHeading";
import { projects } from "../data/content";

const gradients = [
  "from-hot to-electric",
  "from-electric to-fuchsia-500",
  "from-orange-400 to-hot",
];

function Card({ p, i }) {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
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
        {p.image ? (
          <img src={p.image} alt={`${p.title} demo`} loading="lazy" className="aspect-video w-full rounded-2xl object-cover" />
        ) : (
          <div
            className={`flex aspect-video items-center justify-center rounded-2xl bg-gradient-to-br ${gradients[i % gradients.length]} p-4 text-center font-mono text-sm font-medium text-void`}
          >
            <span className="break-all">POST {p.route}</span>
          </div>
        )}

        <h3 className="mt-5 font-display text-2xl font-black leading-tight">{p.title}</h3>
        <p className="mt-2 text-dim">{p.summary}</p>
        <p className="mt-3 text-sm">
          <span className="font-semibold text-hot">Result: </span>
          {p.result}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {p.stack.map((t) => (
            <li key={t} className="rounded-full border border-white/20 px-3 py-1 font-mono text-xs">
              {t}
            </li>
          ))}
        </ul>

        <AnimatePresence initial={false}>
          {open && (
            <motion.dl
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden text-sm"
            >
              <div className="pt-4">
                <dt className="font-semibold">Problem</dt>
                <dd className="text-dim">{p.problem}</dd>
              </div>
              <div className="pt-3">
                <dt className="font-semibold">Solution</dt>
                <dd className="text-dim">{p.solution}</dd>
              </div>
            </motion.dl>
          )}
        </AnimatePresence>

        <div className="mt-5 flex flex-wrap items-center gap-5 text-sm font-semibold">
          <button type="button" aria-expanded={open} onClick={() => setOpen((v) => !v)} className="rounded-full bg-bone px-4 py-2 text-void">
            {open ? "Hide case study" : "Read case study"}
          </button>
          <a href={p.live} target="_blank" rel="noreferrer" className="underline underline-offset-4">
            Live demo
          </a>
          <a href={p.github} target="_blank" rel="noreferrer" className="underline underline-offset-4">
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-5 py-20 md:py-32">
      <SectionHeading title="Projects" text="Selected project details will be added soon." />
      <div className="grid items-start gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.length > 0 ? (
          projects.map((p, i) => <Card key={p.title} p={p} i={i} />)
        ) : (
          <p className="rounded-3xl border border-white/10 bg-haze p-8 text-dim md:col-span-2 xl:col-span-3">
            Project details will be added soon.
          </p>
        )}
      </div>
    </section>
  );
}
