"use client";

import { CodefernsTechnologiesLogo, WireFrameSvg } from "@/public";
import React from "react";
import ImageContainer from "../shared/ImageContainer";
import { FiExternalLink } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import { motion } from "framer-motion";
import { durationCalculator } from "@/utils/durationCalculator";

type ExperienceCardComponentProps = {
  logo?: string;
  position: string;
  company: string;
  website?: string;
  duration: string;
  arrDescriptions: string[];
  joiningDate: Date;
  relievingDate?: Date | undefined;
};

const ExperienceCardComponent = ({ logo = "", position, company, website = "", duration, arrDescriptions, joiningDate, relievingDate }: ExperienceCardComponentProps) => {
  return (
    <div className="relative w-[60vw] h-[40vh] md:w-[50vw] md:h-[50vh] lg:w-[70vw] lg:h-[60vh] rounded-[15px] border-solid border-2 border-zinc-500 glow-card-bg">
      <section className="w-full h-full rounded-[inherit] absolute glow-card-bg-child" />
      <ImageContainer src={WireFrameSvg.src} className="w-full h-full rounded-[inherit] absolute object-cover" />
      <section className="w-full h-full absolute rounded-[inherit] overflow-hidden top-[-0.8rem] left-[-0.8rem] bg-appLightBgColor dark:bg-appDarkBgColor border-zinc-500 border-solid border-2 flex justify-between">
        <section className="w-full lg:w-[50%] h-[50%] lg:h-full rounded-[inherit] flex flex-col items-center p-5">
          {website !== "" && (
            <motion.a
              whileHover={{ y: -1 }}
              href={website}
              target="_blank"
              className="flex justify-center items-center self-start border-zinc-500 text-appLightTextColor dark:text-appDarkTextColor hover:text-appPrimaryColor cursor-pointer border-solid border-2 p-2 rounded-lg"
            >
              <p className="mr-2 text-sm md:text-sm xl:text-base">Visit</p>
              <FiExternalLink className="w-[3vw] h-[3vw] md:w-[1.5vw] md:h-[1.5vw] lg:w-[1vw] lg:h-[1vw]" />
            </motion.a>
          )}
          {website === "" && (
            <motion.a
              whileHover={{ y: -1 }}
              href={website}
              target="_blank"
              className="flex justify-center items-center self-start opacity-0 cursor-default border-zinc-500 text-appLightTextColor dark:text-appDarkTextColor hover:text-appPrimaryColor lg:cursor-pointer border-solid border-2 p-2 rounded-lg"
            >
              <p className="mr-2 text-sm md:text-sm xl:text-base">Visit</p>
              <FiExternalLink className="w-[3vw] h-[3vw] md:w-[1.5vw] md:h-[1.5vw] lg:w-[1vw] lg:h-[1vw]" />
            </motion.a>
          )}
          <section className="w-full flex flex-col items-center justify-around lg:justify-center flex-1">
            {logo !== "" && (
              <div className="w-[20vw] h-[17vw] md:w-[23vw] md:h-[20vw] lg:w-[15vw] lg:h-[12vw] overflow-hidden">
                <ImageContainer src={logo} className="w-full h-full object-contain" width={500} height={500} />
              </div>
            )}
            <section className="mt-5 flex flex-col items-center text-base md:text-2xl lg:text-xl font-medium text-center">
              <h3>{position}</h3>
              <h3 className="mb-5">{`@${company}`}</h3>
              <CiCalendar className="text-xl md:text-2xl lg:text-2xl mb-2" />
              <p className="text-sm md:text-lg lg:text-sm xl:text-lg font-light text-zinc-800 dark:text-zinc-300">{`${duration} (${durationCalculator(joiningDate, relievingDate)})`}</p>
            </section>
          </section>
        </section>
        <section className="w-full lg:w-[50%] h-[50%] lg:h-full overflow-y-scroll p-10 lg:p-5 rounded-[inherit] text-sm md:text-base xl:text-lg hidden lg:inline-block">
          <ul className="list-disc space-y-2 rounded-[inherit]">
            {arrDescriptions.map((item: string, index: number) => {
              return <li key={`${item[0]}_${index}`}>{item}</li>;
            })}
          </ul>
        </section>
      </section>
    </div>
  );
};

export default ExperienceCardComponent;
