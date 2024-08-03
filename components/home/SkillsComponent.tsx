"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import SkillItemComponent from "./SkillItemComponent";
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

const SkillsComponent = () => {
  return (
    <section className="space-y-12 mt-[10rem] my-[3rem]">
      <Marquee className="cursor-pointer" pauseOnHover loop={0} autoFill speed={25}>
        <ul className="flex">
          <SkillItemComponent text="HTML5" bgColor="e63946" SkillIcon={FaHtml5} />
          <SkillItemComponent text="CSS3" bgColor="219ebc" SkillIcon={FaCss3} />
          <SkillItemComponent text="JavaScript" bgColor="ffb703" SkillIcon={SiJavascript} isLight />
          <SkillItemComponent text="TypeScript" bgColor="023047" SkillIcon={SiTypescript} />
          <SkillItemComponent text="Dart" bgColor="00b4d8" SkillIcon={SiDart} isLight />
          <SkillItemComponent text="Markdown" bgColor="1b263b" SkillIcon={SiMarkdown} />
          <SkillItemComponent text="GraphQL" bgColor="ff006e" SkillIcon={SiGraphql} />
          <SkillItemComponent text="Yaml" bgColor="8338ec" SkillIcon={SiYaml} />
          <SkillItemComponent text="JSON" bgColor="fcf6bd" SkillIcon={SiJson} isLight />
        </ul>
      </Marquee>
      <Marquee className="cursor-pointer" pauseOnHover loop={0} delay={1} direction="right" autoFill>
        <ul className="flex">
          <SkillItemComponent text="AWS" bgColor="fb8500" SkillIcon={FaAws} isLight />
          <SkillItemComponent text="Cloudflare" bgColor="00f5d4" SkillIcon={FaCloudflare} isLight />
          <SkillItemComponent text="Google Cloud" bgColor="00509d" SkillIcon={SiGooglecloud} />
          <SkillItemComponent text="Digital Ocean" bgColor="70e000" SkillIcon={SiDigitalocean} isLight />
          <SkillItemComponent text="Firebase" bgColor="d9ed92" SkillIcon={SiFirebase} isLight />
          <SkillItemComponent text="Vercel" bgColor="003049" SkillIcon={SiVercel} />
          <SkillItemComponent text="GitHub" bgColor="2b2d42" SkillIcon={SiGithub} />
          <SkillItemComponent text="Docker" bgColor="4cc9f0" SkillIcon={SiDocker} isLight />
          <SkillItemComponent text="Jira" bgColor="52b788" SkillIcon={SiJira} isLight />
        </ul>
      </Marquee>
      <Marquee className="cursor-pointer" pauseOnHover loop={0} autoFill speed={25}>
        <ul className="flex">
          <SkillItemComponent text="NextJS" bgColor="0d2d45" SkillIcon={SiNextdotjs} />
          <SkillItemComponent text="React" bgColor="1e96ff" SkillIcon={SiReact} />
          <SkillItemComponent text="React Native" bgColor="06d6a0" SkillIcon={TbBrandReactNative} isLight />
          <SkillItemComponent text="Angular" bgColor="ec4762" SkillIcon={SiAngular} />
          <SkillItemComponent text="NodeJS" bgColor="fca311" SkillIcon={SiNodedotjs} isLight />
          <SkillItemComponent text="Redux" bgColor="606c38" SkillIcon={SiRedux} />
          <SkillItemComponent text="Flutter" bgColor="9bf6ff" SkillIcon={SiFlutter} isLight />
          <SkillItemComponent text="MUI" bgColor="ffc8dd" SkillIcon={SiMui} isLight />
          <SkillItemComponent text="Express" bgColor="fb5607" SkillIcon={SiExpress} />
          <SkillItemComponent text="MySQL" bgColor="003049" SkillIcon={SiMysql} />
          <SkillItemComponent text="PostgreSQL" bgColor="ffb4a2" SkillIcon={SiPostgresql} isLight />
          <SkillItemComponent text="MongoDB" bgColor="06d6a0" SkillIcon={SiMongodb} isLight />
          <SkillItemComponent text="Jest" bgColor="fca311" SkillIcon={SiJest} isLight />
          <SkillItemComponent text="Jenkins" bgColor="457b9d" SkillIcon={SiJenkins} />
          <SkillItemComponent text="Cypress" bgColor="e63946" SkillIcon={SiCypress} />
        </ul>
      </Marquee>
    </section>
  );
};

export default SkillsComponent;
