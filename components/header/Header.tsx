"use client";
import { GithubWhite, HireMeLottie, LinkedIn } from "@/public";
import { NavItem, HeaderTitle, NavLogoItem, MobileNavBar } from "./";
import Link from "next/link";
import ImageContainer from "../shared/ImageContainer";
import { useTheme } from "@/store/themeContext/context";
import { Theme } from "@/enums/enums";
import ThemeSwitchButton from "./ThemeSwitchButton";
import { motion } from "framer-motion";
import LottieAnimation from "../about/LottieAnimation";
import { FaExternalLinkAlt } from "react-icons/fa";
import useScreenSize from "@/app/hooks/useScreenSize";

const Header = () => {
  const { width, height } = useScreenSize();

  return (
    <header>
      <motion.a
        href="mailto:amandewett@gmail.com?subject=Requirement"
        initial={{ display: "none", height: "0px", opacity: 0 }}
        animate={{ display: "flex", height: "auto", opacity: 1 }}
        transition={{ duration: 0.5, delay: 6 }}
        className="w-screen justify-center items-center gradientAnimation text-appDarkBgColor cursor-pointer text-xs sm:text-base md:text-lg"
      >
        <p className="p-1">
          Need a beautiful web or mobile application? <b>Let&apos;s connect!</b>
        </p>
        <LottieAnimation width="2rem" height="2rem" animationData={HireMeLottie} />
        {/* {`w: ${width} h: ${height}`} */}
      </motion.a>

      <nav className="flex justify-between items-center p-4">
        <HeaderTitle />
        <div id="lg-nav" className="block">
          <ul className="flex justify-end overflow-hidden backdrop-blur-lg items-center">
            <li>
              <motion.a
                href="/resume/Resume.pdf"
                target="_blank"
                download
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start items-center p-2 min-w-[6em] sm:min-w-[8rem] rounded-md gradientButton text-appLightTextColor group"
              >
                <h3 className="transitionBtn text-sm font-semibold">Resume</h3>
                <FaExternalLinkAlt size={12} className="mx-1 transitionBtn group-hover:ml-[1rem] md:group-hover:ml-[2rem]" />
              </motion.a>
            </li>
            <li className="ml-5">
              <ThemeSwitchButton />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
