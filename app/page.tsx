import React from "react";
import HomeHeader from "@/components/home/HomeHeader";
import ScrollMessage from "@/components/home/ScrollMessage";
import Skills from "@/components/home/Skills";
import Reveal from "@/components/shared/Reveal";
import Footer from "@/components/shared/Footer";
import SocialMediaComponent from "@/components/home/SocialMediaComponent";
import HomeHeaderLeft from "@/components/home/HomeHeaderLeft";
import HomeHeaderRight from "@/components/home/HomeHeaderRight";
import WorkWithComponent from "@/components/home/WorkWithComponent";
import { WorldMapVector } from "@/public";
import Image from "next/image";
import Numbers from "@/components/about/Numbers";

const HomePage: React.FC = () => {
  return (
    <>
      <main className="flex flex-col justify-center w-full">
        <section>
          <Reveal>
            <section className="w-full flex flex-col lg:flex-row mt-[3rem] md:mt-[8rem]">
              <HomeHeaderLeft />
              <HomeHeaderRight />
            </section>
          </Reveal>
        </section>
        <ScrollMessage />
        <WorkWithComponent />
      </main>
    </>
  );
};

export default HomePage;
