"use client";
import { FC, useState } from "react";
import { MenuIcon, GithubWhite, LinkedIn, CloseIcon } from "@/public";
import { motion } from "framer-motion";
import Image from "next/image";
import { NavLogoItem } from "./";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ImageContainer from "../shared/ImageContainer";

const MobileNavBar: FC = () => {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const handleMenuOnClick = () => setIsMenuOpen((prevValue) => !prevValue);

  return (
    <>
      <div
        id="sm-nav"
        className="block md:hidden mr-5 size-5 cursor-pointer z-[70]"
        onClick={handleMenuOnClick}
      >
        <motion.img
          src={MenuIcon.src}
          alt="menu icon"
          style={{ objectFit: "cover" }}
          animate={{ rotate: isMenuOpen ? -90 : 0 }}
        />
      </div>
      <motion.div
        className="fixed left-0 top-0 bottom-0 w-1/2 h-screen z-[100] rounded-r-xl backdrop-blur-3xl md:hidden"
        initial={false}
        animate={{ x: isMenuOpen ? -40 : -1000 }}
        transition={{ duration: 0.2, type: "spring", stiffness: 40 }}
      >
        <motion.ul
          layout
          className="flex flex-col justify-start w-full h-full items-end p-10"
        >
          <li className="mb-10">
            <div onClick={handleMenuOnClick} className="size-5 cursor-pointer">
              <ImageContainer src={CloseIcon.src} alt="close icon" priority />
            </div>
          </li>
          <li className="mb-5">
            <Link
              href="/"
              onClick={handleMenuOnClick}
              className={
                path === "/"
                  ? "underline decoration-[4px] text-appPrimaryColor underline-offset-4 font-bold"
                  : "un"
              }
            >
              Home
            </Link>
          </li>
          <li className="mb-5">
            <Link
              href="/projects"
              onClick={handleMenuOnClick}
              className={
                path === "/projects"
                  ? "underline decoration-[4px] text-appPrimaryColor underline-offset-4 font-bold"
                  : "un"
              }
            >
              Projects
            </Link>
          </li>
          <li className="mb-5">
            <Link
              href="/about"
              onClick={handleMenuOnClick}
              className={
                path === "/about"
                  ? "underline decoration-[4px] text-appPrimaryColor underline-offset-4 font-bold"
                  : "un"
              }
            >
              About
            </Link>
          </li>
          <li className="mb-5">
            <Link
              href="mailto:amandewett@gmail.com?subject=Requirement"
              onClick={handleMenuOnClick}
              className={
                path === "/contact"
                  ? "underline decoration-[4px] text-appPrimaryColor underline-offset-4 font-bold"
                  : "un"
              }
            >
              Contact
            </Link>
          </li>
          <div className="flex">
            <NavLogoItem
              radius={50}
              href="https://github.com/amandewett?tab=repositories"
            >
              <ImageContainer
                src={GithubWhite.src}
                alt="github logo"
                priority
              />
            </NavLogoItem>
            <NavLogoItem radius={0} href="https://linkedin.com/in/amandewett">
              <ImageContainer src={LinkedIn.src} alt="linkedIn logo" priority />
            </NavLogoItem>
          </div>
        </motion.ul>
      </motion.div>
    </>
  );
};

export default MobileNavBar;
