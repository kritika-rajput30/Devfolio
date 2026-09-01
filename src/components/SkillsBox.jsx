import React, { useMemo, useState } from "react";
import { styles } from "../styles";
import Reveal from "./Reveal";

// ordered disciplines
const GROUPS = [
  "Front-end",
  "Back-end",
  "Databases",
  "Cloud & DevOps",
  "Mobile",
  "Practices",
];

// every tool + the discipline it belongs to
const TOOLBOX = [
  { name: "React.js", group: "Front-end" },
  { name: "Angular", group: "Front-end" },
  { name: "Next.js", group: "Front-end" },
  { name: "JavaScript (ES6+)", group: "Front-end" },
  { name: "TypeScript", group: "Front-end" },
  { name: "HTML5", group: "Front-end" },
  { name: "CSS3", group: "Front-end" },
  { name: "Tailwind CSS", group: "Front-end" },
  { name: "SCSS", group: "Front-end" },

  { name: "Node.js", group: "Back-end" },
  { name: "Express.js", group: "Back-end" },
  { name: "RESTful APIs", group: "Back-end" },
  { name: "GraphQL", group: "Back-end" },
  { name: "Microservices", group: "Back-end" },
  { name: ".NET Core", group: "Back-end" },

  { name: "MySQL", group: "Databases" },
  { name: "PostgreSQL", group: "Databases" },
  { name: "MongoDB", group: "Databases" },
  { name: "Firebase", group: "Databases" },
  { name: "Redis", group: "Databases" },
  { name: "SQLite", group: "Databases" },

  { name: "AWS", group: "Cloud & DevOps" },
  { name: "Azure", group: "Cloud & DevOps" },
  { name: "Docker", group: "Cloud & DevOps" },
  { name: "Kubernetes (basics)", group: "Cloud & DevOps" },
  { name: "CI/CD", group: "Cloud & DevOps" },
  { name: "GitHub Actions", group: "Cloud & DevOps" },
  { name: "Git", group: "Cloud & DevOps" },
  { name: "GitHub", group: "Cloud & DevOps" },
  { name: "Jira", group: "Cloud & DevOps" },
  { name: "Postman", group: "Cloud & DevOps" },
  { name: "Maven", group: "Cloud & DevOps" },

  { name: "Android", group: "Mobile" },
  { name: "React Native", group: "Mobile" },

  { name: "Agile/Scrum", group: "Practices" },
  { name: "Sprint Planning", group: "Practices" },
  { name: "API Design", group: "Practices" },
  { name: "Unit Testing (Jest)", group: "Practices" },
  { name: "Authentication & Authorization", group: "Practices" },
  { name: "Code Review", group: "Practices" },
  { name: "Performance Optimization", group: "Practices" },
];

export const SkillsBox = () => {
  const [active, setActive] = useState(null); // null = show all

  const counts = useMemo(() => {
    const c = {};
    TOOLBOX.forEach((t) => (c[t.group] = (c[t.group] || 0) + 1));
    return c;
  }, []);

  return (
    <section id="featured" className="relative px-6 py-20 md:px-16 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className={styles.eyebrow}>The stack</p>
          <h2 className="mt-3 text-5xl font-bold md:text-7xl">The toolbox.</h2>
          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-night/45">
            Pick a discipline to filter the field
          </p>
        </Reveal>

        {/* discipline filters */}
        <div className="mt-10 flex flex-wrap gap-2.5">
          {GROUPS.map((g) => {
            const on = active === g;
            return (
              <button
                key={g}
                type="button"
                aria-pressed={on}
                onClick={() => setActive(on ? null : g)}
                className={`rounded-full border-2 px-4 py-2 text-sm font-semibold transition-colors ${
                  on
                    ? "border-night bg-night text-cream"
                    : "border-night/25 text-night hover:border-night"
                }`}
              >
                {g}
                <span className="ml-1.5 opacity-50">{counts[g]}</span>
              </button>
            );
          })}
          {active && (
            <button
              type="button"
              onClick={() => setActive(null)}
              className="rounded-full bg-night px-5 py-2 text-sm font-semibold text-cream"
            >
              Show all {TOOLBOX.length}
            </button>
          )}
        </div>

        {/* the field */}
        <ul className="mt-8 flex flex-wrap gap-x-2.5 gap-y-3">
          {TOOLBOX.map((t) => {
            const dim = active && t.group !== active;
            const hot = active && t.group === active;
            return (
              <li
                key={t.name}
                className={`rounded-full border-2 px-3.5 py-1.5 text-sm font-medium transition-all duration-300 ${
                  hot
                    ? "border-night bg-night text-cream"
                    : "border-night/25 text-night"
                } ${dim ? "opacity-25" : "opacity-100"}`}
              >
                {t.name}
              </li>
            );
          })}
        </ul>

        <p className="mt-12 text-xs font-semibold uppercase tracking-[0.18em] text-night/45">
          Plus the glue &mdash; clean commits &middot; documented APIs &middot;
          tests that mean something
        </p>
      </div>
    </section>
  );
};

export default SkillsBox;
