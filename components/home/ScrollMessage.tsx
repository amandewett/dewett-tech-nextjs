"use client";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { CiDesktopMouse2 } from "react-icons/ci";

const ScrollMessage = () => {
  const { scrollY } = useScroll();
  const opacityValue = useTransform(
    scrollY,
    [0, 30, 60, 90, 100],
    [1, 0.8, 0.5, 0.2, 0]
  );
  return (
    <AnimatePresence initial>
      <motion.div
        className="flex flex-col items-center tablet:hidden phone:hidden"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{ opacity: opacityValue }}
        transition={{ delay: 3, type: "tween" }}
      >
        <span className="pb-2 2xl:pb-0">
          <CiDesktopMouse2 size={32} className="text-appPrimaryColor" />
        </span>
        <span className="">Scroll for wonders</span>
      </motion.div>
    </AnimatePresence>
  );
};
export default ScrollMessage;
