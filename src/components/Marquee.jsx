import { profile } from "../data/content";

const items = ["Thoughtful digital experiences", "Full-stack development", profile.name];

function Row({ reverse, className, textClass }) {
  // list is doubled so the -50% keyframe loops seamlessly
  return (
    <div className={`overflow-hidden py-4 ${className}`}>
      <div className={`marquee-track ${reverse ? "marquee-reverse" : ""}`} aria-hidden="true">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className={`mx-6 whitespace-nowrap font-display text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl ${textClass}`}
          >
            {item} <span className="mx-6 text-void/50">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section aria-label={`Profile: ${items.join(", ")}`} className="my-12 overflow-hidden py-8 md:my-16">
      <Row className="bg-hot py-5" textClass="text-void" />
      <Row
        reverse
        className="border-b border-white/10 py-5"
        textClass="text-transparent [-webkit-text-stroke:1px_var(--color-dim)]"
      />
    </section>
  );
}
