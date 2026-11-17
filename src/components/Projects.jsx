import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import SectionHeading from "./SectionHeading";
import { frontendProjects, fullStackProjects, uiProjects } from "../data/content";

const allFrontendProjects = [...uiProjects, ...frontendProjects];

function ProjectCard({ project, category, i }) {
  const ref = useRef(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [7, -7]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-7, 7]), { stiffness: 200, damping: 20 });
  const highlights = project.highlights ?? project.tech.flatMap((group) => group.items).slice(0, 5);

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
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-bone/[0.08] bg-haze p-3 transition-colors duration-300 hover:border-hot/30 sm:p-4"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx,50%) var(--my,50%), color-mix(in srgb, var(--color-hot) 10%, transparent), transparent 45%)",
        }}
      />

      <div className="relative flex flex-1 flex-col">
        <img
          src={project.image}
          alt={`${project.title} project preview`}
          loading="lazy"
          className="aspect-[1.65] w-full rounded-xl border border-bone/10 object-cover object-top"
        />
        <div className="mt-4 flex items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-hot">{category}</p>
          <span aria-hidden="true" className="text-sm text-dim transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">↗</span>
        </div>
        <h3 className="mt-2 font-display text-[clamp(1.15rem,1.5vw,1.65rem)] font-bold leading-tight tracking-tight">{project.title}</h3>
        <p className="mt-2 line-clamp-3 text-[clamp(0.85rem,0.9vw,1rem)] leading-relaxed text-dim">{project.summary}</p>

        <ul aria-label={`${project.title} technologies and highlights`} className="mt-auto flex flex-wrap gap-1.5 pt-4">
          {highlights.slice(0, 5).map((highlight) => (
            <li
              key={highlight}
              className="rounded-full border border-bone/10 bg-bone/[0.03] px-2.5 py-1 text-[0.7rem] font-medium text-dim"
            >
              {highlight}
            </li>
          ))}
        </ul>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-hot px-5 py-3 text-sm font-semibold text-void transition-transform hover:scale-[1.03]"
        >
          View project
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </motion.article>
  );
}

function ProjectGrid({ projects, category }) {
  return (
    <div className="grid auto-rows-fr items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, i) => (
        <ProjectCard key={project.title} project={project} category={category} i={i} />
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <>
      <section id="projects" className="mx-auto max-w-7xl px-5 pb-12 pt-20 md:pb-16 md:pt-32">
        <SectionHeading title="Full-stack projects" text="Products built across the frontend, backend, database, and integrated services." />
        <ProjectGrid projects={fullStackProjects} category="Full-stack application" />
      </section>

      <section id="frontend-projects" className="mx-auto max-w-7xl px-5 py-12 md:py-20">
        <SectionHeading title="Frontend projects" text="A mix of React applications and HTML, CSS, and JavaScript builds, each shaped around a clear idea and a considered experience." />
        <ProjectGrid projects={allFrontendProjects} category="Frontend project" />
      </section>
    </>
  );
}
