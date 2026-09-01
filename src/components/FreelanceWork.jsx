import React from "react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import { PROJECTS } from "../data/freelance";

const Card = ({ n, cardMeta, title, cardDesc, cardTags, slug }) => (
  <article className="group relative">
    {/* hard offset shadow */}
    <div
      className="absolute inset-0 translate-x-2 translate-y-2 bg-night"
      aria-hidden="true"
    />
    <Link
      to={`/work/${slug}`}
      className="relative flex h-full flex-col justify-between border-2 border-night bg-white p-6 transition-transform duration-200 group-hover:translate-x-1 group-hover:translate-y-1 md:p-8"
    >
      <div className="mb-8 flex items-start justify-between">
        <span className="font-mono text-xs text-night/40">{n}</span>
        <span className="text-xs uppercase tracking-widest text-night/40">
          {cardMeta}
        </span>
      </div>
      <div className="flex-1">
        <h3 className="mb-3 text-3xl font-bold leading-tight text-night md:text-4xl">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-night/55">{cardDesc}</p>
      </div>
      <div className="mt-8 flex items-end justify-between gap-4">
        <div className="flex flex-wrap gap-1.5">
          {cardTags.map((t) => (
            <span
              key={t}
              className="border border-night/20 px-2 py-0.5 text-xs text-night/55"
            >
              {t}
            </span>
          ))}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="shrink-0 text-night transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        >
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      </div>
    </Link>
  </article>
);

const FreelanceWork = () => (
  <section id="freelance" className="relative px-4 py-20 md:px-8 md:py-28">
    <div className="mx-auto max-w-7xl">
      <Reveal className="mb-12 md:mb-16">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-night">
          Freelance work
        </p>
        <h2 className="text-5xl font-bold text-night md:text-7xl">
          Clients I&rsquo;ve
          <span className="block text-night">Shipped For</span>
        </h2>
      </Reveal>

      <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {PROJECTS.map((p) => (
          <Card key={p.slug} {...p} />
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-night/55">Interested in working together?</p>
        <div className="relative inline-block">
          <div
            className="absolute inset-0 translate-x-2 translate-y-2 bg-night"
            aria-hidden="true"
          />
          <a
            href="#contact"
            className="relative inline-flex items-center gap-2 border-2 border-night bg-white px-6 py-3 text-sm font-medium text-night"
          >
            Let&rsquo;s Talk
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default FreelanceWork;
