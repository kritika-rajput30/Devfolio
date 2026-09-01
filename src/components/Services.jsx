import React from "react";
import { fadeIn } from "../utils/motion";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import Reveal from "./Reveal";

const ServiceCard = ({ title, index, desc, image }) => {
  return (
    <Reveal
      delay={0.15 * index}
      className="md:w-[22%] rounded-2xl border-2 border-night overflow-hidden"
    >
      <div className="h-32 relative w-full border-b-2 border-night flex items-center gap-2 overflow-hidden">
        <img
          src={image}
          alt=""
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <p className="absolute inset-0 flex bg-night/40 text-white justify-center items-center font-bold text-[5rem]">
          {title}
        </p>
      </div>

      <div className="w-full">
        <div className="min-h-[250px] h-full font-bold p-1 ps-4 flex justify-evenly items-center flex-col bg-cream text-night">
          {desc}
        </div>
      </div>
    </Reveal>
  );
};

const Services = () => {
  return (
    <div className="relative">
      <div className="w-full flex flex-wrap gap-2 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Services, "Services");
