import React from "react";
import ImageContainer from "../shared/ImageContainer";
import { WireFrameSvg } from "@/public";
import { EducationItemComponentProps } from "@/utils/appTypes";

const EducationItemComponent = ({ degree, duration, institute }: EducationItemComponentProps) => {
  return (
    <section>
      <div className="w-4 h-4 rounded-[50%] bg-appLightTextColor dark:bg-appDarkTextColor" />
      <div className="relative w-[80vw] h-[10rem] lg:w-[35rem] lg:h-[8rem] xl:w-[40rem] xl:h-[10rem] rounded-[15px] border-solid border-2 border-zinc-500 glow-card-bg ml-10">
        <section className="w-full h-full rounded-[inherit] absolute glow-card-bg-child" />
        <ImageContainer src={WireFrameSvg.src} className="w-full h-full rounded-[inherit] absolute object-cover" />
        <section className="w-full h-full absolute p-5 rounded-[inherit] overflow-hidden top-[-0.8rem] left-[-0.8rem] bg-appLightBgColor dark:bg-appDarkBgColor border-zinc-500 border-solid border-2 flex flex-col justify-between">
          <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 md:gap-0">
            <h2 className="text-base md:text-2xl lg:text-xl xl:text-2xl font-bold">{degree}</h2>
            <p className="text-xs md:text-xl lg:text-sm xl:text-base font-light">{duration}</p>
          </section>
          <h4 className="text-base md:text-2xl lg:text-base xl:text-xl italic">{institute}</h4>
        </section>
      </div>
    </section>
  );
};

export default EducationItemComponent;
