"use client";

import { SkillItemComponentProps } from "@/utils/appTypes";
import React from "react";
import { FaHtml5 } from "react-icons/fa";

const SkillItemComponent = ({ bgColor = "EC644E", text = "HTML", SkillIcon = FaHtml5, isLight = false, isSmall = false }: SkillItemComponentProps) => {
  const textClasses = isSmall ? "text-xs lg:text-sm font-medium lg:font-semibold" : "text-lg md:text-2xl font-semibold";
  return (
    <li style={{ backgroundColor: `#${bgColor}` }} className={`rounded-lg p-2 space-x-1 md:space-x-2 flex items-center justify-center mx-1 md:mx-2 group ${textClasses} cursor-default`}>
      <SkillIcon className={`${isLight ? "text-appLightTextColor" : "text-appDarkTextColor"} group-hover:scale-125 transition-all duration-500`} />
      <p className={`${isLight ? "text-appLightTextColor" : "text-appDarkTextColor"}`}>{text}</p>
    </li>
  );
};

export default SkillItemComponent;
