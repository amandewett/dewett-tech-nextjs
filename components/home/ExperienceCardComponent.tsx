"use client";

import { CodefernsTechnologiesLogo, WireFrameSvg } from "@/public";
import React from "react";
import ImageContainer from "../shared/ImageContainer";
import { FiExternalLink } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import { motion } from "framer-motion";

type ExperienceCardComponentProps = {
  logo?: string;
  position: string;
  company: string;
  website?: string;
  duration: string;
  arrDescriptions: string[];
};

const ExperienceCardComponent = ({ logo = "", position, company, website = "", duration, arrDescriptions }: ExperienceCardComponentProps) => {
  return (
    <div className="relative w-[50vw] h-[50vh] rounded-[15px] border-solid border-2 border-zinc-500 glow-card-bg">
      <section className="w-full h-full rounded-[inherit] absolute glow-card-bg-child" />
      <ImageContainer src={WireFrameSvg.src} className="w-full h-full rounded-[inherit] absolute object-cover" />
      <section className="w-full h-full absolute rounded-[inherit] top-[-0.8rem] left-[-0.8rem] bg-appLightBgColor dark:bg-appDarkBgColor border-zinc-500 border-solid border-2 flex justify-between">
        <section className="w-[50%] h-full rounded-[inherit] flex flex-col items-center p-5">
          {website !== "" && (
            <a
              href={website}
              target="_blank"
              className="flex justify-center items-center self-start border-zinc-500 text-appLightTextColor dark:text-appDarkTextColor hover:text-appPrimaryColor cursor-pointer border-solid border-2 p-2 rounded-lg"
            >
              <p className="mr-2">Visit</p>
              <FiExternalLink className="w-[1vw] h-[1vw]" />
            </a>
          )}
          <section className="flex flex-col items-center justify-center flex-1">
            {logo !== "" && (
              <div className="w-[10vw] h-[10vw] overflow-hidden">
                <ImageContainer src={logo} className="w-full h-full object-contain" width={500} height={500} />
              </div>
            )}
            <section className="mt-5 flex flex-col items-center text-sm md:text-base xl:text-lg 2xl:text-xl font-medium text-center">
              <h3>{position}</h3>
              <h3 className="mb-5">{`@${company}`}</h3>
              <CiCalendar className="text-3xl mb-2" />
              <p className="text-base font-light text-zinc-800 dark:text-zinc-300">{duration}</p>
            </section>
          </section>
        </section>
        <section className="w-[50%] overflow-y-scroll p-5 rounded-[inherit]">
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
