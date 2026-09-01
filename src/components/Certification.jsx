import React from "react";
import { certificates, certificates2 } from "../constants";
import { styles } from "../styles";
import Reveal from "./Reveal";

const allCertificates = [...certificates, ...certificates2];

const Certification = () => {
  return (
    <div className="py-20 px-4 md:px-16">
      <Reveal>
        <p className={styles.eyebrow}>Certifications</p>
        <p className="font-bold text-5xl md:text-7xl mb-6">CERTIFICATIONS.</p>
        <p className="max-w-2xl text-fog font-medium mb-10">
          My certificates represent a testament to my dedication and
          expertise in various fields. Whether it's academic achievements,
          professional qualifications, or specialized training, each
          certificate symbolizes my commitment to continual learning and
          growth.
        </p>
      </Reveal>

      <Reveal
        delay={0.15}
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        {allCertificates.map((certificate, index) => (
          <div
            key={index}
            className="box h-40 md:h-52 rounded-md overflow-hidden shadow-lg bg-cream/10"
          >
            <img
              src={certificate.img}
              alt={certificate.title}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </Reveal>
    </div>
  );
};

export default Certification;
