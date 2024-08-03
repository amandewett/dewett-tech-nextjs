"use client";

import { TechStackItemProps } from "@/utils/appTypes";
import React from "react";
import SkillItemComponent from "./SkillItemComponent";

const TechStackItemComponent = ({ heading, arrItems, arrIcons }: TechStackItemProps) => {
  return (
    <>
      <h6 className="mt-5 text-2xl">{heading}:</h6>
      <span className="w-full space-y-5 flex flex-wrap">
        {arrItems.map((item: string, index: number) => {
          return <SkillItemComponent key={item} text={item} bgColor="e63946" SkillIcon={arrIcons[index]} />;
        })}
      </span>
    </>
  );
};

export default TechStackItemComponent;
