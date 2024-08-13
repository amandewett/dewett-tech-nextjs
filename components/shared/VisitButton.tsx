"use client";

import { VisitButtonProps } from "@/utils/appTypes";
import React from "react";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

const VisitButton = (props: VisitButtonProps) => {
  return (
    <motion.a whileHover={{ y: -1 }} href={props.link} target="_blank" className="flex items-center border-zinc-500 border-solid border-2 rounded-lg p-2 gap-3 hover:text-appPrimaryColor">
      <h4>Visit</h4>
      <FiExternalLink className="" />
    </motion.a>
  );
};

export default VisitButton;
