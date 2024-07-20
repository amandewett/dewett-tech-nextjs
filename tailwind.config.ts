import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "selector",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        appLightBgColor: "#F0F8FF",
        appLightTextColor: "#242124",

        appColorWhiteSmoke: "#F5F5F5",
        appColorDimBlack: "#252525",
        appRedColor: "#E53935",
        appPrimaryColor: "#00C49A",
        appSecondaryColor: "#FB8F67",
        //dark
        appDarkBgColor: "#242124",
        appDarkTextColor: "#F0F8FF",
      },
      fontFamily: {
        appFont: [`var(--app-font)`],
      },
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(500px, 1fr))",
      },
    },
    screens: {
      phone: { min: "350px", max: "639px" },
      // => @media (min-width: 350px and max-width: 639px) { ... }

      tablet: { min: "640px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      laptop: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lgMonitor: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xlMonitor: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      xxlMonitor: { min: "1536px" },
      // => @media (min-width: 1536px) { ... }
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
export default config;
