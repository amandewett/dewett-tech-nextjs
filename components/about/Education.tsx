"use client";
import { useScroll, motion, useSpring } from "framer-motion";
import { useRef } from "react";
// import ExperienceCard from "./ExperienceCard";\
import dynamic from "next/dynamic";
const ExperienceCard = dynamic(() => import("./ExperienceCard"), {
  ssr: false,
});
import Reveal from "../shared/Reveal";

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <div className="w-full mt-24 flex flex-col mb-60">
        <h2 className="text-6xl lgMonitor:text-5xl laptop:text-3xl tablet:text-2xl phone:text-xl underline decoration-appPrimaryColor decoration-4 font-bold self-center z-10">
          <Reveal>Education</Reveal>
        </h2>

        <div ref={ref} className="w-full relative mt-10">
          <motion.div
            style={{ scaleY }}
            className="absolute left-0 xxlMonitor:right-0 xlMonitor:right-0 lgMonitor:right-0 laptop:right-0 tablet:ml-5 phone:ml-5 top-0 w-[5px] h-full mx-auto bg-white origin-top"
          />
          <ul className="flex flex-col tablet:items-start phone:items-start xxlMonitor:items-center xlMonitor:items-center lgMonitor:items-center laptop:items-center w-full">
            <ExperienceCard
              company="Chandigarh University"
              description="During my Post Graduation journey, I gained proficiency in several programming languages such as Java, C++, Python and Javascript. I have also acquire knowledge about Data structures, algorithms, OOPS, Database management systems. I completed real-world projects, honed my problem-solving skills, and engaged in research on emerging technologies. Collaborative teamwork and a thesis project were integral parts of my academic journey. Additionally, I built valuable connections with professors and peers. My MCA experience provided a strong foundation for a successful career in technology and software development."
              duration="June 2017 - May 2019"
              location=""
              position="Masters Of Computer Applications"
            />
            <ExperienceCard
              company="Guru Nanak Dev University"
              description="Embarking on the journey of my Bachelor of Computer Applications (BCA) was a thrilling. The initial year was marked by an enthusiastic embrace of core courses, delving into the foundations of programming languages and data structures. Overcoming challenges became a catalyst for personal growth, and I discovered newfound interests. Moving into the second year, the freedom to choose specializations allowed me to tailor my academic path. The third year introduced advanced topics such as database management and Android development, propelling my understanding to real-world applications. In the end I can say, my BCA journey culminated with a sense of achievement."
              duration="June 2012 - May 2015"
              location=""
              position="Bachelor Of Computer Applications"
              isLeft
            />
          </ul>
        </div>
      </div>
    </>
  );
};
export default Education;
