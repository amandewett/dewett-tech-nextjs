import React from "react";
import HomeHeader from "@/components/home/HomeHeader";
import ScrollMessage from "@/components/home/ScrollMessage";
import Skills from "@/components/home/Skills";
import Reveal from "@/components/shared/Reveal";

const HomePage: React.FC = () => {
  return (
    <>
      <main>
        <Reveal>
          <HomeHeader />
        </Reveal>
        <ScrollMessage />
        <Skills />
      </main>
    </>
  );
};

export default HomePage;
