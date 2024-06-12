"use client";
import { useScroll, motion, useTransform } from "framer-motion";
import { useEffect } from "react";

const HeaderTitle = () => {
  const blinkVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <>
      <motion.h1
        initial={{ x: -400, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "smooth", delay: 1, duration: 0.5 }}
        className="ml-5 font-bold text-4xl tablet:text-2xl phone:text-2xl"
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
    </>
  );
};

export default HeaderTitle;
