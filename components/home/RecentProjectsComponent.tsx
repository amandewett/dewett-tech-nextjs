import React from "react";
import SectionHeading from "./SectionHeading";
import AppCardComponent from "../shared/AppCardComponent";
import RecentProjectsItemComponent from "./RecentProjectsItemComponent";
import { CiChat1, CiShoppingCart, CiYoutube } from "react-icons/ci";
import { FaAirbnb } from "react-icons/fa";

const RecentProjectsComponent = () => {
  return (
    <section className="px-8 flex flex-col justify-center mt-16">
      <SectionHeading>Recent Projects</SectionHeading>
      <ul className="recent-projects-grid my-16">
        <RecentProjectsItemComponent
          projectName="Chat App (ReactJS)"
          projectDescription="This real-time chat application utilizes React for a dynamic user interface and Node.js + Prisma + MongoDB for a robust backend. It enables seamless communication with features like
            message history and user list. Built with scalability in mind, this project showcases my ability to handle complex web applications."
          link="https://chitchat.dewett.tech"
          projectIcon={CiChat1}
        />
        <RecentProjectsItemComponent
          projectName="Shopping App (Flutter)"
          projectDescription="It is a e-commerce mobile app made with Flutter. To register user it uses credentials, google and facebook login. Moreover, it supports multiple countries to shop products."
          link="https://github.com/amandewett/shopping-store-flutter-app"
          projectIcon={CiShoppingCart}
        />
        <RecentProjectsItemComponent
          projectName="Shopping Store Backend (NestJS)"
          projectDescription="A backend application made with NestJS, TypeORM, Mysql and Typescript. It was made to act as server for a flutter mobile application and admin dashboard."
          link="https://github.com/amandewett/shopping-store-backend"
          projectIcon={CiShoppingCart}
        />
        <RecentProjectsItemComponent
          projectName="AirBnb Clone (NextJS)"
          projectDescription="Its an airbnb clone made with NextJS, Typescript and
            Tailwind for styling. I have used MongoDB a NoSql database
            to store listings and users. In addition, I have used
            power of NextAuth and implemented Google, Github and
            Credentials authentications."
          link="https://rent.dewett.tech"
          projectIcon={FaAirbnb}
        />
        <RecentProjectsItemComponent
          projectName="Youtube Clone (ReactJS)"
          projectDescription="Its a Youtube clone made with ReactJS, Typescript and vanilla CSS for styling. I have used RapidAPI to fetch videos."
          link="https://videotube.dewett.tech"
          projectIcon={CiYoutube}
        />
      </ul>
    </section>
  );
};

export default RecentProjectsComponent;
