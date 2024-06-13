"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialMediaComponent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const container = {
    hidden: { opacity: 0, y: 1000 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 3,
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 1000 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "tween",
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div className="inline-block right-0 absolute mr-[3.5rem] z-[100]" ref={ref}>
      {isInView && (
        <motion.ul variants={container} initial="hidden" animate="show" transition={{}} className="flex flex-col justify-center items-center space-y-5 text-3xl">
          <motion.li variants={item} className="w-[0.3rem] h-[6rem] bg-appDarkBgColor dark:bg-appLightBgColor"></motion.li>
          <motion.a href="https://github.com/amandewett" target="_blank" variants={item} whileHover={{ scale: 1.2, type: "spring" }}>
            <FaGithub />
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/amandewett" target="_blank" variants={item} whileHover={{ scale: 1.2, type: "spring" }}>
            <FaLinkedin />
          </motion.a>
          <motion.a href="https://www.facebook.com/dewettaman" target="_blank" variants={item} whileHover={{ scale: 1.2, type: "spring" }}>
            <FaFacebook />
          </motion.a>
          <motion.a href="https://twitter.com/amandewett" target="_blank" variants={item} whileHover={{ scale: 1.2, type: "spring" }}>
            <FaXTwitter />
          </motion.a>
        </motion.ul>
      )}
    </motion.div>
  );
};

export default SocialMediaComponent;
