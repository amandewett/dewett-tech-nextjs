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
            initial={{ opacity: 0, rotate: 180 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.5 }}
            style={{ fontSize: "2rem" }}
          >
            <MdDarkMode color="white" />
          </motion.div>
        ) : (
          <motion.div key="sun" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 180 }} transition={{ duration: 0.5 }} style={{ fontSize: "2rem" }}>
            <MdLightMode />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default ThemeSwitchButton;
