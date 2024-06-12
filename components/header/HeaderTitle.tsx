"use client";
import { useScroll, motion, useTransform } from "framer-motion";
import { useEffect } from "react";

const HeaderTitle = () => {
  const { scrollY } = useScroll();
  const titleXMovement = useTransform(scrollY, [0, 30, 60, 90, 100], [40, 30, 20, 10, 0]);

  const blinkVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <>
      <motion.h1
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{
          x: titleXMovement,
          transition: "all 350ms",
        }}
        transition={{ type: "smooth", delay: 1, duration: 0.5 }}
        className="ml-5 font-bold text-2xl tablet:text-lg phone:text-base"
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
