import React from "react";

/**
 * Subtle wavy seam placed at the bottom edge of a section. `fill` should be
 * the background color of the section that comes NEXT, so the wave reads as
 * that band rising up into the one above it.
 */
const SectionDivider = ({ fill = "var(--cream)", height = "h-12 md:h-20" }) => {
  return (
    <div
      className="absolute bottom-0 left-0 w-full overflow-hidden leading-none pointer-events-none"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className={`block w-full ${height}`}
      >
        <path
          d="M0,40 C240,85 480,5 720,32 C960,59 1200,12 1440,45 L1440,100 L0,100 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};

export default SectionDivider;
