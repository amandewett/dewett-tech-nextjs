"use client";
import { useScroll, motion, useSpring } from "framer-motion";
import { useRef } from "react";
// import ExperienceCard from "./ExperienceCard";
import dynamic from "next/dynamic";
const ExperienceCard = dynamic(() => import("./ExperienceCard"), {
  ssr: false,
});
import Reveal from "../shared/Reveal";

const Experience = () => {
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
      <div className="w-full mt-20 flex flex-col">
        <h2 className="text-6xl lgMonitor:text-5xl laptop:text-3xl tablet:text-2xl phone:text-xl underline decoration-appPrimaryColor decoration-4 font-bold self-center z-10">
          <Reveal>Experience</Reveal>
        </h2>

        <div ref={ref} className="w-full relative mt-10">
          <motion.div
            style={{ scaleY }}
            className="absolute left-0 xxlMonitor:right-0 xlMonitor:right-0 lgMonitor:right-0 laptop:right-0 tablet:ml-5 phone:ml-5 top-0 w-[5px] h-full mx-auto bg-white origin-top"
          />
          <ul className="flex flex-col tablet:items-start phone:items-start xxlMonitor:items-center xlMonitor:items-center lgMonitor:items-center laptop:items-center w-full">
            <ExperienceCard
              company="Freelance"
              description={[
                "Crafted an e-commerce mobile application using Flutter, resulting in 10,000+ downloads and a revenue increase of 40% within the first three months of launch.",
                "Optimized server-side rendering of a pre-developed NextJS application by leveraging dynamic imports, lazy loading for images and caching frequently used content for a textile business, leading to a 25% decrease in page load times and a $30,000 increase in annual online sales revenue.",
              ]}
              duration="September 2023 – Present"
              location=""
              position="Full Stack Developer"
              stack="NextJS, React, Redux, HTML5, CSS3, NodeJS, NestJS, JavaScript, Typescript, Flutter, Dart, MySQL, MongoDB, PostgreSQL, GraphQL, CI/CD, Docker etc."
            />
            <ExperienceCard
              company="Codeferns Technologies"
              description={[
                "Designed and developed a React interface for practicing IELTS and PTE tests, providing real-time mock exams to enhance English language skills.",
                "Built a hybrid mobile app with Flutter for Android and iOS, connecting mentors and mentees, resulting in 20,000+ active users and over 100,000 chat messages exchanged monthly powered by Firebase. Helped thousands to graciously exchange and acquire knowledge.",
                "Hired, trained, and lead Agile team of 3 software engineers.",
                "Collaborated on a partially developed React, AWS and Node.js application focused on bus service tracking, successfully troubleshooted, and restored its tracking system while ensuring accurate timing for bus stops. Increased reliability by 60% through improved user experience delivery.",
                "Worked closely with business team and non-technical client to collect new requirements.",
                "Developed a mobile app, connecting farmers directly with buyers, helping thousands of farmers sell their crops at fair prices. Ensured traceable, authentic products meeting consumer and regulatory demands.",
              ]}
              duration="December 2019 – August 2023"
              location=""
              position="Software Developer"
              stack="NextJS, React, Redux, HTML5, CSS3, NodeJS, NestJS, JavaScript, Typescript, Flutter, Dart, MySQL, MongoDB, PostgreSQL, GraphQL, CI/CD, Docker etc."
              isLeft
            />
            <ExperienceCard
              company="Thirtyfour soft systems"
              description={[
                "Worked as part of a team to define and implement solutions for a taxi-hiring mobile application, resulting in 50% increase in the client’s customer base and doubling of their profits.",
                "Enhanced the performance of the hostel room booking mobile application by 40% through the utilization of diagnostic tools such as profiler and debugger.",
              ]}
              duration="August 2019 – November 2019"
              location=""
              position="Android Developer"
              stack="Java, Kotlin, XML, Flutter, Firebase and serverless functions etc."
            />
            <ExperienceCard
              company="Freelance"
              description={[
                "Crafted a script using JavaScript and Puppeteer, extracted feedback and rating data from a popular shopping website. Helped client to analyse and improve their product.",
                "Contributed as a member of a team of 3 and helped to develop a small Android mobile application to calculate body mass index (BMI) for an Upwork client.",
              ]}
              duration="October 2018 – June 2019"
              location=""
              position="Software Developer"
              stack="Java, JavaScript, Puppeteer."
              isLeft
            />
          </ul>
        </div>
      </div>
    </>
  );
};
export default Experience;
