"use client";

import { useScroll, useSpring, motion } from "framer-motion";
import React, { useRef } from "react";
import EducationItemComponent from "./EducationItemComponent";

const EducationTimeline = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 30,
  });

  return (
    <section ref={ref} className="w-full relative mt-10 h-[80vh]">
      <motion.div style={{ scaleY }} className="absolute w-[5px] h-full bg-appPrimaryColor origin-top" />
      <ul className="absolute -left-[5px] flex flex-col mt-10 gap-10">
        <EducationItemComponent degree="Master of Computer Applications" duration="June 2017 - May 2019" institute="Chandigarh University, India" />
        <EducationItemComponent degree="Bachelor of Computer Applications" duration="June 2012 - May 2015" institute="Lyallpur Khalsa College, India" />
      </ul>
    </section>
  );
};

export default EducationTimeline;
