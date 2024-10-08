import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/store/themeContext/context";
import { Theme } from "@/enums/enums";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const ThemeSwitchButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div onClick={() => toggleTheme()} style={{ cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <AnimatePresence mode="wait" initial={false}>
        {theme === Theme.dark ? (
          <motion.div
            key="moon"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: "tween", duration: 0.4, ease: "linear" }}
            className="text-appLightBgColor text-[1.5rem] sm:text-[2rem]"
          >
            <MdDarkMode />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: "tween", duration: 0.4, ease: "linear" }}
            className="text-appDarkBgColor text-[1.5rem] sm:text-[2rem]"
          >
            <MdLightMode />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default ThemeSwitchButton;
