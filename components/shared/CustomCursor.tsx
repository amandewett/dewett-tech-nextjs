"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaBedPulse } from "react-icons/fa6";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
    isPointer: false,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const style = getComputedStyle(target);

      setMousePosition({
        x: e.clientX,
        y: e.clientY,
        isPointer: style.cursor === "pointer",
      });
    };

    const mouseEnter = (e: MouseEvent) => {
      setIsVisible(true);
    };

    const mouseLeave = (e: MouseEvent) => {
      setIsVisible(false);
    };

    if (window) {
      window.addEventListener("mousemove", mouseMove);
      window.addEventListener("mouseenter", mouseEnter);
      window.addEventListener("mouseleave", mouseLeave);

      document.addEventListener("mouseenter", mouseEnter);
      document.addEventListener("mouseleave", mouseLeave);
    }

    return () => {
      if (window) {
        window.removeEventListener("mousemove", mouseMove);
        window.removeEventListener("mouseenter", mouseEnter);
        window.removeEventListener("mouseleave", mouseLeave);

        document.removeEventListener("mouseenter", mouseEnter);
        document.removeEventListener("mouseleave", mouseLeave);
      }
    };
  }, []);

  return (
    <>
      {isVisible && (
        <>
          <motion.div
            animate={{ x: mousePosition.x - 17.5, y: mousePosition.y - 17.5 }}
            transition={{ duration: 0.1, type: "tween" }}
            className={`pointer-events-none w-[35px] h-[35px] rounded-[50%] border-solid border-2 border-appLightTextColor dark:border-appDarkTextColor fixed z-50`}
          />
          <motion.div
            animate={{ x: mousePosition.x - 2.5, y: mousePosition.y - 2.5 }}
            transition={{ duration: 0, type: "spring", stiffness: 100 }}
            className="pointer-events-none w-[5px] h-[5px] rounded-[50%] bg-appPrimaryColor fixed z-50"
          />
        </>
      )}
    </>
  );
};

export default CustomCursor;
