"use client";
import LottieAnimation from "../about/LottieAnimation";
import { CodingLottieOne } from "@/public";
import Tilt from "react-parallax-tilt";
import SocialMediaComponent from "./SocialMediaComponent";

const HomeHeaderRight = () => {
  return (
    <div className="w-full px-0 ml-auto mr-auto flex justify-evenly mt-[6rem] lg:mt-[0rem]">
      <Tilt tiltReverse={true} scale={1.1}>
        <LottieAnimation animationData={CodingLottieOne} className="ml-auto mr-auto p-0 z-10 2xl:w-[35rem] 2xl:h-[35rem] xl:w-[28rem] xl:h-[28rem]" />
      </Tilt>
      <SocialMediaComponent />
    </div>
  );
};
export default HomeHeaderRight;
