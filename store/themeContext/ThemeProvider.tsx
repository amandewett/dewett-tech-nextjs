"use client";
import { Theme } from "@/enums/enums";
import { DefaultProps } from "@/utils/appTypes";
import { useState, useEffect } from "react";
import { ThemeContext } from "./context";

const ThemeProvider = ({ children }: DefaultProps) => {
  const [theme, setTheme] = useState<Theme>(Theme.light);

  useEffect(() => {
    //get theme value fro local storage
    const theme = localStorage.getItem("theme");
    if (theme) {
      setTheme(theme === Theme.light ? Theme.light : Theme.dark);
    } else {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(isDark ? Theme.dark : Theme.light);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle(Theme.dark, theme === Theme.dark);
  }, [theme]);

  const toggleTheme = () => {
    localStorage.setItem("theme", theme === Theme.light ? Theme.dark : Theme.light);
    setTheme((oldThemeValue: Theme) => (oldThemeValue === Theme.light ? Theme.dark : Theme.light));
  };

  const defaultValue = {
    theme,
    toggleTheme,
  };

  return <ThemeContext.Provider value={defaultValue}>{children}</ThemeContext.Provider>;
};
export default ThemeProvider;
