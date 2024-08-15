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

    const targetElement = document.body;

    targetElement.addEventListener("mousemove", mouseMove);
    targetElement.addEventListener("mouseenter", mouseEnter);
    targetElement.addEventListener("mouseleave", mouseLeave);

    return () => {
      targetElement.removeEventListener("mousemove", mouseMove);
      targetElement.removeEventListener("mouseenter", mouseEnter);
      targetElement.removeEventListener("mouseleave", mouseLeave);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <>
          <motion.div
            animate={{ x: mousePosition.x - 17.5, y: mousePosition.y - 17.5 }}
            transition={{ duration: 0.1, type: "tween" }}
            className={`pointer-events-none w-[35px] h-[35px] rounded-[50%] border-solid border-2 border-appLightTextColor dark:border-appDarkTextColor fixed z-50 hidden md:inline`}
          />
          <motion.div
            animate={{ x: mousePosition.x - 2.5, y: mousePosition.y - 2.5 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="pointer-events-none w-[5px] h-[5px] rounded-[50%] bg-appPrimaryColor fixed z-50 hidden md:inline"
          />
        </>
      )}
    </>
  );
};

export default CustomCursor;
