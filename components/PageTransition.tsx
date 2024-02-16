"use client";
import { motion, useIsPresent, AnimatePresence } from "framer-motion";

const PageTransition: React.FC<React.PropsWithChildren> = ({ children }) => {
  const isPresent = useIsPresent();

  return (
    <>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{
          scaleX: 0,
          transition: { duration: 0.8, ease: "circOut" },
        }}
        exit={{ scaleX: 1, transition: { duration: 1, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        transition={{ type: "spring" }}
        className="fixed top-0 bottom-0 left-0 right-0 z-30 bg-black"
      />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{
          scaleX: 0,
          transition: { duration: 1, ease: "circOut" },
        }}
        exit={{ scaleX: 0, transition: { duration: 2, ease: "circIn" } }}
        transition={{ type: "spring" }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="fixed top-0 bottom-0 left-0 right-0 z-20 bg-white"
      />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{
          scaleX: 0,
          transition: { duration: 1.5, ease: "circOut" },
        }}
        exit={{ scaleX: 0, transition: { duration: 2, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="fixed top-0 bottom-0 left-0 right-0 z-10 bg-primary"
      />
    </>
  );
};

export default PageTransition;
