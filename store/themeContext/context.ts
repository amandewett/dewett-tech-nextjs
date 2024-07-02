import { ThemeContextType } from "@/utils/appTypes";
import { createContext, useContext } from "react";

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);
