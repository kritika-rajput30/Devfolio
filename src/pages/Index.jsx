import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";

import Certification from "../components/Certification";
import Creative from "../components/Creative";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Services from "../components/Services";
import SliderComponent from "../components/SliderComponent";
import Resume from "../components/Resume";
import { SkillsBox } from "../components/SkillsBox";
import LinesComponent from "../components/LinesComponent";
import SectionDivider from "../components/SectionDivider";
import Reveal from "../components/Reveal";

import { rocket } from "../assets";
import { Close, DragHandleOutlined, Email, GitHub, LinkedIn } from "@mui/icons-material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
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

// Fan the thumbnails into a shallow semi-circle: outer cards tilt out and
// drop slightly, inner cards stay near-upright — like a hand of cards.
const HERO_ARC = [
  { rotate: -10, y: 18 },
  { rotate: -4, y: 4 },
  { rotate: 4, y: 4 },
  { rotate: 10, y: 18 },
];

const navLinks = [
  { id: "about", title: "About", icon: <HomeOutlinedIcon fontSize="small" /> },
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
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
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

  const headerTextClass = headerBand === "cream" ? "text-night" : "text-white";

  return (
    <div>
      <div
        className={`navbar z-50 fixed top-0 w-full flex justify-center bg-transparent transition-colors duration-500 ${headerTextClass}`}
      >
        <div className="navbar flex justify-between items-center w-full max-w-6xl px-4 md:px-8 py-4">
          <p className={`${headerTextClass} opacity-80 font-bold uppercase tracking-wide text-lg md:text-xl`}>
            Kritika
          </p>

          <div className="links">
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
          </div>

          <div className="flex items-center gap-3">
            <label
              className="inline-flex items-center cursor-pointer"
              data-tip={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
                className="sr-only peer"
                aria-label="Toggle dark mode"
              />
              <div className="relative w-10 h-5 bg-current/20 peer-checked:bg-grass rounded-full transition-colors">
                <div className="absolute top-[2px] start-[2px] bg-current h-4 w-4 rounded-full transition-transform peer-checked:translate-x-full" />
              </div>
            </label>

            <Resume />
          </div>

          <div
            className="sm:hidden cursor-pointer flex items-center"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <DragHandleOutlined /> : <Close />}
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

      {/* HERO */}
      <div data-band={band("grass")} className="relative">
        <div
          id="home"
          className={`sticky top-0 h-screen z-0 flex flex-col items-center justify-center text-center px-6 md:px-16 overflow-hidden ${bandClass(
            "grass"
          )}`}
        >
          <p className="font-bold tracking-tight leading-[0.9] uppercase text-[13vw] sm:text-[9vw] md:text-[7vw]">
            Kritika
          </p>
          <p className="mt-6 text-2xl md:text-4xl font-medium">
            Full Stack Developer & Freelancer
          </p>
          <p className="mt-4 text-xs md:text-sm font-semibold uppercase tracking-[0.2em] opacity-80">
            1.5+ years of experience · Available for full-time & freelance
            work
          </p>

          <div className="thumb-marquee mt-14 w-full max-w-4xl">
            <div className="thumb-marquee-track items-center gap-4">
              {[...heroThumbs, ...heroThumbs].map((thumb, i) => {
                const arc = HERO_ARC[i % HERO_ARC.length];
                return (
                  <img
                    key={`${thumb.alt}-${i}`}
                    src={thumb.src}
                    alt={thumb.alt}
                    style={{ transform: `rotate(${arc.rotate}deg) translateY(${arc.y}px)` }}
                    className="h-24 md:h-32 w-auto rounded-2xl shadow-lg border-4 border-cream object-cover"
                  />
                );
              })}
            </div>
          </div>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] opacity-70">
            4 recent builds
          </p>
        </div>
        <SectionDivider fill={bandFill("night")} />
      </div>

      {/* FEATURED PROJECTS — the one pinned horizontal scene */}
      <div data-band={band("night")} className="relative">
        <SliderComponent />
        <SectionDivider fill={bandFill("cream")} />
      </div>

      {/* EXPERTISE */}
      <div
        data-band={band("cream")}
        className={`relative py-20 px-4 md:px-16 ${bandClass("cream")}`}
      >
        <Reveal className="mb-8">
          <p className={styles.eyebrow}>What I do</p>
          <p className="font-bold text-5xl md:text-7xl flex items-center gap-3">
            EXPERTISE
            <img src={rocket} className="h-16 md:h-20" alt="" />
          </p>
        </Reveal>
        <Services />
        <SectionDivider fill={bandFill("grass")} />
      </div>

      {/* PORTFOLIO editorial heading */}
      <div
        data-band={band("grass")}
        className={`relative py-16 px-4 overflow-hidden ${bandClass("grass")}`}
      >
        <Reveal>
          <p className="text-center text-[16vw] md:text-[9vw] font-black leading-none uppercase">
            portfolio.
          </p>
        </Reveal>
        <SectionDivider fill={bandFill("night")} />
      </div>

      {/* ABOUT */}
      <section
        id="about"
        data-band={band("night")}
        className={`relative py-20 px-4 md:px-16 overflow-hidden ${bandClass("night")}`}
      >
        <Hero />
        <Reveal className="difference flex flex-col p-2 mt-16" delay={0.1}>
          <div className="flex items-center gap-8 md:gap-36">
            <div className="flex">
              <p className="md:text-[18rem] font-black text-[7rem] leading-none">Self</p>
              <p className="font-bold md:text-[7rem] mb-6 text-[2.5rem] flex items-end">&</p>
            </div>
            {isNonMobileScreens && (
              <p className="mt-20 text-xl text-fog">
                My standout quality lies in my versatility across diverse
                fields within technology. While others may specialize in one
                area, I excel in web development, mobile app development,
                backend solutions, and UI/UX design. This versatility allows
                me to offer unique insights, solve complex problems
                creatively, and deliver innovative solutions that stand out
                in the competitive landscape.
              </p>
            )}
          </div>
          <div className="flex justify-between md:-mt-32 -mt-16">
            <p className="md:text-[18rem] font-black text-[6rem] leading-none">Others</p>
          </div>
          {!isNonMobileScreens && (
            <p className="font-medium p-2 text-fog">
              My standout quality lies in my versatility across diverse
              fields within technology. While others may specialize in one
              area, I excel in web development, mobile app development,
              backend solutions, and UI/UX design. This versatility allows
              me to offer unique insights, solve complex problems
              creatively, and deliver innovative solutions that stand out in
              the competitive landscape.
            </p>
          )}
        </Reveal>
        <SectionDivider fill={bandFill("cream")} />
      </section>

      {/* SKILLBOX */}
      <div data-band={band("cream")} className={`relative ${bandClass("cream")}`}>
        <SkillsBox />
        <SectionDivider fill={bandFill("grass")} />
      </div>

      {/* CREATIVE */}
      <div
        data-band={band("grass")}
        className={`relative overflow-hidden ${bandClass("grass")}`}
      >
        <Creative />
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
