import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GitHub, Launch } from "@mui/icons-material";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { projects } from "../constants";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

const ProjectCard = ({ project }) => (
  <div className="relative rounded-lg shadow-md h-72 w-[85vw] sm:w-[380px] shrink-0 overflow-hidden">
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
  const [distance, setDistance] = useState(0);

  const { scrollYProgress } = useScroll({ target: sectionRef });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        setDistance(
          Math.max(trackRef.current.scrollWidth - window.innerWidth, 0)
        );
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const scrollByCards = (dir) => {
    window.scrollBy({ top: dir * window.innerHeight * 0.4, behavior: "smooth" });
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
    <section id="work" ref={sectionRef} className="relative bg-night text-white h-[250vh]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        {header}
        <motion.div ref={trackRef} style={{ x }} className="flex gap-6 px-4 md:px-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SliderComponent;
