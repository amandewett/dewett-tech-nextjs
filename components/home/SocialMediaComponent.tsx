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
    <motion.div className="inline-block right-0 absolute mr-[3.3rem] z-[100]" ref={ref}>
      {isInView && (
        <motion.ul variants={container} initial="hidden" animate="show" className="flex flex-col justify-center items-center space-y-5 text-3xl text-appLightTextColor">
          <motion.li variants={item} className="w-[0.3rem] h-[6rem] bg-appDarkBgColor dark:bg-appLightBgColor"></motion.li>
          <motion.a
            href="mailto:amandewett@gmail.com?subject=Requirement"
            target="_blank"
            variants={item}
            className="bg-[#A2D2FFCC] hover:bg-[#A2D2FF] transition-colors duration-500 rounded-[50%] p-2"
          >
            <MdEmail size={"1.5rem"} />
          </motion.a>
          <motion.a href="https://github.com/amandewett" target="_blank" variants={item} className="bg-[#BDB2FFCC] hover:bg-[#BDB2FF] transition-colors duration-500 rounded-[50%] p-2">
            <FaGithub size={"1.5rem"} />
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/amandewett" target="_blank" variants={item} className="bg-[#9BF6FFCC] hover:bg-[#9BF6FF] transition-colors duration-500 rounded-[50%] p-2">
            <FaLinkedin size={"1.5rem"} />
          </motion.a>
          <motion.a href="https://twitter.com/amandewett" target="_blank" variants={item} className="bg-[#CAFFBFCC] hover:bg-[#CAFFBF] transition-colors duration-500 rounded-[50%] p-2">
            <FaXTwitter size={"1.5rem"} />
          </motion.a>
          <motion.a href="https://www.facebook.com/dewettaman" target="_blank" variants={item} className="bg-[#FFC6FFCC] hover:bg-[#FFC6FF] transition-colors duration-500 rounded-[50%] p-2">
            <FaFacebook size={"1.5rem"} />
          </motion.a>
        </motion.ul>
      )}
    </motion.div>
  );
};

export default SocialMediaComponent;
