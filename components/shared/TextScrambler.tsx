"use client";
import { HomeHeaderProps } from "@/utils/appTypes";
import { TypeAnimation } from "react-type-animation";

const TextScrambler = ({ arrString, className }: HomeHeaderProps) => {
  return <TypeAnimation className={className} repeat={Infinity} speed={50} sequence={["Frontend", 1500, "Backend", 1500, "Mobile", 1500]} />;
};
export default TextScrambler;
