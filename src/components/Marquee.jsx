import { profile } from "../data/content";

const items = [profile.role, profile.company, profile.name];

function Row({ reverse, className, textClass }) {
  // list is doubled so the -50% keyframe loops seamlessly
  return (
    <div className={`overflow-hidden py-4 ${className}`}>
      <div className={`marquee-track ${reverse ? "marquee-reverse" : ""}`} aria-hidden="true">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className={`mx-6 whitespace-nowrap font-display text-4xl font-black sm:text-6xl ${textClass}`}
          >
            {item} <span className="mx-6">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section aria-label={`Profile: ${items.join(", ")}`} className="-mx-4 my-10 overflow-hidden py-10">
      <Row className="-rotate-2 bg-hot" textClass="text-void" />
      <Row
        reverse
        className="rotate-1 border-y border-white/20"
        textClass="text-transparent [-webkit-text-stroke:1.5px_var(--color-bone)]"
      />
    </section>
  );
}
