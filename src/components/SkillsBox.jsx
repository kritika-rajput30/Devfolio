import React from "react";
import {
  database,
  webtools,
  backendtech,
  mobiletech,
  frontend,
  devops,
} from "../constants";

import { box } from "../assets";
import { styles } from "../styles";
import Reveal from "./Reveal";

const allTech = [
  ...frontend,
  ...backendtech,
  ...database,
  ...devops,
  ...mobiletech,
  ...webtools,
];
const tickerText = allTech.map((t) => t.name).join("  •  ") + "  •  ";

const SkillGroup = ({ title, items, delay, progress }) => (
  <Reveal delay={delay} className="frontend bg-current/5 rounded-3xl p-4 relative overflow-hidden">
    <p className="font-bold mb-4 uppercase tracking-wide text-sm text-fog">
      {title}
    </p>
    <div className="flex flex-wrap gap-2 p-1">
      {items.map((item) => (
        <p
          key={item.name}
          className="border-2 font-bold p-2 rounded-xl"
          style={{ borderColor: item.color || "var(--grass)" }}
        >
          {item.name}
        </p>
      ))}
    </div>
    {progress != null && (
      <progress
        className="absolute bottom-0 w-full mt-8 -start-0 progress progress-success"
        value={progress}
        max="100"
      ></progress>
    )}
  </Reveal>
);

export const SkillsBox = () => {
  return (
    <section id="featured">
      <div className="md:mx-40 mx-10 relative py-16">
        <p className={styles.eyebrow}>Skills</p>
        <p className="font-bold text-5xl flex mb-8 items-center gap-4 md:text-7xl">
          SKILLBOX
          <img src={box} className="h-16 md:h-20" alt="" />
        </p>

        <div className="marquee-container mb-10 text-fog">
          <p className="marquee-text text-2xl md:text-4xl font-semibold uppercase tracking-wide">
            {tickerText}
          </p>
          <p className="marquee-text2 text-2xl md:text-4xl font-semibold uppercase tracking-wide">
            {tickerText}
          </p>
        </div>

        <div className="bucket flex flex-wrap gap-4 text-sm">
          <SkillGroup title="Frontend" items={frontend} delay={0.05} />
          <SkillGroup title="Backend" items={backendtech} delay={0.1} />
          <SkillGroup title="Database" items={database} delay={0.15} />
          <SkillGroup title="Devops" items={devops} delay={0.2} progress={85} />
          <SkillGroup title="Mobile" items={mobiletech} delay={0.25} progress={70} />
          <SkillGroup title="Tool's" items={webtools} delay={0.3} />
        </div>
      </div>
    </section>
  );
};
