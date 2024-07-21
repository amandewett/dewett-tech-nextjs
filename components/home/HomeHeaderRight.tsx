"use client";
import LottieAnimation from "../about/LottieAnimation";
import { CodingLottieOne } from "@/public";
import Tilt from "react-parallax-tilt";
import SocialMediaComponent from "./SocialMediaComponent";

const HomeHeaderRight = () => {
  return (
    <div className="w-full flex justify-evenly mt-[4rem] lg:mt-[0rem]">
      <Tilt tiltReverse={true} scale={1.1}>
        <LottieAnimation animationData={CodingLottieOne} className="ml-auto mr-auto p-0 w-[20rem] h-[20rem] md:w-[30rem] md:h-[30rem] lg:w-[28rem] lg:h-[28rem] 2xl:w-[33rem] 2xl:h-[33rem]" />
      </Tilt>
      <section className="self-center fixed right-0 mr-[2.5rem] hidden lg:block">
        <SocialMediaComponent />
      </section>
    </div>
  );
};
export default HomeHeaderRight;
