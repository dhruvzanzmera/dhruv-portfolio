import { useState } from "react";
import Magnetic from "./Magnetic";
import { profile } from "../data/content";

const field =
  "w-full border-b-2 border-white/25 bg-transparent py-3 text-lg text-bone placeholder:text-dim focus:border-hot focus-visible:outline-none";

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
    <section id="contact" className="bg-hot text-void">
      <div className="mx-auto max-w-7xl px-5 py-20 md:py-32">
        <p className="inline-flex items-center gap-2 rounded-full border border-void/40 px-3 py-1 text-sm font-medium">
          <span className="h-2 w-2 rounded-full bg-void motion-safe:animate-pulse" />
          Let&apos;s connect
        </p>

        <h2 className="mt-6 font-display text-[clamp(2.4rem,9vw,8rem)] font-black leading-[0.95]">
          LET'S BUILD IT.
        </h2>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <ul className="space-y-3 text-xl font-semibold">
            {profile.email && (
              <li>
                <a href={`mailto:${profile.email}`} className="underline underline-offset-4">
                  {profile.email}
                </a>
              </li>
            )}
            {profile.linkedin && (
              <li>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="underline underline-offset-4">
                  LinkedIn
                </a>
              </li>
            )}
            {profile.github && (
              <li>
                <a href={profile.github} target="_blank" rel="noreferrer" className="underline underline-offset-4">
                  GitHub
                </a>
              </li>
            )}
            {!profile.email && !profile.linkedin && !profile.github && (
              <li className="text-base font-normal">Contact details will be added soon.</li>
            )}
          </ul>

          <form onSubmit={onSubmit} className="space-y-6 text-bone">
            <div className="rounded-3xl bg-void p-6 sm:p-8">
              <label htmlFor="name" className="sr-only">Name</label>
              <input id="name" name="name" required placeholder="Your name" value={form.name} onChange={onChange} className={field} />
              <label htmlFor="email" className="sr-only">Email</label>
              <input id="email" name="email" type="email" required placeholder="Your email" value={form.email} onChange={onChange} className={`${field} mt-4`} />
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea id="message" name="message" rows={4} required placeholder="What do you want to build?" value={form.message} onChange={onChange} className={`${field} mt-4`} />

              <div className="mt-6">
                <Magnetic>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="rounded-full bg-hot px-7 py-4 font-semibold text-void disabled:opacity-60"
                  >
                    {status === "sending" ? "Sending..." : "Send message"}
                  </button>
                </Magnetic>
              </div>
              <p role="status" className="mt-4 min-h-6 text-sm">
                {status === "sent" && "Message sent. I will reply by email."}
                {status === "error" && "Message not sent. Check your connection and try again."}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
