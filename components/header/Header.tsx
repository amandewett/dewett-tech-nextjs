"use client";
import { HireMeLottie } from "@/public";
import { HeaderTitle } from "./";
import ThemeSwitchButton from "./ThemeSwitchButton";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import SocialMediaComponent from "../home/SocialMediaComponent";
import AppLottieContainer from "../shared/AppLottieContainer";

const Header = () => {
  return (
    <header className="w-full">
      <motion.a
        href="mailto:amandewett@gmail.com?subject=Requirement"
        initial={{ display: "none", height: "0px", opacity: 0 }}
        animate={{ display: "flex", height: "auto", opacity: 1 }}
        transition={{ duration: 1, delay: 5 }}
        className="w-full justify-center items-center gradientAnimation text-appDarkBgColor cursor-pointer text-xs sm:text-base md:text-lg"
      >
        <p className="p-1">
          Need a beautiful web or mobile application? <b>Let&apos;s connect!</b>
        </p>
        <AppLottieContainer width="2rem" height="2rem" animationData={HireMeLottie} />
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
      <section className="block lg:hidden ml-[1.4rem] mb-[1rem]">
        <SocialMediaComponent />
      </section>
    </header>
  );
};

export default Header;
