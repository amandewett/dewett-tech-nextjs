"use client";
import Reveal from "../shared/Reveal";
import { useScroll, motion, useSpring } from "framer-motion";
import { useRef } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaAirbnb } from "react-icons/fa";
import { ProjectsAirBnb } from "@/public";
import Image from "next/image";
import ProjectsTimelineElement from "./ProjectsTimelineElement";

const ProjectsTimeline = () => {
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
      <div className="w-full flex flex-col items-center mt-10">
        <Reveal>
          <h1 className="text-5xl font-bold underline decoration-appPrimaryColor decoration-4 underline-offset-2">
            Sample Projects
          </h1>
        </Reveal>
        <div className="w-full mt-10 transition-all duration-500">
          <VerticalTimeline
            lineColor="#0A66C2"
            layout="2-columns"
            className="z-10 transition-all duration-500"
          >
            <ProjectsTimelineElement
              icon={FaAirbnb}
              aboutProject="Its an airbnb clone made with NextJS, Typescript and
            Tailwind for styling. I have used MongoDB a NoSql database
            to store listings and users. In addition, I have used
            power of NextAuth and implemented Google, Github and
            Credentials authentications."
              imageSrc={ProjectsAirBnb.src}
              projectName="AirBnb Clone"
            />
            <ProjectsTimelineElement
              icon={FaAirbnb}
              aboutProject="Its an airbnb clone made with NextJS, Typescript and
            Tailwind for styling. I have used MongoDB a NoSql database
            to store listings and users. In addition, I have used
            power of NextAuth and implemented Google, Github and
            Credentials authentications."
              imageSrc={ProjectsAirBnb.src}
              projectName="AirBnb Clone"
            />
            <ProjectsTimelineElement
              icon={FaAirbnb}
              aboutProject="Its an airbnb clone made with NextJS, Typescript and
            Tailwind for styling. I have used MongoDB a NoSql database
            to store listings and users. In addition, I have used
            power of NextAuth and implemented Google, Github and
            Credentials authentications."
              imageSrc={ProjectsAirBnb.src}
              projectName="AirBnb Clone"
            />
            <ProjectsTimelineElement
              icon={FaAirbnb}
              aboutProject="Its an airbnb clone made with NextJS, Typescript and
            Tailwind for styling. I have used MongoDB a NoSql database
            to store listings and users. In addition, I have used
            power of NextAuth and implemented Google, Github and
            Credentials authentications."
              imageSrc={ProjectsAirBnb.src}
              projectName="AirBnb Clone"
            />
            <ProjectsTimelineElement
              icon={FaAirbnb}
              aboutProject="Its an airbnb clone made with NextJS, Typescript and
            Tailwind for styling. I have used MongoDB a NoSql database
            to store listings and users. In addition, I have used
            power of NextAuth and implemented Google, Github and
            Credentials authentications."
              imageSrc={ProjectsAirBnb.src}
              projectName="AirBnb Clone"
            />
            <ProjectsTimelineElement
              icon={FaAirbnb}
              aboutProject="Its an airbnb clone made with NextJS, Typescript and
            Tailwind for styling. I have used MongoDB a NoSql database
            to store listings and users. In addition, I have used
            power of NextAuth and implemented Google, Github and
            Credentials authentications."
              imageSrc={ProjectsAirBnb.src}
              projectName="AirBnb Clone"
            />
            <ProjectsTimelineElement
              icon={FaAirbnb}
              aboutProject="Its an airbnb clone made with NextJS, Typescript and
            Tailwind for styling. I have used MongoDB a NoSql database
            to store listings and users. In addition, I have used
            power of NextAuth and implemented Google, Github and
            Credentials authentications."
              imageSrc={ProjectsAirBnb.src}
              projectName="AirBnb Clone"
            />
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};
export default ProjectsTimeline;
