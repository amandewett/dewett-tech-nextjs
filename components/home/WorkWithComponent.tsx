"use client";

import React, { useRef } from "react";
import { PiArrowSquareUpRight } from "react-icons/pi";
import { motion, useInView } from "framer-motion";
import WorldMapComponent from "./WorldMapComponent";

const WorkWithComponent = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

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
    <section ref={ref} className="flex flex-col flex-1 justify-between items-center lg:flex-row mt-[10vh] lg:mt-[20vh] overflow-hidden">
      {inView && (
        <motion.section initial={{ x: -1000, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ type: "tween", duration: 1 }}>
          <WorldMapComponent />
        </motion.section>
      )}
      {inView && (
        <section className="ml-auto mr-auto mt-[0rem] lg:mt-0">
          <motion.ul variants={container} initial="hidden" animate="show" className="text-2xl md:text-4xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-medium space-y-10">
            <motion.li variants={item} className="flex space-x-6">
              <p>I often work with:</p>
            </motion.li>
            <motion.li variants={item} whileHover={{ x: -20, transition: { duration: 0.5 } }} className="flex space-x-6 cursor-pointer">
              <PiArrowSquareUpRight className="text-appPrimaryColor" />
              <p>Startups</p>
            </motion.li>
            <motion.li variants={item} whileHover={{ x: -20, transition: { duration: 0.5 } }} className="flex space-x-6 cursor-pointer">
              <PiArrowSquareUpRight className="text-appPrimaryColor" /> <p>Agencies</p>
            </motion.li>
            <motion.li variants={item} whileHover={{ x: -20, transition: { duration: 0.5 } }} className="flex space-x-6 cursor-pointer">
              <PiArrowSquareUpRight className="text-appPrimaryColor" /> <p>B2B Businesses</p>
            </motion.li>
          </motion.ul>
        </section>
      )}
    </section>
  );
};

export default WorkWithComponent;
