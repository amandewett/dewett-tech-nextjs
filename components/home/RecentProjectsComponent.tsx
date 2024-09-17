import React from "react";
import SectionHeading from "./SectionHeading";
import RecentProjectsItemComponent from "./RecentProjectsItemComponent";
import { CiChat1, CiShop, CiShoppingCart, CiYoutube } from "react-icons/ci";
import { FaAirbnb } from "react-icons/fa";
import { MdOutlineRealEstateAgent } from "react-icons/md";

const RecentProjectsComponent = () => {
  return (
    <section className="px-8 flex flex-col justify-center mt-16">
      <SectionHeading>Projects</SectionHeading>
      <ul className="recent-projects-grid my-16">
        <RecentProjectsItemComponent
          projectName="Real Estate Investment Platform (Angular)"
          projectDescription="Led the development of a real estate SaaS platform using AngularJS, Node.js, and MySQL, achieving 99.9% uptime and supporting 1,000+ concurrent users. Reduced decision-making time by 30%, increasing investment efficiency by 20%."
          projectIcon={MdOutlineRealEstateAgent}
        />
        <RecentProjectsItemComponent
          projectName="E-commerce Platform (ReactJS)"
          projectDescription="Developed a high-performance e-commerce platform with ReactJS and PostgreSQL, boosting site speed by 30% and increasing sales by 20%. Integrated Stripe for payments and improved customer retention by 25% using Google Analytics."
          projectIcon={CiShop}
        />
        <RecentProjectsItemComponent
          projectName="Chat App (ReactJS)"
          projectDescription="This real-time chat application utilizes React for a dynamic user interface and Node.js + Prisma + MongoDB for a robust backend. It enables seamless communication with features like
            message history and user list. Built with scalability in mind, this project showcases my ability to handle complex web applications."
          link="https://chitchat.dewett.ca"
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
          link="https://rent.dewett.ca"
          projectIcon={FaAirbnb}
        />
        <RecentProjectsItemComponent
          projectName="Youtube Clone (ReactJS)"
          projectDescription="Its a Youtube clone made with ReactJS, Typescript and vanilla CSS for styling. I have used RapidAPI to fetch videos."
          link="https://videotube.dewett.ca"
          projectIcon={CiYoutube}
        />
      </ul>
    </section>
  );
};

export default RecentProjectsComponent;
