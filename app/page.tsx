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
          <Reveal>
            <div className="w-screen grid gap-4 md:gap-6 grid-cols-auto-fit">
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
