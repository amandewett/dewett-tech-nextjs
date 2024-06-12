"use client";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { GithubWhite, HireMeLottie, LinkedIn } from "@/public";
import { NavItem, HeaderTitle, NavLogoItem, MobileNavBar } from "./";
import Link from "next/link";
import ImageContainer from "../shared/ImageContainer";
import { useTheme } from "@/store/themeContext/context";
import { Theme } from "@/enums/enums";
import ThemeSwitchButton from "./ThemeSwitchButton";
import { motion } from "framer-motion";
import LottieAnimation from "../about/LottieAnimation";

const Header: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header>
      <motion.a
        href="mailto:amandewett@gmail.com?subject=Requirement"
        initial={{ display: "none", height: "0px", opacity: 0 }}
        animate={{ display: "flex", height: "auto", opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="w-full justify-center items-center gradientAnimation text-appDarkBgColor cursor-pointer"
      >
        <p className="p-1">
          Need a beautiful web or mobile application? <b>Let&apos;s connect!</b>
        </p>
        <LottieAnimation width="2rem" height="2rem" animationData={HireMeLottie} />
      </motion.a>
      <div className="sticky top-0 left-0 right-0 h-20 flex justify-between items-center z-[70]">
        <div className="flex items-center">
          <Link href="/">
            <div className="rounded-[50%] w-10 h-10 overflow-hidden ml-5">
              <ImageContainer src="/images/aman_header.png" alt="logo" priority />
            </div>
          </Link>

          <HeaderTitle />
        </div>

        <nav>
          {/* large screen nav bar */}
          <div id="lg-nav" className="block">
            <ul className="flex justify-end rounded-2xl overflow-hidden mr-5 pt-1 pb-1 pl-5 pr-5 backdrop-blur-lg items-center">
              <li className="ml-5">
                <ThemeSwitchButton />
              </li>
              {/* <NavLogoItem radius={50} href="https://github.com/amandewett">
                <ImageContainer src={GithubWhite.src} alt="github logo" priority />
              </NavLogoItem>
              <NavLogoItem radius={0} href="https://linkedin.com/in/amandewett">
                <ImageContainer src={LinkedIn.src} alt="linkedIn logo" priority />
              </NavLogoItem> */}
            </ul>
          </div>
          {/* small screens nav bar */}
          {/* <MobileNavBar /> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
