import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-8 text-center text-xs text-muted sm:flex-row sm:text-left sm:text-sm">
        <p>
          © {new Date().getFullYear()} {profile.name}. Thoughtfully designed and developed.
        </p>
        <a href="#home" className="font-medium text-ink transition-colors hover:text-accent">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
