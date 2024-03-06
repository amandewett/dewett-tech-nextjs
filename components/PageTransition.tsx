"use client";
import { motion } from "framer-motion";

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
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="fixed top-0 bottom-0 left-0 right-0 z-[100] bg-appColorWhiteSmoke"
      />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ delay: 0.1, duration: 0.3, ease: "easeInOut" }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="fixed top-0 bottom-0 left-0 right-0 z-[90] bg-appPrimaryColor"
      />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ delay: 0.3, duration: 0.3, ease: "easeInOut" }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="fixed top-0 bottom-0 left-0 right-0 z-[80] bg-appRedColor"
      />
    </>
  );
};

export default PageTransition;
