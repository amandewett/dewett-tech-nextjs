import React from "react";
import ScrollMessage from "@/components/home/ScrollMessage";
import Reveal from "@/components/shared/Reveal";
import HomeHeaderLeft from "@/components/home/HomeHeaderLeft";
import HomeHeaderRight from "@/components/home/HomeHeaderRight";
import WorkWithComponent from "@/components/home/WorkWithComponent";
import SkillsComponent from "@/components/home/SkillsComponent";
import TechStackComponent from "@/components/home/TechStackComponent";

const HomePage: React.FC = () => {
  return (
    <>
      <main className="flex flex-col justify-center w-full">
        <section>
          <Reveal>
            <section className="w-full flex flex-col lg:flex-row mt-[3vh] md:mt-[12vh]">
              <HomeHeaderLeft />
              <HomeHeaderRight />
            </section>
          </Reveal>
        </section>
        <ScrollMessage />
        <WorkWithComponent />
        <SkillsComponent />
        <Reveal willSwipeUp once={false}>
          <TechStackComponent />
        </Reveal>
      </main>
    </>
  );
};

export default HomePage;
