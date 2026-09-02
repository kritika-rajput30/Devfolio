import React from "react";

/**
 * Wavy seam at the bottom edge of a section. `fill` is the white body below;
 * a black stroke on the top curve is what actually separates the sections in
 * the monochrome layout.
 */
const CURVE = "M0,40 C240,85 480,5 720,32 C960,59 1200,12 1440,45";

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
        <path d={`${CURVE} L1440,100 L0,100 Z`} fill={fill} />
        <path
          d={CURVE}
          fill="none"
          stroke="var(--night)"
          strokeWidth="2.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
};

export default SectionDivider;
