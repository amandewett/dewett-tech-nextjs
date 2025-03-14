"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { HireMeFooterLottie } from "@/public";
import AppLottieContainer from "./shared/AppLottieContainer";

const HireMeButton = () => {
  const { scrollY } = useScroll();
  const yTransform = useTransform(scrollY, [0, 50, 100, 150, 200], [200, 150, 100, 50, 0]);
  const opacityTransform = useTransform(scrollY, [0, 50, 100, 150, 200], [0, 0, 0.3, 0.5, 1]);
  const displayTransform = useTransform(scrollY, [0, 50, 100, 150, 200], ["none", "none", "flex", "flex", "flex"]);

  return (
    <motion.a
      href="mailto:contact@dewett.ca?subject=Requirement"
      style={{ y: yTransform, opacity: opacityTransform, display: displayTransform, transition: "transform 0.5s" }}
      initial={{ y: 0 }}
      animate={{ y: -50 }}
      exit={{ y: 0 }}
      transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
      className="fixed bottom-10 right-[2rem] z-50 flex justify-center items-center flex-col cursor-pointer"
    >
      <AppLottieContainer width="5rem" height="5rem" animationData={HireMeFooterLottie} />
      <p className="uppercase font-bold">Connect!</p>
    </motion.a>
  );
};
export default HireMeButton;
