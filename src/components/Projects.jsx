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
  const highlights = project.highlights ?? project.tech.map((group) => group.items[0]).slice(0, 5);

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
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-haze p-3 transition-colors duration-300 hover:border-hot/30 sm:p-4"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx,50%) var(--my,50%), rgba(201,240,107,.10), transparent 45%)",
        }}
      />

      <div className="relative flex flex-1 flex-col">
        <div className="relative overflow-hidden rounded-xl border border-white/10">
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            loading="lazy"
            className="aspect-[1.65] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
          <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-void/75 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-bone backdrop-blur-md">
            {category}
          </span>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <h3 className="font-display text-[clamp(1.05rem,1.3vw,1.5rem)] font-bold leading-tight tracking-tight">{project.title}</h3>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title} project in a new tab`}
            className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-hot transition-colors hover:border-hot/40 hover:bg-hot/10"
          >
            <span aria-hidden="true">↗</span>
          </a>
        </div>
        <p className="mt-2 line-clamp-3 text-[clamp(0.85rem,0.9vw,1rem)] leading-relaxed text-dim">{project.summary}</p>
        <ul aria-label={`${project.title} highlights`} className="mt-auto flex flex-wrap gap-1.5 pt-4">
          {highlights.map((highlight) => (
            <li
              key={highlight}
              className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[0.7rem] font-medium text-dim"
            >
              {highlight}
            </li>
          ))}
        </ul>
        {Array.isArray(project.features) && (
          <details className="mt-4 border-t border-white/10 pt-3 text-sm text-dim">
            <summary className="flex cursor-pointer list-none items-center justify-between font-semibold transition-colors hover:text-bone">
              Technology &amp; key features
              <span aria-hidden="true" className="text-lg leading-none text-hot">+</span>
            </summary>
            <div className="mt-4 space-y-4">
              <div>
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-bone">Technology</h4>
                <dl className="space-y-2">
                  {project.tech.map((group) => (
                    <div key={group.category}>
                      <dt className="font-medium text-bone">{group.category}</dt>
                      <dd>{group.items.join(" · ")}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div>
                <h4 className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-bone">Key features</h4>
                <ul className="flex flex-wrap gap-1.5">
                  {project.features.map((feature) => (
                    <li key={feature} className="rounded-full border border-hot/20 bg-hot/[0.06] px-2.5 py-1 text-xs text-dim">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </details>
        )}
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
      <section id="projects" className="mx-auto max-w-7xl border-t border-line px-5 pb-12 pt-20 md:pb-16 md:pt-32">
        <SectionHeading title="Full-stack projects" text="Products built across the frontend, backend, database, and integrated services." />
        <div className="grid auto-rows-fr items-stretch gap-5 md:grid-cols-2">
          {fullStackProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} category="Full-stack application" i={i} />
          ))}
        </div>
      </section>

      <section id="frontend-projects" className="mx-auto max-w-7xl border-t border-line px-5 py-12 md:py-20">
        <SectionHeading title="Frontend projects" text="A mix of React applications and HTML, CSS, and JavaScript builds, each shaped around a clear idea and a considered experience." />
        <ProjectGrid projects={allFrontendProjects} category="Frontend project" />
      </section>
    </>
  );
}
