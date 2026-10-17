import SectionHeading from "./SectionHeading";
import { stack } from "../data/content";

export default function TechStack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <SectionHeading
        title="Tech stack"
        text="Technology details will be added soon."
      />

      {stack.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((g) => (
            <div key={g.group} className="rounded-xl border border-line bg-card p-5">
              <h3 className="font-display text-lg font-bold">{g.group}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-line bg-paper px-2.5 py-1 font-mono text-xs"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
