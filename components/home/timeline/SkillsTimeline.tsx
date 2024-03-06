"use client";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  TbBrandNextjs,
  TbBrandReact,
  TbBrandRedux,
  TbBrandTypescript,
  TbBrandAws,
  TbBrandDocker,
  TbBrandFirebase,
  TbBrandFlutter,
  TbBrandMongodb,
  TbApi,
  TbBrandMysql,
  TbServer,
  TbBrandNodejs,
  TbBrandTailwind,
} from "react-icons/tb";
import {
  NextJSLogo,
  ReactJSLogo,
  ReduxLogo,
  TypescriptLogo,
  AwsLogo,
  DockerLogo,
  FirebaseLogo,
  FlutterLogo,
  MongoLogo,
  MysqlLogo,
  NestJSLogo,
  NginxLogo,
  NodeJSLogo,
  TailwindLogo,
} from "@/public";
import TimelineElement from "./TimelineElement";
import TimelineImageContainer from "./TimelineImageContainer";

const SkillsTimeline = () => {
  return (
    <div className="mt-5 pl-5 xxlMonitor:mt-10 xxlMonitor:pl-10">
      <VerticalTimeline
        lineColor="#0A66C2"
        layout="1-column-left"
        className="z-10"
      >
        <TimelineElement
          icon={TbBrandNextjs}
          className="bg-appColorWhiteSmoke cursor-pointer rounded-full w-36 h-14 flex justify-center items-center overflow-hidden group transition"
        >
          <TimelineImageContainer src={NextJSLogo.src} />
        </TimelineElement>
        <TimelineElement
          icon={TbBrandReact}
          className="bg-appColorDimBlack cursor-pointer rounded-full w-36 h-14 flex justify-center items-center overflow-hidden group transition"
        >
          <TimelineImageContainer src={ReactJSLogo.src} width={80} />
        </TimelineElement>
        <TimelineElement
          icon={TbBrandRedux}
          className="bg-appColorWhiteSmoke cursor-pointer rounded-full w-36 h-14 flex justify-center items-center overflow-hidden group transition"
        >
          <TimelineImageContainer src={ReduxLogo.src} width={50} />
        </TimelineElement>

        <TimelineElement
          icon={TbBrandFlutter}
          className="bg-appColorWhiteSmoke cursor-pointer rounded-full w-36 h-14 flex justify-center items-center overflow-hidden group transition"
        >
          <TimelineImageContainer src={FlutterLogo.src} width={50} />
        </TimelineElement>
        <TimelineElement
          icon={TbBrandTypescript}
          className="bg-appColorWhiteSmoke cursor-pointer rounded-full w-36 h-14 flex justify-center items-center overflow-hidden group transition"
        >
          <TimelineImageContainer src={TypescriptLogo.src} width={110} />
        </TimelineElement>
        <TimelineElement
          icon={TbBrandDocker}
          className="bg-appColorDimBlack cursor-pointer rounded-full w-36 h-14 flex justify-center items-center overflow-hidden group transition"
        >
          <TimelineImageContainer src={DockerLogo.src} width={55} />
        </TimelineElement>
        <TimelineElement
          icon={TbApi}
          className="bg-appColorDimBlack cursor-pointer rounded-full w-36 h-14 flex justify-center items-center overflow-hidden group transition"
        >
          <TimelineImageContainer src={NestJSLogo.src} width={80} />
        </TimelineElement>
        <TimelineElement
          icon={TbBrandTailwind}
          className="bg-appColorWhiteSmoke cursor-pointer rounded-full w-36 h-14 flex justify-center items-center overflow-hidden group transition"
        >
          <TimelineImageContainer src={TailwindLogo.src} width={90} />
        </TimelineElement>
        <TimelineElement
          icon={TbBrandMysql}
          className="bg-appColorWhiteSmoke cursor-pointer rounded-full w-36 h-14 flex justify-center items-center overflow-hidden group transition"
        >
          <TimelineImageContainer src={MysqlLogo.src} width={80} />
        </TimelineElement>
        <TimelineElement
          icon={TbBrandMongodb}
          className="bg-zinc-100 cursor-pointer rounded-full w-36 h-14 flex justify-center items-center overflow-hidden group transition"
        >
          <TimelineImageContainer src={MongoLogo.src} width={110} />
        </TimelineElement>
        <TimelineElement
          icon={TbBrandFirebase}
          className="bg-appColorDimBlack cursor-pointer rounded-full w-36 h-14 flex justify-center items-center overflow-hidden group transition"
        >
          <TimelineImageContainer src={FirebaseLogo.src} width={130} />
        </TimelineElement>
        <TimelineElement
          icon={TbBrandAws}
          className="bg-appColorWhiteSmoke cursor-pointer rounded-full w-36 h-14 flex justify-center items-center overflow-hidden group transition"
        >
          <TimelineImageContainer src={AwsLogo.src} />
        </TimelineElement>
        <TimelineElement
          icon={TbBrandNodejs}
          className="bg-appColorWhiteSmoke cursor-pointer rounded-full w-36 h-14 flex justify-center items-center overflow-hidden group transition"
        >
          <TimelineImageContainer src={NodeJSLogo.src} width={90} />
        </TimelineElement>
        <TimelineElement
          icon={TbServer}
          className="bg-appColorWhiteSmoke cursor-pointer rounded-full w-36 h-14 flex justify-center items-center overflow-hidden group transition"
        >
          <TimelineImageContainer src={NginxLogo.src} width={55} />
        </TimelineElement>
      </VerticalTimeline>
    </div>
  );
};
export default SkillsTimeline;
