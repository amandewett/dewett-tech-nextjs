"use client";
import Reveal from "../shared/Reveal";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaAirbnb, FaTwitter, FaYoutube, FaShoppingBag, FaServer, FaRocketchat } from "react-icons/fa";
import { MdOutlineSecurity } from "react-icons/md";
import { ProjectsAirBnb, ProjectsTwitter, ProjectsVideoTube, ProjectsAuth, ProjectsShoppingStore, NestJSLogo, ProjectsChitChat } from "@/public";
import ProjectsTimelineElement from "./ProjectsTimelineElement";

const ProjectsTimeline = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center mt-10">
        <Reveal>
          <h1 className="text-5xl tablet:text-3xl phone:text-2xl font-bold self-center underline decoration-appPrimaryColor decoration-4 underline-offset-2">Sample Projects</h1>
        </Reveal>

        <div className="w-full mt-10 transition-all duration-500">
          <Reveal>
            <VerticalTimeline lineColor="#0A66C2" layout="2-columns" className="z-10 transition-all duration-500">
              <ProjectsTimelineElement
                icon={FaRocketchat}
                aboutProject="This real-time chat application utilizes React for a dynamic user interface and Node.js + Prisma + MongoDB for a robust backend. It enables seamless communication with features like message history and user list. Built with scalability in mind, this project showcases my ability to handle complex web applications."
                imageSrc={ProjectsChitChat.src}
                projectName="Chat App"
                url="https://chitchat.dewett.tech"
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
                url="https://rent.dewett.tech"
              />
              <ProjectsTimelineElement
                icon={FaTwitter}
                aboutProject="Its a twitter clone made with ReactJS, Typescript and
            vanilla CSS for styling. I have used Firebase database
            to store posts."
                imageSrc={ProjectsTwitter.src}
                projectName="Twitter Clone"
                url="https://xyz.dewett.tech"
              />
              <ProjectsTimelineElement
                icon={FaYoutube}
                aboutProject="Its a Youtube clone made with ReactJS, Typescript and
            vanilla CSS for styling. I have used RapidAPI to fetch videos"
                imageSrc={ProjectsVideoTube.src}
                projectName="Youtube Clone"
                url="https://videotube.dewett.tech"
              />
              <ProjectsTimelineElement
                icon={FaShoppingBag}
                aboutProject="It is a e-commerce mobile app made with Flutter. To register user it uses credentials, google and facebook login. Moreover, it supports multiple countries to shop products."
                imageSrc={ProjectsShoppingStore.src}
                projectName="Shopping App (Flutter)"
                url="https://github.com/amandewett/shopping-store-flutter-app"
              />
              <ProjectsTimelineElement
                icon={FaServer}
                aboutProject="A backend application made with NestJS, TypeORM, Mysql and Typescript. It was made to act as server for a flutter mobile application and admin dashboard."
                imageSrc={NestJSLogo.src}
                projectName="Shopping Store (NestJS)"
                url="https://github.com/amandewett/shopping-store-backend"
              />
              <ProjectsTimelineElement
                icon={MdOutlineSecurity}
                aboutProject="Its a simple application to display power of NextJS with NextAuth library. Moreover, it shows how form validations work in NextJS along with auth guard for private routes."
                imageSrc={ProjectsAuth.src}
                projectName="NextJS + NextAuth"
                url="https://nauth.dewett.tech"
              />
            </VerticalTimeline>
          </Reveal>
        </div>
      </div>
    </>
  );
};
export default ProjectsTimeline;
