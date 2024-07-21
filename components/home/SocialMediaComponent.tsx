"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const SocialMediaComponent = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const container = {
    hidden: { opacity: 0, y: 1000 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 2,
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 1000 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 1.4,
      },
    },
  };

  return (
    <motion.div ref={ref}>
      {isInView && (
        <motion.ul
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-row lg:flex-col lg:justify-center items-center space-x-5 lg:space-x-0 lg:space-y-5 text-3xl text-appLightTextColor"
        >
          <motion.li variants={item} className="w-[6rem] h-[0.3rem] lg:w-[0.3rem] lg:h-[6rem] bg-appDarkBgColor dark:bg-appLightBgColor" />
          <motion.a
            href="mailto:amandewett@gmail.com?subject=Requirement"
            target="_blank"
            variants={item}
            className="bg-[#A2D2FFCC] hover:bg-[#A2D2FF] transition-colors duration-300 rounded-[50%] p-2"
          >
            <MdEmail className="size-[1.2rem] md:size-[1.3rem] xl:size-[1.5rem]" />
          </motion.a>
          <motion.a href="https://github.com/amandewett" target="_blank" variants={item} className="bg-[#BDB2FFCC] hover:bg-[#BDB2FF] transition-colors duration-300 rounded-[50%] p-2">
            <FaGithub className="size-[1.2rem] md:size-[1.3rem] xl:size-[1.5rem]" />
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/amandewett" target="_blank" variants={item} className="bg-[#9BF6FFCC] hover:bg-[#9BF6FF] transition-colors duration-300 rounded-[50%] p-2">
            <FaLinkedin className="size-[1.2rem] md:size-[1.3rem] xl:size-[1.5rem]" />
          </motion.a>
          <motion.a href="https://twitter.com/amandewett" target="_blank" variants={item} className="bg-[#CAFFBFCC] hover:bg-[#CAFFBF] transition-colors duration-300 rounded-[50%] p-2">
            <FaXTwitter className="size-[1.2rem] md:size-[1.3rem] xl:size-[1.5rem]" />
          </motion.a>
          <motion.a href="https://www.facebook.com/dewettaman" target="_blank" variants={item} className="bg-[#FFC6FFCC] hover:bg-[#FFC6FF] transition-colors duration-300 rounded-[50%] p-2">
            <FaFacebook className="size-[1.2rem] md:size-[1.3rem] xl:size-[1.5rem]" />
          </motion.a>
        </motion.ul>
      )}
    </motion.div>
  );
};

export default SocialMediaComponent;
