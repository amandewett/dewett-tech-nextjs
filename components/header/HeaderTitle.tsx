"use client";
import { FC } from "react";
import {
  useScroll,
  motion,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";

const HeaderTitle = () => {
  const { scrollY } = useScroll();
  const titleOpacity = useTransform(
    scrollY,
    [0, 30, 60, 90, 100],
    [1, 0.7, 0.4, 0.1, 0]
  );

  const blinkVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const blinkTransition = {
    duration: 0.5,
    type: "smooth",
    repeatType: "mirror",
    repeat: Infinity,
  };

  return (
    <motion.h1
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      style={{
        opacity: titleOpacity,
        transition: "opacity 350ms",
      }}
      transition={{ type: "smooth", delay: 1, duration: 0.5 }}
      className="ml-5 font-bold text-2xl"
    >
      <motion.span
        className="text-appPrimaryColor"
        variants={blinkVariants}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.5,
          type: "smooth",
          repeatType: "mirror",
          repeat: Infinity,
        }}
      >
        &#123;
      </motion.span>
      Aman Dewett
      <motion.span
        className="text-appPrimaryColor"
        variants={blinkVariants}
        initial="hidden"
        animate="visible"
        transition={{
          duration: 0.5,
          type: "smooth",
          repeatType: "mirror",
          repeat: Infinity,
        }}
      >
        &#125;
      </motion.span>
    </motion.h1>
  );
};

export default HeaderTitle;
