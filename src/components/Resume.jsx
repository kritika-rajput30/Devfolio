import React from "react";
import { resume } from "../assets";

const Resume = () => {
  return (
    <div className="bg-night text-cream text-sm text-center rounded-full font-bold flex items-center">
      <a
        className="lg:tooltip tooltip-right font-bold px-4 py-2 text-xs uppercase tracking-wide"
        data-tip="resume"
        href={resume}
        download="KritikaRajput.pdf"
      >
        Download
      </a>
    </div>
  );
};

export default Resume;
