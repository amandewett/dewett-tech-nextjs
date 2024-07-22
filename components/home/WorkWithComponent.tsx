"use client";

import React, { useRef } from "react";
import { PiArrowSquareUpRight } from "react-icons/pi";
import { motion, useInView } from "framer-motion";

const WorkWithComponent = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const container = {
    hidden: { opacity: 0, x: 1000 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delayChildren: 0,
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: 1000 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.4,
      },
    },
  };

  return (
    <section ref={ref} className="w-full h-[60vh] flex flex-col justify-evenly items-center md:flex-row mt-[15rem]">
      {inView && (
        <motion.section initial={{ x: -1000, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ type: "tween", duration: 1 }} className="xl:text-6xl font-bold">
          I often work with:
        </motion.section>
      )}
      {inView && (
        <section>
          <motion.ul variants={container} initial="hidden" animate="show" className="xl:text-4xl font-medium space-y-10">
            <motion.li variants={item} className="flex space-x-6">
              <PiArrowSquareUpRight />
              <p>Startups</p>
            </motion.li>
            <motion.li variants={item} className="flex space-x-6">
              <PiArrowSquareUpRight /> <p>Agencies</p>
            </motion.li>
            <motion.li variants={item} className="flex space-x-6">
              <PiArrowSquareUpRight /> <p>B2B Businesses</p>
            </motion.li>
          </motion.ul>
        </section>
      )}
    </section>
  );
};

export default WorkWithComponent;
