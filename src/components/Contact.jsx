import { profile } from "../data/content";

const emailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`;

export default function Contact() {
  return (
    <section id="contact" className="border-y border-white/[0.08] bg-haze">
      <div className="mx-auto max-w-7xl px-5 py-20 md:py-32">
        <p className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-surface px-3 py-1 text-sm font-medium text-accent">
          <span className="h-2 w-2 rounded-full bg-accent motion-safe:animate-pulse" />
          Let&apos;s connect
        </p>

        <h2 className="mt-6 max-w-5xl font-display text-[clamp(2.8rem,9vw,8rem)] font-bold leading-[0.95] tracking-[-0.06em]">
          LET&apos;S BUILD <span className="text-accent">WHAT&apos;S NEXT.</span>
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="max-w-xl leading-relaxed text-muted">
              Have an idea taking shape? Send me an email and let&apos;s start a conversation.
            </p>
            {(profile.linkedin || profile.github) && (
              <ul className="mt-6 flex flex-wrap gap-5 text-sm font-medium text-muted">
                {profile.linkedin && (
                  <li>
                    <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">
                      LinkedIn <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                )}
                {profile.github && (
                  <li>
                    <a href={profile.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-accent">
                      GitHub <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                )}
              </ul>
            )}
          </div>

          {profile.email && (
            <div className="rounded-3xl border border-white/[0.08] bg-void p-6 sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-void">
                <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-accent">Start a conversation</p>
              <a
                href={emailComposeUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Email ${profile.name} at ${profile.email}`}
                className="group mt-3 flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-accent/40 hover:bg-accent/[0.06] sm:p-5"
              >
                <span className="min-w-0">
                  <span className="block font-display text-xl font-bold text-ink sm:text-2xl">Email me</span>
                  <span className="mt-1 block break-all text-sm text-muted">{profile.email}</span>
                </span>
                <span aria-hidden="true" className="shrink-0 text-2xl text-accent transition-transform group-hover:translate-x-1">↗</span>
              </a>
              <p className="mt-4 text-sm leading-relaxed text-muted">Opens a new Gmail compose window addressed to me.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
