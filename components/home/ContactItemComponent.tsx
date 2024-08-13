"use client";

import React from "react";
import { ContactItemComponentProps } from "@/utils/appTypes";
import { motion } from "framer-motion";

const ContactItemComponent = ({ link, socialIcon: SocialIcon, iconColor, bgColor }: ContactItemComponentProps) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      style={{ backgroundColor: `#${bgColor}`, borderColor: `#${iconColor}` }}
      className={`rounded-[50%] w-[4rem] h-[4rem] lg:w-[4rem] lg:h-[4rem] xl:w-[4.5rem] xl:h-[4.5rem] 2xl:w-[5rem] 2xl:h-[5rem] flex items-center justify-center border-4 border-solid group cursor-pointer`}
    >
      <SocialIcon color={`#${iconColor}`} className={`size-[1.2rem] md:size-[1.5rem] lg:size-[1.8rem] xl:size-[2.5rem] group-hover:scale-[0.8] duration-500 transition-all`} />
    </motion.a>
  );
};

export default ContactItemComponent;
