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
        transition={{ delay: 2, duration: 0.3, ease: "easeInOut" }}
        style={{ originX: isPresent ? 0 : 1 }}
        className={`fixed top-0 bottom-0 left-0 right-0 z-[100] bg-appDarkBgColor flex justify-center items-center`}
      >
        <span className="loader" />
      </motion.div>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ delay: 2, duration: 0.5, ease: "easeInOut" }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="fixed top-0 bottom-0 left-0 right-0 z-[90] bg-appPrimaryColor w-screen h-screen"
      />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ delay: 2, duration: 0.7, ease: "easeInOut" }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="fixed top-0 bottom-0 left-0 right-0 z-[80] bg-appSecondaryColor"
      />
    </>
  );
};

export default PageTransition;
