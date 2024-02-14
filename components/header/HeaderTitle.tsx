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

  return (
    <motion.h1
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      style={{
        opacity: titleOpacity,
        transition: "opacity 350ms",
      }}
      transition={{ type: "tween", delay: 1, duration: 0.5 }}
      className="ml-5 font-bold text-2xl"
    >
      Aman Dewett
    </motion.h1>
  );
};

export default HeaderTitle;
