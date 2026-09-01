import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { GitHub, Launch } from "@mui/icons-material";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { projects } from "../constants";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

const ProjectCard = ({ project }) => (
  <div className="relative rounded-3xl border-[10px] border-cream shadow-md h-72 w-[85vw] sm:w-[380px] shrink-0 overflow-hidden">
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-cover"
    />
    <div className="links flex items-center bg-cream p-2 text-night rounded-3xl m-2 gap-3 absolute top-0 right-0">
      {project.gitlink && (
        <a href={project.gitlink} target="_blank" rel="noreferrer">
          <GitHub fontSize="small" />
        </a>
      )}
      {project.deploylink && (
        <a href={project.deploylink} target="_blank" rel="noreferrer">
          <Launch fontSize="small" />
        </a>
      )}
    </div>
    <div className="absolute bottom-0 w-full px-4 py-3 bg-night/70 backdrop-blur-sm">
      <h3 className="text-lg font-semibold text-white">{project.title}</h3>
    </div>
  </div>
);

const SliderComponent = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  // horizontal offset of the card row; a faint word behind drifts slower
  const x = useMotionValue(0);
  const bgX = useMotionValue(0);
  const [index, setIndex] = useState(1);

  useEffect(() => {
    if (prefersReducedMotion) return;

    let start = 0;
    let end = 0;

    const measure = () => {
      const vw = window.innerWidth;
      const trackW = trackRef.current ? trackRef.current.scrollWidth : 0;
      start = vw * 0.5; // cards enter from the right edge
      end = -(trackW - vw * 0.5); // ...and exit past the left edge
    };

    // vertical progress through the tall section -> horizontal sweep
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const total = el.offsetHeight - window.innerHeight;
      const progress = total > 0 ? clamp(-el.getBoundingClientRect().top / total, 0, 1) : 0;
      x.set(start + (end - start) * progress);
      bgX.set(240 + (-680 - 240) * progress);
      setIndex(
        clamp(Math.ceil(progress * projects.length), 1, projects.length)
      );
    };

    measure();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", () => {
      measure();
      onScroll();
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [prefersReducedMotion, x, bgX]);

  const scrollByCards = (dir) => {
    window.scrollBy({ top: dir * window.innerHeight * 0.5, behavior: "smooth" });
  };

  const header = (
    <div className="flex justify-between items-center px-4 md:px-8 pt-8 pb-4 relative z-10">
      <div className="bg-grass text-night text-sm px-5 py-2.5 text-center rounded-3xl font-bold flex items-center">
        Featured Projects
      </div>
      <div className="bg-cream text-night w-min flex gap-4 border-2 border-current rounded-3xl p-2">
        <button
          onClick={() => scrollByCards(-1)}
          className="focus:outline-none"
          aria-label="Previous project"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={() => scrollByCards(1)}
          className="focus:outline-none"
          aria-label="Next project"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );

  // Reduced motion: plain swipeable row, no pinning / no scroll-jack.
  if (prefersReducedMotion) {
    return (
      <section id="work" className="relative bg-night text-white py-4">
        {header}
        <div className="flex gap-6 overflow-x-auto px-4 md:px-8 pb-8 snap-x snap-mandatory">
          {projects.map((project) => (
            <div key={project.title} className="snap-start">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    // Tall section -> the sticky panel stays pinned while you scroll its
    // height; the cards sweep right -> left. When the section runs out the
    // pin releases and the page "moves up" to the next section.
    <section
      id="work"
      ref={sectionRef}
      className="relative bg-night text-white h-[320vh]"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {/* parallax word behind the cards */}
        <motion.p
          style={{ x: bgX }}
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 whitespace-nowrap text-[24vh] font-black leading-none uppercase text-white/5 select-none"
        >
          Projects&nbsp;·&nbsp;Projects&nbsp;·&nbsp;Projects&nbsp;·
        </motion.p>

        {header}

        {/* the horizontally-swept card row */}
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex gap-6 px-4 md:px-8 will-change-transform"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>

        {/* progress counter */}
        <div className="absolute bottom-6 right-4 md:right-8 z-10 font-semibold text-sm tracking-[0.2em] text-white/70">
          {String(index).padStart(2, "0")} /{" "}
          {String(projects.length).padStart(2, "0")}
        </div>
      </div>
    </section>
  );
};

export default SliderComponent;
