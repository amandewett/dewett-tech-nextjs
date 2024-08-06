"use client";

import React from "react";
import AppLottieContainer from "../shared/AppLottieContainer";
import { MonitorsLottie } from "@/public";
import TechStackItemComponent from "./TechStackItemComponent";
import { FaHtml5, FaCss3, FaAws, FaCloudflare, FaDatabase } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiDart,
  SiMarkdown,
  SiGraphql,
  SiYaml,
  SiJson,
  SiGooglecloud,
  SiDigitalocean,
  SiFirebase,
  SiVercel,
  SiGithub,
  SiNextdotjs,
  SiReact,
  SiAngular,
  SiNodedotjs,
  SiRedux,
  SiFlutter,
  SiMui,
  SiExpress,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiJest,
  SiCypress,
  SiJenkins,
  SiDocker,
  SiJira,
  SiTailwindcss,
  SiBootstrap,
  SiChakraui,
  SiSass,
  SiPostcss,
  SiAmazondynamodb,
  SiGithubactions,
  SiGit,
  SiGitlab,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import SectionHeading from "./SectionHeading";

const TechStackComponent = () => {
  return (
    <section className="flex justify-around items-center my-[2rem]">
      <section className="hidden lg:inline">
        <AppLottieContainer animationData={MonitorsLottie} className="w-[70%] h-[70%]" />
      </section>
      <ul className="self-start w-[100%] lg:w-[50%] p-2 flex flex-col items-center space-y-3">
        <li>
          <SectionHeading>Tech Stack</SectionHeading>
        </li>
        <TechStackItemComponent
          heading="Languages"
          arrItems={["JavaScript", "TypeScript", "HTML5", "CSS3", "Dart", "Markdown", "GraphQL"]}
          arrColors={["f7df1e", "2F74C0", "E34F26", "1572B6", "00B4AB", "333", "E10098"]}
          arrIsLight={[true, false, false, false, true, false, false]}
          arrIcons={[SiJavascript, SiTypescript, FaHtml5, FaCss3, SiDart, SiMarkdown, SiGraphql]}
        />
        <TechStackItemComponent
          heading="Frameworks/Library"
          arrItems={["React", "React Native", "NextJS", "Angular", "Flutter"]}
          arrColors={["61DAFB", "61DAFB", "000", "DD0031", "02569B"]}
          arrIsLight={[true, true, false, false, false]}
          arrIcons={[SiReact, TbBrandReactNative, SiNextdotjs, SiAngular, SiFlutter]}
        />
        <TechStackItemComponent
          heading="CSS Frameworks/Libraries/Pre-processors"
          arrItems={["TailwindCSS", "Bootstrap", "MUI", "Chakra UI", "SASS", "PostCSS"]}
          arrColors={["38BDF8", "563D7C", "007FFF", "03A9F4", "CC6699", "DD3A0A"]}
          arrIsLight={[true, false, false, true, false, false]}
          arrIcons={[SiTailwindcss, SiBootstrap, SiMui, SiChakraui, SiSass, SiPostcss]}
        />
        <TechStackItemComponent
          heading="Databases"
          arrItems={["MySQL", "MongoDB", "PostgreSQL", "Firebase", "DynamoDB", "AWS RDS"]}
          arrColors={["4479A1", "47A248", "4169E1", "FFCA28", "4053D7", "FF9900"]}
          arrIsLight={[false, false, false, true, false, true]}
          arrIcons={[SiMysql, SiMongodb, SiPostgresql, SiFirebase, SiAmazondynamodb, FaDatabase]}
        />
        <TechStackItemComponent
          heading="Backend"
          arrItems={["NodeJS", "ExpressJS", "NextJS"]}
          arrColors={["339933", "339933", "000"]}
          arrIsLight={[false, false, false]}
          arrIcons={[SiNodedotjs, SiExpress, SiNextdotjs]}
        />
        <TechStackItemComponent
          heading="DevOps tools"
          arrItems={["Jenkins", "GitHubActions", "Docker"]}
          arrColors={["3498DB", "2088FF", "2496ED"]}
          arrIsLight={[false, false, false]}
          arrIcons={[SiJenkins, SiGithubactions, SiDocker]}
        />
        <TechStackItemComponent
          heading="Version Control"
          arrItems={["Git", "GitHub", "GitLab"]}
          arrColors={["F05032", "24292E", "FC6D26"]}
          arrIsLight={[false, false, false]}
          arrIcons={[SiGit, SiGithub, SiGitlab]}
        />
      </ul>
    </section>
  );
};

export default TechStackComponent;
