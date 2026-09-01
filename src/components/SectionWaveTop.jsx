import React from "react";

/**
 * Large wave that sits on the TOP edge of a section and pokes up above it.
 * Pair it with a negative margin-top + higher z-index on the section so the
 * section rises up and overlays whatever is pinned behind it as you scroll —
 * a "curtain" that gets pulled up over the hero.
 *
 * `fill` should be this section's own background colour.
 */
const SectionWaveTop = ({ fill = "var(--night)", height = "h-28 md:h-52" }) => {
  return (
    <div
      className="absolute left-0 top-0 w-full -translate-y-[98%] overflow-hidden leading-none pointer-events-none"
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 130"
        preserveAspectRatio="none"
        className={`block w-full ${height}`}
      >
        {/* one broad, gentle crest — the section rises behind this edge */}
        <path
          d="M0,130 L1440,130 L1440,72 C1120,118 980,26 560,40 C320,48 150,92 0,82 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};

export default SectionWaveTop;
