"use client";
import { motion } from "framer-motion";
import AppLottieContainer from "./shared/AppLottieContainer";
import { CatScratchLottie, CanadaFlag } from "@/public";

type PageTransitionType = {
  isPresent: boolean;
};

const PageTransition: React.FC<PageTransitionType> = ({ isPresent }) => {
  return (
    <>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ delay: 3, duration: 0.3, ease: "easeInOut" }}
        style={{ originX: isPresent ? 0 : 1 }}
        className={`fixed top-0 bottom-0 left-0 right-0 z-[100] bg-white flex justify-center items-center`}
      >
        <AppLottieContainer animationData={CatScratchLottie} className="w-[100%] h-[100%]" />
      </motion.div>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ delay: 3.8, duration: 0.5, ease: "easeInOut" }}
        // transition={{ delay: 1000000, duration: 0.5, ease: "easeInOut" }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="fixed top-0 bottom-0 left-0 right-0 z-[90] bg-appPrimaryColor canadaFlag w-screen h-screen"
      />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ delay: 4.1, duration: 0.3, ease: "easeInOut" }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="fixed top-0 bottom-0 left-0 right-0 z-[80] bg-appColorDimBlack"
      />
    </>
  );
};

export default PageTransition;
