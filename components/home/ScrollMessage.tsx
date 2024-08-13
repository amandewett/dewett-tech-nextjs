"use client";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { CiDesktopMouse2 } from "react-icons/ci";
import AppLottieContainer from "../shared/AppLottieContainer";
import { ArrowLottie } from "@/public";

const ScrollMessage = () => {
  const { scrollY } = useScroll();
  const opacityValue = useTransform(scrollY, [0, 30, 60, 90, 100], [1, 0.8, 0.5, 0.2, 0]);
  return (
    <AnimatePresence initial>
      <motion.section
        className="flex-col items-center hidden lg:flex fixed bottom-10 w-full"
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
