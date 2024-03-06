"use client";
import { Props, RevealProps } from "@/utils/appTypes";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";

const Reveal = ({ children, willSwipe, willSwipeUp = true }: RevealProps) => {
  const viewRef = useRef<any>();
  const isInView = useInView(viewRef, { once: true });
  const animationControl = useAnimation();
  const swipeControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      animationControl.start("visible");
      swipeControl.start("visible");
    }
    /* else {
      animationControl.start("hidden");
      swipeControl.start("hidden");
    } */
  }, [isInView, animationControl, swipeControl]);

  return (
    <>
      <div ref={viewRef} className="relative">
        <AnimatePresence mode="sync" initial={true}>
          {!willSwipeUp && <div>{children}</div>}
          {willSwipeUp && (
            <motion.div
              key="slide-up"
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              animate={animationControl}
              transition={{ duration: 0.5, delay: 0.25 }}
            >
              {children}
            </motion.div>
          )}
          {willSwipe && (
            <motion.div
              key="slide-left"
              className="absolute top-0 bottom-0 left-0 right-0 z-20 bg-[#1E3A8A]"
              variants={{
                hidden: { left: 0 },
                visible: { left: "100%" },
              }}
              initial="hidden"
              animate={swipeControl}
              transition={{
                duration: 0.4,
                ease: "easeIn",
              }}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
export default Reveal;
