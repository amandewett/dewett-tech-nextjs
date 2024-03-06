import React from "react";
import HomeHeader from "@/components/home/HomeHeader";
import ScrollMessage from "@/components/home/ScrollMessage";
import Skills from "@/components/home/Skills";
import Reveal from "@/components/shared/Reveal";
import Footer from "@/components/shared/Footer";
// import ParticlesLayout from "@/layouts/ParticlesLayout";
import dynamic from "next/dynamic";
const ParticlesLayout = dynamic(() => import("@/layouts/ParticlesLayout"), {
  ssr: false,
});

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
      <Footer />
      <ParticlesLayout />
    </>
  );
};

export default HomePage;
