import React, { useState } from "react";
import Reveal from "./Reveal";

const LINKS = [
  { label: "kritikarajput203@gmail.com", href: "mailto:kritikarajput203@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kritika-rajput/" },
  { label: "GitHub", href: "https://github.com/kritika-rajput30" },
];

const Field = ({ label, name, value, onChange, type = "text", textarea }) => (
  <label className="block">
    <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-night/40">
      {label}
    </span>
    {textarea ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={3}
        required
        className="w-full resize-none border-0 border-b-2 border-night/20 bg-transparent pb-2 text-lg font-medium text-night outline-none transition-colors placeholder:text-night/30 focus:border-night"
        placeholder="…"
      />
    ) : (
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required
        className="w-full border-0 border-b-2 border-night/20 bg-transparent pb-2 text-lg font-medium text-night outline-none transition-colors placeholder:text-night/30 focus:border-night"
        placeholder="…"
      />
    )}
  </label>
);

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio enquiry — ${form.name || "hello"}`
    );
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:kritikarajput203@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-6xl gap-14 md:grid-cols-[1fr_1.1fr] md:gap-20">
        {/* left — statement + direct links */}
        <Reveal>
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-night/40">
            Contact
          </p>
          <h2 className="mt-4 text-5xl font-bold leading-[0.95] tracking-tight text-night md:text-7xl">
            Let&rsquo;s build
            <span className="block text-night/35">something.</span>
          </h2>
          <p className="mt-6 max-w-sm text-night/60">
            Open to freelance and full-time work. Send a message, or reach me
            directly &darr;
          </p>

          <ul className="mt-8 space-y-3">
            {LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center gap-2 text-sm font-medium text-night/70 transition-colors hover:text-night"
                >
                  <span className="opacity-40 transition-transform group-hover:translate-x-0.5">
                    &#8627;
                  </span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* right — form in a brutalist panel */}
        <Reveal delay={0.1}>
          <div className="relative">
            <div
              className="absolute inset-0 translate-x-2.5 translate-y-2.5 bg-night"
              aria-hidden="true"
            />
            <form
              onSubmit={handleSubmit}
              className="relative space-y-8 border-2 border-night bg-white p-7 md:p-9"
            >
              <Field
                label="Your name"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
              <Field
                label="Your email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
              />
              <Field
                label="Message"
                name="message"
                value={form.message}
                onChange={handleChange}
                textarea
              />
              <button
                type="submit"
                className="w-full border-2 border-night bg-night px-6 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition-colors hover:bg-white hover:text-night"
              >
                Send message &rarr;
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
