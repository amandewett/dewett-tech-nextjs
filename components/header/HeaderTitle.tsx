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
          &#60;
        </motion.span>

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
          &#47;&#62;
        </motion.span>
      </motion.h1>
    </>
  );
};

export default HeaderTitle;
