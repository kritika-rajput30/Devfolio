import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import SubHeroSection from "../components/SubHeroSection";

const slideInRightEffect = {
  hidden: {
    x: 500,
  },
  visible: {
    x: 0,
    transition: {
      ease: "easeInOut",
      type: "spring",
    },
  },
};
const slideInLeftEffect = {
  hidden: {
    x: -500,
  },
  visible: {
    x: 0,
    transition: {
      ease: "easeInOut",
      type: "spring",
    },
  },
};
const Hero = () => {
  return (
    <div className="flex w-full md:flex-row gap-4 flex-col-reverse items-center">
      <motion.div
        variants={slideInLeftEffect}
        initial="hidden"
        animate="visible"
        transition="transition"
        className="relative flex-1"
      >
        <div className="mx-auto flex flex-row items-start gap-5">
          <div>
            <div className="flex md:ps-0">
              <h1 className="mt-6 font-bold bg-grass text-night text-2xl p-1 w-full rounded-md">
                Hey there , I' m{" "}
              </h1>

              <SubHeroSection />
            </div>
            <div className="flex flex-col justify-center md:p-auto p-8">
              <p className={`${styles.heroSubText} mt-20 md:mt-32`}>
                A full stack web and mobile application developer.
              </p>
              <p className="font-bold text-grass p-4 my-4 ps-1">
                "An innovative MCA student at VPIMSR , Sangli blending technical
                prowess with creative flair to craft immersive digital
                experiences for web and mobile platforms. Let's collaborate to
                engineer something truly extraordinary
                <span className="inline underline underline-offset-8 font-bold text-xl">
                  {" "}
                  together!
                </span>
                "
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={slideInRightEffect}
        initial="hidden"
        animate="visible"
        transition="transition"
        className="profile relative flex-1 gap-2 flex flex-col"
      >
        <div className="flex items-center gap-2"></div>
        <div className="overflow-hidden rounded-0 z-50"></div>
      </motion.div>
    </div>
  );
};

export default Hero;
