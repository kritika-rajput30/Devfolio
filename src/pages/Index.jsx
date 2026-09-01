import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import Certification from "../components/Certification";
import Contact from "../components/Contact";
import ExpertisePath from "../components/ExpertisePath";
import SliderComponent from "../components/SliderComponent";
import Resume from "../components/Resume";
import { SkillsBox } from "../components/SkillsBox";
import LinesComponent from "../components/LinesComponent";
import SectionDivider from "../components/SectionDivider";
import SectionWaveTop from "../components/SectionWaveTop";

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

const BAND_CLASSES = {
  night: "bg-night text-white",
  cream: "bg-cream text-night",
  grass: "bg-grass text-night",
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

  // Soft ("light shade") black on light bands, white only over the night band.
  const headerTextClass = headerBand === "night" ? "text-white" : "text-night/80";

  return (
    <div>
      <div
        className={`navbar z-50 fixed top-0 w-full flex justify-center bg-transparent transition-colors duration-500 ${headerTextClass}`}
      >
        <div className="navbar flex justify-between items-center w-full max-w-6xl px-4 md:px-8 py-4">
          <p className={`${headerTextClass} opacity-80 font-bold uppercase tracking-wide text-lg md:text-xl`}>
            Kritika
          </p>

          <div className="ml-auto flex items-center gap-8">
            <ul className="list-none hidden sm:flex flex-row items-center gap-8">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className="hover:opacity-70 transition-opacity cursor-pointer"
                  onClick={() => setActive(link.title)}
                  onMouseEnter={() => setHoveredLink(link.id)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <a
                    href={`#${link.id}`}
                    className="font-semibold text-sm uppercase tracking-wide flex items-center gap-1"
                  >
                    {hoveredLink === link.id && link.icon} {link.title}
                  </a>
                </li>
              ))}
            </ul>

            <Resume />

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
            } fixed inset-0 z-40 flex-col bg-night text-white`}
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
                  className="text-white"
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
          className={`sticky top-0 h-screen z-0 flex flex-col items-center justify-center text-center px-6 md:px-16 overflow-hidden ${bandClass(
            "grass"
          )}`}
        >
          <h1 className="font-extrabold tracking-[-0.02em] leading-[0.9] uppercase text-[13vw] sm:text-[10vw] md:text-[7.5vw]">
            Kritika
          </h1>
          <p className="mt-5 text-base md:text-xl font-medium opacity-70">
            Full Stack Developer &amp; Freelancer
          </p>
          <p className="mt-3 text-[10px] md:text-xs font-semibold uppercase tracking-[0.22em] opacity-55">
            1.5+ years of experience · Available for full-time &amp; freelance
            work
          </p>

          <div className="thumb-marquee mt-12 md:mt-16 w-full max-w-3xl mx-auto">
            <div className="thumb-marquee-track items-center gap-4 md:gap-5 px-3">
              {[...heroThumbs, ...heroThumbs].map((thumb, i) => (
                <img
                  key={`${thumb.alt}-${i}`}
                  src={thumb.src}
                  alt={thumb.alt}
                  className="h-24 w-24 md:h-32 md:w-32 shrink-0 rounded-lg border-4 border-white object-cover shadow-lg shadow-night/20"
                />
              ))}
            </div>
          </div>
          <p className="mt-8 text-[10px] md:text-xs font-semibold uppercase tracking-[0.22em] opacity-50">
            4 recent builds
          </p>

          {/* a peek of the cream wave sits at the hero's bottom edge at rest;
              the real cream curtain rises up and merges with it on scroll */}
          <SectionDivider fill={bandFill("cream")} height="h-28 md:h-40" />
        </div>
      </div>

      {/* WHAT I DO — the cream curtain rides up over the pinned hero, then a
          scroll-scrubbed "snake" timeline draws the disciplines in. */}
      <div
        data-band={band("cream")}
        className={`relative z-10 -mt-[7vh] h-[280vh] md:-mt-[10vh] motion-reduce:h-auto ${bandClass(
          "cream"
        )}`}
      >
        <SectionWaveTop fill={bandFill("cream")} height="h-28 md:h-52" />
        <ExpertisePath />
        <SectionDivider fill={bandFill("night")} />
      </div>

      {/* FEATURED PROJECTS — the one pinned horizontal scene */}
      <div data-band={band("night")} className={`relative ${bandClass("night")}`}>
        <SliderComponent />
        <SectionDivider fill={bandFill("cream")} height="h-28 md:h-48" />
      </div>

      {/* SKILLBOX */}
      <div data-band={band("cream")} className={`relative ${bandClass("cream")}`}>
        <SkillsBox />
        <SectionDivider fill={bandFill("night")} />
      </div>

      {/* CERTIFICATION */}
      <div data-band={band("night")} className={`relative ${bandClass("night")}`}>
        <Certification />
        <SectionDivider fill={bandFill("cream")} />
      </div>

      {/* CONTACT */}
      <div data-band={band("cream")} className={`relative ${bandClass("cream")}`}>
        <Contact />
        <SectionDivider fill={bandFill("night")} />
      </div>
    </div>
  );
};

export default Index;
