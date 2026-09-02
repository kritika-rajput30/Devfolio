import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";
import { styles } from "../styles";

// One "snake" node per discipline. `side` = which way the pill floats off
// the wave. Order + copy come from the old services list.
const STEPS = [
  { n: "1", title: "Web", sub: "React · Next.js · responsive UI in Tailwind", side: "up" },
  { n: "2", title: "Backend", sub: "Node · Express · REST APIs · Mongo / SQL", side: "down" },
  { n: "3", title: "UI / UX", sub: "Figma · interfaces & design systems", side: "up" },
  { n: "4", title: "Mobile", sub: "React Native · Flutter · Android", side: "down" },
];

const VB_W = 1000;
const VB_H = 320;
// a calm 2.5-hump wave across the whole width (amplitude ~55)
const WAVE_D =
  "M0,160 C75,105 225,105 300,160 C375,215 525,215 600,160 C675,105 825,105 900,160 C950,160 975,160 1000,160";
// progress fraction (0-1) at which each node sits along the wave
const STEP_AT = [0.13, 0.38, 0.63, 0.88];
const PILL_Y = { up: 40, down: 280 }; // fixed rows so pills never clip

const ExpertisePath = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const stickyRef = useRef(null); // pinned panel; its parent is the tall track
  const pathRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [nodes, setNodes] = useState([]);
  const [len, setLen] = useState(0);

  // sample the wave once it's laid out so dots sit exactly on it
  useLayoutEffect(() => {
    const p = pathRef.current;
    if (!p) return;
    const total = p.getTotalLength();
    setLen(total);
    setNodes(
      STEP_AT.map((f) => {
        const pt = p.getPointAtLength(f * total);
        return { x: pt.x, y: pt.y };
      })
    );
  }, []);

  // vertical scroll through the tall track -> 0..1 progress
  useEffect(() => {
    if (prefersReducedMotion) {
      setProgress(1);
      return;
    }
    const onScroll = () => {
      const track = stickyRef.current?.parentElement;
      if (!track) return;
      const span = track.offsetHeight - window.innerHeight;
      const p =
        span > 0
          ? Math.min(1, Math.max(0, -track.getBoundingClientRect().top / span))
          : 0;
      setProgress(p);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [prefersReducedMotion]);

  const tip =
    len && pathRef.current
      ? pathRef.current.getPointAtLength(progress * len)
      : null;

  return (
    <div
      ref={stickyRef}
      className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden px-4 pt-24 md:px-16 md:pt-28 motion-reduce:static motion-reduce:h-auto motion-reduce:py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <p className={styles.eyebrow}>What I do</p>
        <h2 className="mt-3 max-w-[18ch] text-2xl font-bold leading-[1.1] sm:text-3xl md:text-4xl lg:text-5xl">
          Across the whole stack. Design it, build it, ship it.
        </h2>

        <div
          className="relative mt-6 w-full text-night md:mt-10"
          style={{ aspectRatio: `${VB_W} / ${VB_H}`, maxHeight: "44vh" }}
        >
          <svg
            viewBox={`0 0 ${VB_W} ${VB_H}`}
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full overflow-visible"
          >
            {/* base track */}
            <path
              d={WAVE_D}
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.15"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* drawn-in progress */}
            <path
              ref={pathRef}
              d={WAVE_D}
              fill="none"
              stroke="var(--night)"
              strokeWidth="4"
              strokeLinecap="round"
              pathLength="1"
              strokeDasharray="1"
              strokeDashoffset={1 - progress}
            />
            {/* connector + anchor dot per node */}
            {nodes.map((nd, i) => {
              const active = progress >= STEP_AT[i] - 0.001;
              const pillY = PILL_Y[STEPS[i].side];
              return (
                <g key={`n-${i}`}>
                  <line
                    x1={nd.x}
                    y1={nd.y}
                    x2={nd.x}
                    y2={pillY}
                    stroke="var(--night)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    style={{
                      opacity: active ? 1 : 0,
                      transition: "opacity .35s",
                    }}
                  />
                  <circle
                    cx={nd.x}
                    cy={nd.y}
                    r={active ? 8 : 5}
                    fill={active ? "var(--night)" : "var(--cream)"}
                    stroke="var(--night)"
                    strokeWidth="3"
                    style={{
                      opacity: active ? 1 : 0,
                      transition: "r .35s, fill .35s, opacity .35s",
                    }}
                  />
                </g>
              );
            })}
            {/* moving tip */}
            {tip && <circle cx={tip.x} cy={tip.y} r="6" fill="var(--night)" />}
          </svg>

          {/* floating pills, positioned in % over the same box */}
          {nodes.map((nd, i) => {
            const active = progress >= STEP_AT[i] - 0.001;
            return (
              <div
                key={`p-${i}`}
                className="absolute w-max max-w-[70vw] rounded-[26px] border-2 border-night bg-white px-4 py-2.5 text-center shadow-[6px_6px_0_0_var(--night)] transition-all duration-300 md:max-w-none md:rounded-full md:px-5 md:py-3"
                style={{
                  left: `${(nd.x / VB_W) * 100}%`,
                  top: `${(PILL_Y[STEPS[i].side] / VB_H) * 100}%`,
                  opacity: active ? 1 : 0,
                  pointerEvents: active ? "auto" : "none",
                  transform: `translate(-50%,-50%) translateY(${
                    active ? 0 : STEPS[i].side === "up" ? 12 : -12
                  }px) scale(${active ? 1 : 0.94})`,
                }}
              >
                <p className="text-sm font-bold text-night md:text-base">
                  {STEPS[i].n} · {STEPS[i].title}
                </p>
                <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.14em] text-night/50 md:text-[10px]">
                  {STEPS[i].sub}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ExpertisePath;
