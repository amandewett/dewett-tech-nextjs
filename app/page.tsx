import React from "react";
import HomeHeader from "@/components/home/HomeHeader";
import ScrollMessage from "@/components/home/ScrollMessage";
import Skills from "@/components/home/Skills";
import Reveal from "@/components/shared/Reveal";
import Footer from "@/components/shared/Footer";
import SocialMediaComponent from "@/components/home/SocialMediaComponent";
import HomeHeaderLeft from "@/components/home/HomeHeaderLeft";
import HomeHeaderRight from "@/components/home/HomeHeaderRight";

const HomePage: React.FC = () => {
  return (
    <>
      <main className="flex flex-col h-[84vh] justify-center w-screen">
        <section>
          <section className="block lg:hidden mt-10 lg:mt-0">
            <SocialMediaComponent />
          </section>
          <Reveal>
            <div className="w-full flex flex-col lg:flex-row mt-[3rem] md:mt-[15rem] lg:mt-0">
              {/* left side */}
              <HomeHeaderLeft />
              {/* right side */}
              <HomeHeaderRight />
            </div>
          </Reveal>
        </section>
        <ScrollMessage />

        {/* <Skills /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default HomePage;
