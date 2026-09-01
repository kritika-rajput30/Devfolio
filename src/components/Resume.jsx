import React from "react";
import { resume } from "../assets";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
const Resume = () => {
  return (
    <div className="text-white bg-gradient-to-br text-sm from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 text-center rounded-3xl happy-font font-bold flex items-center ">
      <a
        className="lg:tooltip tooltip-right happy-font font-bold p-2 text-xs"
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
