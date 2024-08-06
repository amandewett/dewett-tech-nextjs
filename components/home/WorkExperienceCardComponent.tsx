"use client";

import React from "react";
import { CiCalendar } from "react-icons/ci";
import { WorkExperienceCardComponentProps } from "@/utils/appTypes";
import Image from "next/image";
import { motion } from "framer-motion";

const WorkExperienceCardComponent = ({ bgColor = "FBF8CC", imageSrc, companyName, position, duration }: WorkExperienceCardComponentProps) => {
  return (
    <motion.li
      whileHover={{ y: -5 }}
      style={{ backgroundColor: `#${bgColor}` }}
      className="min-w-[15rem] md:min-w-[20rem] h-[80%] rounded-2xl m-4 text-[#293241] flex flex-col justify-end items-center text-sm md:text-base xl:text-lg 2xl:text-xl font-medium p-5 cursor-pointer"
    >
      {imageSrc && <Image src={`${imageSrc}`} alt={companyName} width={500} height={500} className="w-[8rem] md:w-[10rem] h-[5rem] object-contain mb-16" />}
      {!imageSrc && <div className="w-[8rem] md:w-[10rem] h-[5rem] mb-16" />}
      <h3>{position}</h3>
      <h3 className="mb-5">{`@${companyName}`}</h3>
      <CiCalendar className="text-3xl" />
      <p className="text-lg font-light">{duration}</p>
    </motion.li>
  );
};

export default WorkExperienceCardComponent;
