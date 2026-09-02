import React from "react";
import { resume } from "../assets";

const Resume = () => {
  return (
    <a
      className="flex items-center gap-1.5 text-sm font-medium"
      href={resume}
      download="KritikaRajput.pdf"
    >
      <span aria-hidden="true" className="opacity-50">
        &#8627;
      </span>
      Resume
    </a>
  );
};

export default Resume;
