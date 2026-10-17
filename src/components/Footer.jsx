import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="bg-void">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-sm text-dim sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React, Motion, Three.js and Tailwind CSS.
        </p>
        <a href="#home" className="font-medium text-bone underline underline-offset-4">
          Back to top
        </a>
      </div>
    </footer>
  );
}
