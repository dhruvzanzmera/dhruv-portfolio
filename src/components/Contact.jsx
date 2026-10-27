import { useState } from "react";
import Magnetic from "./Magnetic";
import { profile } from "../data/content";

const field =
  "w-full border-b border-white/15 bg-transparent py-3 text-base text-bone placeholder:text-dim focus:border-hot focus-visible:outline-none sm:text-lg";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      // Your Express server should accept POST /api/contact. Set VITE_API_URL in .env
      const res = await fetch(`${import.meta.env.VITE_API_URL ?? ""}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setForm({ name: "", email: "", message: "" });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="border-y border-white/[0.08] bg-haze">
      <div className="mx-auto max-w-7xl px-5 py-20 md:py-32">
        <p className="inline-flex items-center gap-2 rounded-full border border-hot/30 px-3 py-1 text-sm font-medium text-hot">
          <span className="h-2 w-2 rounded-full bg-hot motion-safe:animate-pulse" />
          Let&apos;s connect
        </p>

        <h2 className="mt-6 max-w-5xl font-display text-[clamp(2.8rem,9vw,8rem)] font-bold leading-[0.95] tracking-[-0.06em]">
          LET&apos;S BUILD <span className="text-hot">WHAT&apos;S NEXT.</span>
        </h2>
        <p className="mt-6 max-w-xl leading-relaxed text-dim">
          Have an idea taking shape? Share a little about it, and let&apos;s start a conversation.
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <ul className="space-y-4 text-lg font-medium sm:text-xl">
            {profile.email && (
              <li>
                <a href={`mailto:${profile.email}`} className="transition-colors hover:text-hot">
                  {profile.email}
                </a>
              </li>
            )}
            {profile.linkedin && (
              <li>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="transition-colors hover:text-hot">
                  LinkedIn <span aria-hidden="true">↗</span>
                </a>
              </li>
            )}
            {profile.github && (
              <li>
                <a href={profile.github} target="_blank" rel="noreferrer" className="transition-colors hover:text-hot">
                  GitHub <span aria-hidden="true">↗</span>
                </a>
              </li>
            )}
            {!profile.email && !profile.linkedin && !profile.github && (
              <li className="max-w-sm text-base font-normal leading-relaxed text-dim">Use the form to share a project, opportunity, or question.</li>
            )}
          </ul>

          <form onSubmit={onSubmit} className="space-y-6 text-bone">
            <div className="rounded-2xl border border-white/[0.08] bg-void p-6 sm:p-8">
              <label htmlFor="name" className="sr-only">Name</label>
              <input id="name" name="name" required placeholder="Your name" value={form.name} onChange={onChange} className={field} />
              <label htmlFor="email" className="sr-only">Email</label>
              <input id="email" name="email" type="email" required placeholder="Your email address" value={form.email} onChange={onChange} className={`${field} mt-4`} />
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea id="message" name="message" rows={4} required placeholder="Tell me a little about what you have in mind..." value={form.message} onChange={onChange} className={`${field} mt-4`} />

              <div className="mt-6">
                <Magnetic>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="rounded-full bg-hot px-6 py-3.5 font-semibold text-void transition-transform hover:scale-[1.03] disabled:opacity-60"
                  >
                    {status === "sending" ? "Sending..." : "Send an inquiry"}
                  </button>
                </Magnetic>
              </div>
              <p role="status" className="mt-4 min-h-6 text-sm">
                {status === "sent" && "Your message has been received. Thank you for reaching out."}
                {status === "error" && "Your message could not be sent. Please check your connection and try again."}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
