import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { PROJECTS, getProject } from "../data/freelance";

// mock browser window wrapping a screenshot
const BrowserFrame = ({ src, label, url, tall = false }) => (
  <figure className="relative">
    <div
      className="absolute inset-0 translate-x-2 translate-y-2 bg-night"
      aria-hidden="true"
    />
    <div className="relative border-2 border-night bg-white">
      <div className="flex items-center gap-2 border-b-2 border-night px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-night/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-night/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-night/25" />
        {url && (
          <span className="ml-3 flex-1 truncate rounded bg-night/5 px-3 py-1 text-center text-xs text-night/50">
            {url}
          </span>
        )}
      </div>
      <div className={tall ? "max-h-[75vh] overflow-y-auto" : "max-h-[520px] overflow-hidden"}>
        <img src={src} alt={label || ""} className="block w-full" />
      </div>
    </div>
    {label && (
      <figcaption className="mt-3 text-xs uppercase tracking-widest text-night/40">
        {label}
      </figcaption>
    )}
  </figure>
);

// phone bezel wrapping a portrait app screenshot
const PhoneFrame = ({ src, label }) => (
  <figure className="relative mx-auto w-full max-w-[300px]">
    <div
      className="absolute inset-0 translate-x-2 translate-y-2 rounded-[2.75rem] bg-night"
      aria-hidden="true"
    />
    <div className="relative rounded-[2.75rem] border-2 border-night bg-night p-2">
      <div className="overflow-hidden rounded-[2.25rem] bg-white">
        <img src={src} alt={label || ""} className="block w-full" />
      </div>
    </div>
    {label && (
      <figcaption className="mt-3 text-center text-xs uppercase tracking-widest text-night/40">
        {label}
      </figcaption>
    )}
  </figure>
);

const Arrow = ({ className = "" }) => (
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
    className={className}
    aria-hidden="true"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const WorkDetail = () => {
  const { slug } = useParams();
  const project = getProject(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <main className="min-h-screen bg-cream px-6 py-32 text-center text-night">
        <p className="text-2xl font-bold">Project not found.</p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 border-2 border-night px-5 py-2.5 text-sm font-medium"
        >
          Back to Portfolio
        </Link>
      </main>
    );
  }

  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  const prev = idx > 0 ? PROJECTS[idx - 1] : null;
  const next = idx < PROJECTS.length - 1 ? PROJECTS[idx + 1] : null;

  return (
    <main className="min-h-screen bg-cream text-night">
      <div className="mx-auto max-w-5xl px-4 py-16 md:px-8 md:py-24">
        <Link
          to="/#freelance"
          className="inline-flex items-center gap-2 text-sm font-medium text-night/60 transition-colors hover:text-night"
        >
          <span className="rotate-180">
            <Arrow />
          </span>
          Back to Portfolio
        </Link>

        {/* header */}
        <div className="mt-12 flex flex-wrap items-center gap-3">
          <span className="border border-night/25 px-3 py-1 text-xs font-medium uppercase tracking-widest text-night/60">
            {project.category}
          </span>
          <span className="text-xs font-medium uppercase tracking-widest text-night/40">
            {project.year}
          </span>
          {project.status && (
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-night/60">
              <span className="h-2 w-2 rounded-full bg-grass" />
              {project.status}
            </span>
          )}
        </div>

        <h1 className="mt-8 text-[3.25rem] font-bold leading-[0.95] md:text-[8rem]">
          {project.titleLines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-night/70 md:text-xl">
          {project.summary}
        </p>

        {project.liveUrl && (
          <div className="relative mt-10 inline-block">
            <div
              className="absolute inset-0 translate-x-2 translate-y-2 bg-night"
              aria-hidden="true"
            />
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="relative inline-flex items-center gap-2 border-2 border-night bg-white px-6 py-3 text-sm font-medium"
            >
              Visit Live Site
              <Arrow />
            </a>
          </div>
        )}

        {/* hero screenshot */}
        {project.screenshots?.length > 0 && (
          <div className="mt-14">
            {project.device === "mobile" ? (
              <PhoneFrame src={project.screenshots[0].src} />
            ) : (
              <BrowserFrame
                src={project.screenshots[0].src}
                url={project.liveLabel}
              />
            )}
          </div>
        )}

        {/* the idea */}
        <section className="mt-20 grid gap-8 md:grid-cols-[160px_1fr]">
          <p className="pt-1 text-xs uppercase tracking-widest text-night/40">
            The Idea
          </p>
          <div className="max-w-2xl space-y-5">
            <p className="text-xl font-semibold md:text-2xl">
              {project.ideaLead}
            </p>
            {project.ideaBody.map((para, i) => (
              <p key={i} className="text-night/70 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* project details */}
        <section className="mt-20">
          <p className="mb-6 text-xs uppercase tracking-widest text-night/40">
            Project Details
          </p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {project.details.map(([label, value]) => (
              <div key={label}>
                <p className="mb-2 text-xs uppercase tracking-widest text-night/40">
                  {label}
                </p>
                <p className="text-lg font-semibold">{value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* tech stack */}
        <section className="mt-16">
          <p className="mb-6 text-xs uppercase tracking-widest text-night/40">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="border border-night/25 px-3 py-1 text-xs font-medium text-night/70"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* screenshots */}
        <section className="mt-16">
          <p className="mb-8 text-xs uppercase tracking-widest text-night/40">
            Screenshots
          </p>
          {project.screenshots?.length > 0 ? (
            <div
              className={
                project.device === "mobile"
                  ? "flex flex-wrap gap-8"
                  : "space-y-10"
              }
            >
              {project.screenshots.map((s, i) => (
                <div key={i} className={project.device === "mobile" ? "w-[260px]" : ""}>
                  {project.device === "mobile" ? (
                    <PhoneFrame src={s.src} label={s.label} />
                  ) : (
                    <BrowserFrame
                      src={s.src}
                      label={s.label}
                      url={project.liveLabel}
                      tall
                    />
                  )}
                  <p className="mt-2 text-right text-xs uppercase tracking-widest text-night/40">
                    {String(i + 1).padStart(2, "0")} /{" "}
                    {String(project.screenshots.length).padStart(2, "0")}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {Array.from({ length: Math.min(project.shots, 4) }).map((_, i) => (
                <div
                  key={i}
                  className="flex aspect-[4/3] items-center justify-center border-2 border-night/15 bg-white text-xs uppercase tracking-widest text-night/30"
                >
                  {String(i + 1).padStart(2, "0")} /{" "}
                  {String(project.shots).padStart(2, "0")}
                </div>
              ))}
            </div>
          )}
        </section>

        {/* prev / next */}
        <section className="mt-24 flex items-center justify-between border-t-2 border-night/15 pt-8">
          {prev ? (
            <Link to={`/work/${prev.slug}`} className="group">
              <p className="text-xs uppercase tracking-widest text-night/40">
                Previous Project
              </p>
              <p className="mt-1 text-lg font-bold transition-colors group-hover:text-night/60">
                {prev.title}
              </p>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link to={`/work/${next.slug}`} className="group text-right">
              <p className="text-xs uppercase tracking-widest text-night/40">
                Next Project
              </p>
              <p className="mt-1 text-lg font-bold transition-colors group-hover:text-night/60">
                {next.title}
              </p>
            </Link>
          ) : (
            <span />
          )}
        </section>
      </div>
    </main>
  );
};

export default WorkDetail;
