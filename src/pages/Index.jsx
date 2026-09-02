import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Contact from "../components/Contact";
import ExpertisePath from "../components/ExpertisePath";
import FreelanceWork from "../components/FreelanceWork";
import WorkExperience from "../components/WorkExperience";
import SliderComponent from "../components/SliderComponent";
import Resume from "../components/Resume";
import { SkillsBox } from "../components/SkillsBox";
import LinesComponent from "../components/LinesComponent";

import { Close, DragHandleOutlined, Email, GitHub, LinkedIn } from "@mui/icons-material";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import { fadeIn } from "../utils/motion";
import { styles } from "../styles";

import thumbEdulearn from "../assets/hero/thumb-edulearn.png";
import thumbEllebeo from "../assets/hero/thumb-ellebeo.png";
import thumbTwogoodco from "../assets/hero/thumb-twogoodco.png";
import thumbSocial from "../assets/hero/thumb-social.png";

const heroThumbs = [
  { src: thumbEdulearn, alt: "EduLearn preview" },
  { src: thumbEllebeo, alt: "Elle.Be.O preview" },
  { src: thumbTwogoodco, alt: "Two Good Co preview" },
  { src: thumbSocial, alt: "Social preview" },
];


const navLinks = [
  { id: "work", title: "Work", icon: <WorkOutlineOutlinedIcon fontSize="small" /> },
  { id: "contact", title: "Contact", icon: <CallOutlinedIcon fontSize="small" /> },
  { id: "featured", title: "Featured", icon: <ViewInArOutlinedIcon fontSize="small" /> },
];

const contacts = [
  {
    id: "linkdin",
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/kritika-rajput/",
    icon: <LinkedIn />,
  },
  {
    id: "github",
    title: "GitHub",
    url: "https://github.com/kritikaVijaysinghRajput",
    icon: <GitHub />,
  },
  {
    id: "email",
    title: "Gmail",
    url: "kritikarajput203@gmailcom",
    icon: <Email />,
  },
];

// Dark mode swaps every "cream" band to "night" (grass and night bands never change).
const effectiveBand = (declared, theme) =>
  theme === "dark" && declared === "cream" ? "night" : declared;

// monochrome: every band is white with near-black ink; structure comes
// from the black wave/borders between sections, not colour.
const BAND_CLASSES = {
  night: "bg-cream text-night",
  cream: "bg-cream text-night",
  grass: "bg-cream text-night",
};

const BAND_FILL = {
  night: "var(--night)",
  cream: "var(--cream)",
  grass: "var(--grass)",
};

const Index = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(true);
  const [headerBand, setHeaderBand] = useState("grass");
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("devfolio-theme") === "dark" ? "dark" : "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("devfolio-theme", theme);
    } catch {
      // ignore storage failures (private browsing, etc.)
    }
  }, [theme]);

  useEffect(() => {
    const bands = document.querySelectorAll("[data-band]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeaderBand(entry.target.dataset.band);
          }
        });
      },
      { rootMargin: "-1px 0px -85% 0px", threshold: 0 }
    );
    bands.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [theme]);

  const band = (declared) => effectiveBand(declared, theme);
  const bandClass = (declared) => BAND_CLASSES[band(declared)];
  const bandFill = (declared) => BAND_FILL[band(declared)];

  // whole page is white now
  const headerTextClass = "text-night/80";

  return (
    <div>
      <div
        className={`navbar z-50 fixed top-0 w-full flex justify-center bg-transparent transition-colors duration-500 ${headerTextClass}`}
      >
        <div className="navbar flex justify-between items-center w-full px-5 md:px-10 py-4">
          <p className={`${headerTextClass} font-hand font-bold text-2xl md:text-3xl`}>
            Kritika Rajput
          </p>

          <div className="ml-auto flex items-center gap-8">
            <ul className="list-none hidden sm:flex flex-row items-center gap-7">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className="hover:opacity-60 transition-opacity cursor-pointer"
                  onClick={() => setActive(link.title)}
                >
                  <a
                    href={`#${link.id}`}
                    className="flex items-center gap-1.5 text-sm font-medium"
                  >
                    <span aria-hidden="true" className="opacity-50">
                      &#8627;
                    </span>
                    {link.title}
                  </a>
                </li>
              ))}
              <li className="hover:opacity-60 transition-opacity">
                <Resume />
              </li>
            </ul>

            <div
              className="sm:hidden cursor-pointer flex items-center"
              onClick={() => setToggle(!toggle)}
            >
              {toggle ? <DragHandleOutlined /> : <Close />}
            </div>
          </div>

          <motion.div
            variants={fadeIn("right", "spring", 0.5, 0.75)}
            initial="hidden"
            animate={!toggle ? "show" : "hidden"}
            className={`${
              toggle ? "hidden" : "flex"
            } fixed inset-0 z-40 flex-col bg-cream text-night`}
          >
            <ul className="list-none flex flex-col pt-28 px-8 gap-8">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(true);
                  }}
                >
                  <a href={`#${link.id}`} className="font-semibold text-4xl flex items-center gap-3">
                    {link.icon} {link.title}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="list-none flex px-8 mt-8 gap-4">
              {contacts.map((link) => (
                <a
                  href={link.url}
                  key={link.id}
                  target="_blank"
                  rel="noreferrer"
                  className="text-night"
                >
                  {link.icon}
                </a>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      <LinesComponent />

      {/* HERO — stays pinned for an extra ~30vh so the next section can slide
          up and overlay it (the wave "curtain" gets pulled up over the hero). */}
      <div
        data-band={band("grass")}
        className={`relative h-[150vh] ${bandClass("grass")}`}
      >
        <div
          id="home"
          className="sticky top-0 h-screen z-0 flex flex-col justify-center overflow-hidden bg-cream text-night px-6 pt-24 md:px-14"
        >
          {/* dotted texture */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                "radial-gradient(rgba(24,24,24,0.10) 1px, transparent 1px)",
              backgroundSize: "34px 34px",
            }}
          />

          {/* vertical email flush against the left edge */}
          <a
            href="mailto:kritikarajput203@gmail.com"
            className="absolute left-0 top-1/2 hidden -translate-y-1/2 [writing-mode:vertical-rl] rotate-180 py-6 text-xs tracking-[0.25em] text-night/40 transition-colors hover:text-night lg:block"
          >
            kritikarajput203@gmail.com
          </a>

          {/* stats — stacked in the bottom-right corner */}
          <div className="absolute bottom-10 right-6 hidden flex-col gap-5 text-right md:right-10 lg:flex">
            {[
              ["1.5+", "Years of Experience"],
              ["6+", "Projects Shipped"],
              ["8", "Live Sites"],
            ].map(([n, label]) => (
              <div key={label}>
                <p className="text-3xl font-extrabold text-[#181818]">{n}</p>
                <p className="mt-0.5 text-xs uppercase tracking-wide text-night/50">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="relative mx-auto w-full max-w-6xl xl:pl-10">
            <h1 className="font-extrabold uppercase leading-[0.82] tracking-[-0.03em] text-[17vw] md:text-[9vw]">
              <span className="block text-[#181818]">Full-Stack</span>
              <span className="block text-night/85">Developer</span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-relaxed text-night/60 md:text-lg">
              Hi! I&rsquo;m{" "}
              <span className="font-semibold text-night">Kritika</span>. A
              full-stack developer with 1.5+ years building web &amp; mobile
              products end to end — from clean interfaces to the APIs and
              infrastructure behind them.
            </p>

            <a
              href="#contact"
              className="mt-10 inline-block border-2 border-[#181818] bg-[#181818] px-8 py-4 text-sm font-bold uppercase tracking-[0.15em] text-white transition-colors hover:bg-transparent hover:text-[#181818]"
            >
              Let&rsquo;s Talk
            </a>

            <p className="mt-6 flex items-center gap-2 text-sm text-night/55">
              <span className="h-2.5 w-2.5 rounded-full bg-[#181818]" />
              Available for work
            </p>
          </div>
        </div>
      </div>

      {/* WHAT I DO — the section rides up over the pinned hero on scroll, then
          a scroll-scrubbed "snake" timeline draws the disciplines in. */}
      <div
        data-band={band("cream")}
        className={`relative z-10 -mt-[7vh] h-[280vh] border-t-2 border-night md:-mt-[10vh] motion-reduce:h-auto ${bandClass(
          "cream"
        )}`}
      >
        <ExpertisePath />
      </div>

      {/* SKILLBOX */}
      <div
        data-band={band("cream")}
        className={`relative border-t-2 border-night ${bandClass("cream")}`}
      >
        <SkillsBox />
      </div>

      {/* WORK EXPERIENCE */}
      <div
        data-band={band("cream")}
        className={`relative border-t-2 border-night ${bandClass("cream")}`}
      >
        <WorkExperience />
      </div>

      {/* FREELANCE WORK */}
      <div
        data-band={band("grass")}
        className={`relative border-t-2 border-night ${bandClass("grass")}`}
      >
        <FreelanceWork />
      </div>

      {/* FEATURED PROJECTS — the one pinned horizontal scene */}
      <div
        data-band={band("night")}
        className={`relative border-t-2 border-night ${bandClass("night")}`}
      >
        <SliderComponent />
      </div>

      {/* CONTACT */}
      <div
        data-band={band("night")}
        className={`relative border-t-2 border-night ${bandClass("night")}`}
      >
        <Contact />
      </div>
    </div>
  );
};

export default Index;
