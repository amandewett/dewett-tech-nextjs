"use client";

import { TechStackItemProps } from "@/utils/appTypes";
import React from "react";
import SkillItemComponent from "./SkillItemComponent";
import TechStackTechItemComponent from "./TechStackTechItemComponent";

const TechStackItemComponent = ({ heading, arrItems, arrIcons, arrColors, arrIsLight }: TechStackItemProps) => {
  return (
    <li className="flex justify-center flex-col items-center">
      <h6 className="text-2xl mt-5 text-center">{heading}:</h6>
      <ul className="w-full flex flex-wrap mt-2 gap-y-4 items-center justify-center">
        {arrItems.map((item: string, index: number) => {
          return <SkillItemComponent key={item} isSmall text={item} SkillIcon={arrIcons[index]} bgColor={arrColors[index]} isLight={arrIsLight[index]} />;
        })}
      </ul>
    </li>
  );
};

export default TechStackItemComponent;
