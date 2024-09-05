"use client";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { CiDesktopMouse2 } from "react-icons/ci";
import AppLottieContainer from "../shared/AppLottieContainer";
import { ArrowLottie } from "@/public";
import { useEffect } from "react";
import { ScrollMessageProps } from "@/utils/appTypes";

const ScrollMessage = ({ arrScrollYPosition }: ScrollMessageProps) => {
  const { scrollY } = useScroll();
  const opacityValue = useTransform(scrollY, arrScrollYPosition ? arrScrollYPosition : [0, 30, 60, 90, 100], arrScrollYPosition ? [0, 0.9, 1, 0.9, 0].reverse() : [1, 0.8, 0.5, 0.2, 0]);

  return (
    <AnimatePresence initial>
      <motion.section
        className={`flex-col items-center ${arrScrollYPosition ? "flex" : "hidden"} lg:flex fixed bottom-10 w-full`}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{ opacity: opacityValue }}
        transition={{ delay: 5, type: "tween" }}
      >
        <AppLottieContainer animationData={ArrowLottie} className="ml-auto mr-auto p-0 z-10 rotate-90 h-[5rem]" loop={4} />
      </motion.section>
    </AnimatePresence>
  );
};
export default ScrollMessage;
