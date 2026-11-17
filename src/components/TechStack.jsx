import SectionHeading from "./SectionHeading";
import { stack } from "../data/content";

export default function TechStack() {
  return (
    <section id="skills" className="mx-auto max-w-7xl border-t border-line px-5 py-20 md:py-32">
      <SectionHeading
        title="Skills"
        text="Tools and technologies I use to build thoughtful frontend experiences and dependable full-stack applications."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {stack.map((g) => (
          <div key={g.group} className="rounded-2xl border border-line bg-surface p-6 shadow-sm shadow-slate-900/5 sm:p-8">
            <h3 className="font-display text-lg font-semibold">{g.group}</h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-accent/15 bg-accent-soft px-3 py-1.5 text-sm font-medium text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
