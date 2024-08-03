"use client";

import React from "react";
import AppLottieContainer from "../shared/AppLottieContainer";
import { MonitorsLottie } from "@/public";
import TechStackItemComponent from "./TechStackItemComponent";
import { FaHtml5, FaCss3, FaAws, FaCloudflare } from "react-icons/fa";
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
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";

const TechStackComponent = () => {
  return (
    <section className="flex justify-around items-center my-[2rem]">
      <section>
        <AppLottieContainer animationData={MonitorsLottie} className="w-[70%] h-[70%]" />
      </section>
      <section className="self-start w-[50%] flex flex-col items-center">
        <h2 className="uppercase text-4xl font-bold">Tech Stack:</h2>
        <section>
          <TechStackItemComponent
            heading="Languages"
            arrItems={["JavaScript", "TypeScript", "HTML5", "CSS3", "Dart", "Markdown"]}
            arrIcons={[SiJavascript, SiTypescript, FaHtml5, FaCss3, SiDart, SiMarkdown]}
          />
        </section>
      </section>
    </section>
  );
};

export default TechStackComponent;
