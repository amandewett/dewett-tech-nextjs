"use client";
import { useScroll, motion, useTransform } from "framer-motion";

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
        transition={{ type: "tween", delay: 1, duration: 1 }}
        className="ml-5 font-bold text-lg sm:text-3xl xl:text-4xl text-transparent gradientText"
      >
        <motion.span
          variants={blinkVariants}
          initial="hidden"
          animate="visible"
          transition={{
            duration: 0.5,
            type: "smooth",
            repeatType: "mirror",
            repeat: Infinity,
          }}
        ></motion.span>
        Full Stack Developer
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
        ></motion.span>
      </motion.h1>
    </>
  );
};

export default HeaderTitle;
