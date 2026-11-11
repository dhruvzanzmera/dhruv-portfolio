import { profile } from "../data/content";

export default function FloatingActions() {
  return (
    <aside
      aria-label="Quick actions"
      className="fixed bottom-5 right-5 z-[85] flex flex-col items-end gap-3 sm:bottom-7 sm:right-7"
    >
      <a
        href="#home"
        aria-label="Go to top"
        title="Go to top"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-surface text-ink shadow-lg shadow-slate-900/10 transition-all hover:-translate-y-1 hover:border-accent/40 hover:text-accent"
      >
        <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </a>
      <a
        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Email me"
        title="Email me"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-accent bg-accent text-white shadow-lg shadow-blue-900/15 transition-all hover:-translate-y-1 hover:brightness-105"
      >
        <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      </a>
    </aside>
  );
}
