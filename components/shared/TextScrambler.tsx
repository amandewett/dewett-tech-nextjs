"use client";
import { HomeHeaderProps } from "@/utils/appTypes";
import { TypeAnimation } from "react-type-animation";

const TextScrambler = ({ arrString, className }: HomeHeaderProps) => {
  return <TypeAnimation className={className} repeat={Infinity} speed={50} sequence={["Frontend", 2500, "Backend", 2500, "Mobile", 2500]} />;
};
export default TextScrambler;
