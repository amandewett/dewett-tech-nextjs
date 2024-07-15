"use client";
import Lottie, { Options } from "react-lottie";
import Reveal from "../shared/Reveal";
import { LottieAnimationProps } from "@/utils/appTypes";

const LottieAnimation = ({ animationData, className, height = "100%", width = "100%" }: LottieAnimationProps) => {
  const defaultOptions: Options = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      className: "p-0",
    },
  };

  return (
    <Reveal>
      <div className={className}>
        <Lottie options={defaultOptions} height={height} width={width} isClickToPauseDisabled />
      </div>
    </Reveal>
  );
};
export default LottieAnimation;
