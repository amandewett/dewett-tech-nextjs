"use client";
import { NumbersProps } from "@/utils/appTypes";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { useEffect, useRef } from "react";
import Reveal from "../shared/Reveal";

const Numbers = ({ count, text }: NumbersProps) => {
  const viewRef = useRef<any>();
  const isInView = useInView(viewRef, { once: true });
  const initCount = useMotionValue(0);
  const rounded = useTransform(initCount, Math.round);

  useEffect(() => {
    if (isInView) {
      const animation = animate(initCount, count, {
        duration: 3,
      });

      return animation.stop;
    }
  }, [count, initCount, isInView]);

  return (
    <>
      <AnimatePresence mode="wait">
        <Reveal key="one" willSwipe willSwipeUp={false}>
          <div ref={viewRef} className="flex flex-col items-center">
            <div className="text-6xl lgMonitor:text-5xl laptop:text-3xl tablet:text-2xl phone:text-base font-extrabold flex">
              <motion.div key="two" className="">
                {rounded}
              </motion.div>
              <p>&#43;</p>
            </div>

            <motion.div className="text-2xl lgMonitor:text-xl laptop:text-base tablet:text-sm phone:text-xs phone:font-thin phone:text-center text-slate-300 font-bold">
              {text}
            </motion.div>
          </div>
        </Reveal>
      </AnimatePresence>
    </>
  );
};
export default Numbers;
