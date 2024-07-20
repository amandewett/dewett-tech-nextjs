import { AppLottieContainerProps } from "@/utils/appTypes";
import React from "react";
import Lottie, { Options } from "react-lottie";
import Reveal from "./Reveal";

const AppLottieContainer = ({ animationData, className, height = "100%", width = "100%", loop = true }: AppLottieContainerProps) => {
  const defaultOptions: Options = {
    loop: loop,
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

export default AppLottieContainer;
