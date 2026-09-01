import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion";

/**
 * Simple fade + translate-up-on-enter wrapper used for every normal-flow
 * section. Short-circuits to static children when the visitor prefers
 * reduced motion.
 */
const Reveal = ({ children, className = "", delay = 0, as = "div" }) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  const MotionTag = motion[as] || motion.div;

  return (
    <MotionTag
      className={className}
      variants={fadeIn("up", "tween", delay, 0.6)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
