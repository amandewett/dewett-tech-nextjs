"use client";
import { HomeHeaderProps } from "@/utils/appTypes";
import dynamic from "next/dynamic";
const Scramble = dynamic(() => import("@twistezo/react-text-scramble"), {
  ssr: false,
});

const TextScrambler = ({ arrString, className }: HomeHeaderProps) => {
  return <Scramble texts={arrString} className={className} letterSpeed={100} nextLetterSpeed={100} pauseTime={2000} paused={false} />;
};
export default TextScrambler;
