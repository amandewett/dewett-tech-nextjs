"use client";
import { AiRobo as Robot } from "@/public";
import Tilt from "react-parallax-tilt";
import SocialMediaComponent from "./SocialMediaComponent";
import ImageContainer from "../shared/ImageContainer";

const HomeHeaderRight = () => {
  return (
    <div className="w-full flex justify-evenly mt-[4rem] lg:mt-[0rem]">
      <Tilt tiltReverse={true} scale={1.1}>
        <ImageContainer src={Robot.src} alt="robot" className="w-[25rem] h-[25rem] md:w-[30rem] md:h-[30rem] xl:w-[35rem] xl:h-[35rem]" priority />
      </Tilt>
      <section className="self-center right-0 mr-[2.5rem] hidden lg:block">
        <SocialMediaComponent />
      </section>
    </div>
  );
};
export default HomeHeaderRight;
