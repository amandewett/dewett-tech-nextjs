"use client";
import { NumbersProps } from "@/utils/appTypes";
import { motion, useMotionValue, useTransform, animate, useInView, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";
import Reveal from "../shared/Reveal";

const CounterComponent = ({ count, text }: NumbersProps) => {
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
        <Reveal key="one" willSwipeUp={false}>
          <div ref={viewRef} className="flex flex-col items-center">
            <div className="font-extrabold flex text-2xl md:text-4xl lg:text-3xl xl:text-5xl">
              <motion.div key="two">{rounded}</motion.div>
              <p>&#43;</p>
            </div>
            <motion.p className="text-sm md:text-xl lg:text-xl xl:text-2xl font-semibold">{text}</motion.p>
          </div>
        </Reveal>
      </AnimatePresence>
    </>
  );
};
export default CounterComponent;
