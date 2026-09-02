import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
import mathionixLogo from "../assets/experience/mathionix.png";
import salarImg from "../assets/experience/salar.png";
import ellebeoImg from "../assets/experience/ellebeo.png";
import mplussoftLogo from "../assets/experience/mplussoft.png";
import eagleFitnessImg from "../assets/experience/eaglefitness.png";
import myChoiceImg from "../assets/experience/mychoice.png";
import softwinLogo from "../assets/experience/softwin.png";

// Edit these to your real experience.
const EXPERIENCE = [
  {
    company: "Mathionix Technologies",
    logo: mathionixLogo,
    type: "Full-time · 9 mos",
    roles: [
      {
        title: "Full Stack Developer",
        dates: "Dec 2025 – Present · 9 mos",
        location: "Pune District, Maharashtra, India",
      },
    ],
    products: [
      { name: "SALAR", image: salarImg },
      { name: "Elle.Be.O", image: ellebeoImg },
    ],
  },
  {
    company: "Mplussoft Technologies",
    logo: mplussoftLogo,
    type: "Full-time · 15 mos",
    roles: [
      {
        title: "Jr. Frontend Developer",
        dates: "Sep 2024 – Dec 2025 · 15 mos",
        location: "Pune District, Maharashtra, India",
      },
    ],
    products: [
      { name: "Eagle Fitness", image: eagleFitnessImg },
      { name: "My Choice", image: myChoiceImg },
    ],
  },
  {
    company: "Softwin Infotech",
    logo: softwinLogo,
    type: "Internship · 2 mos",
    roles: [
      {
        title: "Software Developer Trainee",
        dates: "May 2024 – Jul 2024 · 2 mos",
        location: "Sangli, Maharashtra, India",
      },
    ],
  },
];

const CalendarIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-3.5 w-3.5 shrink-0"
    aria-hidden="true"
    {...props}
  >
    <rect width="18" height="18" x="3" y="4" rx="2" />
    <path d="M8 2v4M16 2v4M3 10h18" />
  </svg>
);

const PinIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-3.5 w-3.5 shrink-0"
    aria-hidden="true"
    {...props}
  >
    <path d="M20 10c0 4.4-8 12-8 12s-8-7.6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const Card = ({ company, logo, type, roles, note, products }) => (
  <div className="relative">
    <div
      className="absolute inset-0 translate-x-2 translate-y-2 bg-night"
      aria-hidden="true"
    />
    <div className="relative border-2 border-night bg-white">
      <div className="flex items-center gap-4 border-b-2 border-night px-6 py-5">
        <div className="grid h-12 w-12 shrink-0 place-items-center overflow-hidden border border-night/25 text-lg font-bold">
          {logo ? (
            <img
              src={logo}
              alt={`${company} logo`}
              className="h-full w-full object-contain p-1.5"
            />
          ) : (
            company[0]
          )}
        </div>
        <div>
          <h3 className="text-lg font-bold text-night">{company}</h3>
          <p className="mt-0.5 text-sm text-night/55">{type}</p>
        </div>
      </div>
      <div className="space-y-4 px-6 py-5">
        {roles.map((r) => (
          <div key={r.title} className="relative pl-4">
            <span
              className="absolute left-0 top-1 h-[calc(100%-0.5rem)] w-1 rounded-full bg-night/15"
              aria-hidden="true"
            />
            <p className="font-semibold text-night">{r.title}</p>
            <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-night/55">
              <span className="flex items-center gap-1.5">
                <CalendarIcon />
                {r.dates}
              </span>
              <span className="flex items-center gap-1.5">
                <PinIcon />
                {r.location}
              </span>
            </div>
          </div>
        ))}
        {note && <p className="pt-1 text-sm text-night/55">{note}</p>}

        {products?.length > 0 && (
          <div className="border-t border-night/10 pt-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-night/40">
              Projects I worked on
            </p>
            <div className="mt-3 flex flex-wrap gap-3">
              {products.map((p) => (
                <div
                  key={p.name}
                  className="w-32 overflow-hidden border border-night/20 bg-white"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-20 w-full object-contain p-2"
                  />
                  {p.desc && (
                    <p className="border-t border-night/10 px-2 py-2 text-center text-[11px] leading-snug text-night/55">
                      {p.desc}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

const WorkExperience = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const trackRef = useRef(null);
  const dotRefs = useRef([]);
  const [fill, setFill] = useState(0); // 0..1 of the track height
  const [dotYs, setDotYs] = useState([]); // each dot's centre as fraction of track

  useLayoutEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      const h = track.offsetHeight || 1;
      setDotYs(
        dotRefs.current.map((d) =>
          d ? (d.offsetTop + d.offsetHeight / 2) / h : 0
        )
      );
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setFill(1);
      return;
    }
    const onScroll = () => {
      const track = trackRef.current;
      if (!track) return;
      const rect = track.getBoundingClientRect();
      const anchor = window.innerHeight * 0.55; // fill "head" sits here on screen
      const p = clamp((anchor - rect.top) / rect.height, 0, 1);
      setFill(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [prefersReducedMotion]);

  return (
    <section className="relative px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        {/* header */}
        <div className="mb-16 text-center md:mb-24">
          <span className="inline-flex items-center border border-night/25 px-3 py-1 text-xs font-medium uppercase tracking-widest text-night/60">
            Work Experience
          </span>
          <h2 className="mt-6 text-5xl font-bold leading-[1] text-night md:text-7xl">
            Where I&rsquo;ve
            <span className="block text-night/35">been building</span>
          </h2>
        </div>

        {/* timeline */}
        <div ref={trackRef} className="relative">
          {/* faint full-height rail */}
          <div
            className="absolute left-6 top-0 bottom-0 w-0.5 -translate-x-1/2 bg-night/15 md:left-1/2"
            aria-hidden="true"
          />
          {/* solid progress fill that grows on scroll */}
          <div
            className="absolute left-6 top-0 w-0.5 -translate-x-1/2 bg-night md:left-1/2"
            style={{ height: `${fill * 100}%` }}
            aria-hidden="true"
          />

          <div className="space-y-14 md:space-y-24">
            {EXPERIENCE.map((exp, i) => {
              const active = fill >= (dotYs[i] ?? 1);
              return (
                <div
                  key={exp.company}
                  className={`relative flex flex-col pl-14 md:flex-row md:pl-0 ${
                    i % 2 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div
                    ref={(el) => (dotRefs.current[i] = el)}
                    className="absolute left-6 top-6 z-10 -translate-x-1/2 md:left-1/2"
                  >
                    <div
                      className={`h-5 w-5 rounded-full ring-4 ring-white transition-all duration-300 ${
                        active
                          ? "scale-100 bg-night"
                          : "scale-90 border-2 border-night/30 bg-white"
                      }`}
                    />
                  </div>

                  <div
                    className={`w-full md:w-[45%] transition-opacity duration-500 ${
                      i % 2 ? "md:pl-16" : "md:pr-16"
                    } ${active ? "opacity-100" : "opacity-50"}`}
                  >
                    <Card {...exp} />
                  </div>
                  <div className="hidden md:block md:w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
