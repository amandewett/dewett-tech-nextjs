"use client";
import LottieAnimation from "../about/LottieAnimation";
import { CodingLottieOne } from "@/public";
import Tilt from "react-parallax-tilt";
import SocialMediaComponent from "./SocialMediaComponent";

const HomeHeaderRight = () => {
  return (
    <div className="w-full px-0 ml-auto mr-auto flex justify-evenly">
      <Tilt tiltReverse={true} scale={1.1}>
        <LottieAnimation
          animationData={CodingLottieOne}
          className="ml-auto mr-auto p-0 z-10 xxlMonitor:w-[550px] xxlMonitor:h-[550px] m-0 xlMonitor:w-[450px] xlMonitor:h-[450px] lgMonitor:w-[400px] lgMonitor:h-[400px] laptop:w-[400px] laptop:h-[400px] tablet:w-[350px] tablet:h-[350px] phone:w-[300px] phone:h-[300px]"
        />
      </Tilt>
      <SocialMediaComponent />
    </div>
  );
};
export default HomeHeaderRight;
