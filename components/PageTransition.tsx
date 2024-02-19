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
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="fixed top-0 bottom-0 left-0 right-0 z-30 bg-mTextColor"
      />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="fixed top-0 bottom-0 left-0 right-0 z-20 bg-mBgColor"
      />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="fixed top-0 bottom-0 left-0 right-0 z-10 bg-mRedColor"
      />
    </>
  );
};

export default PageTransition;
