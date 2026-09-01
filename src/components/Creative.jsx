import React from "react";
import Reveal from "./Reveal";

const Creative = () => {
  return (
    <Reveal as="div" className="py-20 px-4 font-bold">
      <p className="text-[6rem] md:text-[15rem] leading-[0.9]">CREATIVE</p>
      <p className="text-center text-[4rem] md:text-[10rem] leading-[0.9] -mt-4 md:-mt-10">
        developer
      </p>
      <p className="text-[1.5rem] md:text-[5rem] md:-mt-6">inspired by the</p>
      <p className="-mb-4 text-center text-[4rem] md:text-[12rem] leading-[0.9] ms-8 md:ms-32 md:-mt-6">
        ABSTRACTION
      </p>
      <div className="my-6 flex flex-col items-end">
        <p className="text-[2rem] md:text-[4rem]">of</p>
        <p className="text-[7rem] md:text-[20rem] leading-[0.85]">NATURE</p>
      </div>
    </Reveal>
  );
};

export default Creative;
