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

const HomePage: React.FC = () => {
  return (
    <>
      <main className="flex flex-col justify-center w-screen">
        <section>
          <Reveal>
            <section className="w-full flex flex-col lg:flex-row mt-[3rem] md:mt-[5rem]">
              <section className="block lg:hidden ml-[2.4rem] mb-[1rem]">
                <SocialMediaComponent />
              </section>
              {/* left side */}
              <HomeHeaderLeft />
              {/* right side */}
              <HomeHeaderRight />
            </section>
          </Reveal>
        </section>
        <ScrollMessage />
        <WorkWithComponent />
        {/* <Skills /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default HomePage;
