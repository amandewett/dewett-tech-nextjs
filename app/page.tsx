import React from "react";
import HomeHeader from "@/components/home/HomeHeader";
import ScrollMessage from "@/components/home/ScrollMessage";
import Skills from "@/components/home/Skills";
import Reveal from "@/components/shared/Reveal";
import Footer from "@/components/shared/Footer";
import SocialMediaComponent from "@/components/home/SocialMediaComponent";

const HomePage: React.FC = () => {
  return (
    <>
      <main>
        <SocialMediaComponent />
        <Reveal>
          <HomeHeader />
        </Reveal>
        <ScrollMessage />
        <Skills />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
