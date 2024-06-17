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

const Header = () => {
  return (
    <header>
      <motion.a
        href="mailto:amandewett@gmail.com?subject=Requirement"
        initial={{ display: "none", height: "0px", opacity: 0 }}
        animate={{ display: "flex", height: "auto", opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
        className="w-full justify-center items-center gradientAnimation text-appDarkBgColor cursor-pointer"
      >
        <p className="p-1">
          Need a beautiful web or mobile application? <b>Let&apos;s connect!</b>
        </p>
        <LottieAnimation width="2rem" height="2rem" animationData={HireMeLottie} />
      </motion.a>

      <nav className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <Link href="/">
            <HeaderTitle />
          </Link>
        </div>
        <div id="lg-nav" className="block">
          <ul className="flex justify-end rounded-2xl overflow-hidden mr-5 pt-1 pb-1 pl-5 pr-5 backdrop-blur-lg items-center z-0">
            <li className="mx-5">
              <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start items-center p-2 min-w-[8rem] rounded-md gradientButton text-appLightTextColor group">
                <h3 className="transitionBtn">Resume</h3>
                <FaExternalLinkAlt size={12} className="mx-1 transitionBtn group-hover:ml-[2rem]" />
              </motion.button>
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
