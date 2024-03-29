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
                "Developed responsive and visually stunning websites, boosting client’s satisfaction ratings 9/10.",
                "Scrapped a specific website for a client from Upwork and delivered data in .csv file.",
                "Improved business process by created a Firebase cloud function for client Flutterflow mobile application that generates QR code from taxi driver’s profile data and store it as .pdf file in an identity card size.",
                "Developed an SEO friendly website using power of NextJS framework, it will help client to get 40% more clients through search engines.",
              ]}
              duration="Sep 2023 – Present"
              location="Brampton, Canada"
              position="Full Stack Developer"
              stack="NextJS, React, Redux, HTML5, CSS3, NodeJS, NestJS, JavaScript, Typescript, Flutter, Dart, MySQL, MongoDB, PostgreSQL, GraphQL, CI/CD, Docker etc."
            />
            <ExperienceCard
              company="Codeferns Technologies"
              description={[
                "Led a team of 3 developers towards deploying several Frontend, Backend and Flutter mobile applications ahead of their schedule.",
                "Implemented secure authentication and authorization solutions, ensuring the protection of sensitive customer data, and reducing the risk of security breaches by 40%.",
                "Migrated a PHP application to NodeJS and increased its performance by 30%.",
                "Developed an event-driven service to run and manage background scheduled jobs.",
                "Created several re-usable components for React applications to accelerate development process by 30% and to lazy load web pages.",
                "Developed a mortgage information application according to Australian market and increased client’s business by 40%.",
                "Worked closely with business team and non-technical client to collect new requirements.",
                "Created a system to process more than 10,000 orders every day without any major hiccups.",
              ]}
              duration="Dec 2019 – Aug 2023"
              location="Chandigarh, India"
              position="Software Developer (Full Stack)"
              stack="NextJS, React, Redux, HTML5, CSS3, NodeJS, NestJS, JavaScript, Typescript, Flutter, Dart, MySQL, MongoDB, PostgreSQL, GraphQL, CI/CD, Docker etc."
              isLeft
            />
            <ExperienceCard
              company="Thirtyfour soft systems"
              description={[
                "Worked as part of team to define and implement solutions for a Taxi hiring mobile application and helped to increase their customers by 30%.",
                "Identified and resolved bottlenecks, rectified bugs and enhanced application’s performance.",
              ]}
              duration="Aug 2019 – Nov 2019"
              location="Mohali, India"
              position="Android Developer"
              stack="Java, Kotlin, XML, Flutter, Firebase and Google cloud functions etc."
            />
            <ExperienceCard
              company="Freelance"
              description={[
                "Developed scripts using JavaScript and Puppeteer to extract data from popular websites to increase business for a new startup.",
                "Designed a service for a book writer to keep track of his books sales on Amazon.",
                "Worked as part of a freelance team and developed a mobile application to search roommates and completed it in advance.",
              ]}
              duration="Oct 2018 – June 2019"
              location="Mohali, India"
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
