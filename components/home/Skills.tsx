"use client";
import { VectorTwo, VectorEight, VectorSix } from "@/public";
import ImageContainer from "../shared/ImageContainer";
import Reveal from "@/components/shared/Reveal";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
const SkillsTimeline = dynamic(() => import("./timeline/SkillsTimeline"), {
  ssr: false,
});

const Skills = () => {
  return (
    <>
      <div className="flex flex-row justify-between w-full mt-10 xxlMonitor:mt-20 tablet:mt-64 phone:mt-72">
        {/* left side */}
        <div className="w-[50%]">
          <div className="pl-14">
            <h1 className="text-6xl tablet:text-4xl phone:text-4xl xxlMonitor:text-7xl inline-block">
              <Reveal willSwipe>Skills</Reveal>
            </h1>
            <motion.div
              className="w-16 2xl:w-24 h-[5px] xxlMonitor:h-[7px] bg-appPrimaryColor"
              initial={{ x: 200, width: "200px" }}
              whileInView={{
                x: 0,
                width: "50px",
              }}
              viewport={{ once: true }}
              transition={{
                delay: 0,
                duration: 0.5,
                type: "tween",
                ease: "easeIn",
              }}
            />
          </div>
          <SkillsTimeline />
        </div>
        {/* right side */}
        <div className="w-[50%] z-10">
          <Reveal>
            <ImageContainer
              src={VectorEight.src}
              alt="skills 1"
              width={500}
              height={500}
              className="xxlMonitor:w-[650px] xxlMonitor:h-[650px] xlMonitor:w-[500px] xlMonitor:h-[500px] laptop:w-[400px] laptop:h-[400px] tablet:w-[300px] tablet:h-[300px]"
            />
          </Reveal>
          <Reveal>
            <ImageContainer
              src={VectorSix.src}
              alt="skills 1"
              width={500}
              height={500}
              className="xxlMonitor:w-[650px] xxlMonitor:h-[650px] xlMonitor:w-[500px] xlMonitor:h-[500px] laptop:w-[400px] laptop:h-[400px] mt-20  tablet:w-[300px] tablet:h-[300px]"
            />
          </Reveal>
          <Reveal>
            <ImageContainer
              src={VectorTwo.src}
              alt="skills 1"
              width={500}
              height={500}
              className="xxlMonitor:w-[650px] xxlMonitor:h-[650px] laptop:w-[400px] laptop:h-[400px] mt-20  tablet:w-[300px] tablet:h-[300px] xxlMonitor:hidden xlMonitor:hidden lgMonitor:hidden laptop:hidden"
            />
          </Reveal>
        </div>
      </div>
    </>
  );
};
export default Skills;
