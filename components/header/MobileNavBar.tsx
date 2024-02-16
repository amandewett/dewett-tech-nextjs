"use client";
import { FC, useState } from "react";
import { MenuIcon, Github, LinkedIn, CloseIcon } from "@/public";
import { motion } from "framer-motion";
import Image from "next/image";
import { NavItem, NavLogoItem } from "./";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNavBar: FC = () => {
  const path = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const handleMenuOnClick = () => setIsMenuOpen((prevValue) => !prevValue);

  return (
    <>
      <div
        id="sm-nav"
        className="block md:hidden mr-5 size-5 cursor-pointer"
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
        <ul className="flex flex-col justify-start w-full h-full items-end p-10">
          <li className="mb-10">
            <img
              src={CloseIcon.src}
              alt="close icon"
              style={{ objectFit: "cover" }}
              className="size-5"
              onClick={handleMenuOnClick}
            />
          </li>
          <li className="mb-5">
            <Link
              href="/"
              onClick={handleMenuOnClick}
              className={
                path === "/"
                  ? "underline decoration-2 underline-offset-4 font-bold"
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
                  ? "underline decoration-2 underline-offset-4 font-bold"
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
                  ? "underline decoration-2 underline-offset-4 font-bold"
                  : "un"
              }
            >
              About
            </Link>
          </li>
          <div className="flex">
            <NavLogoItem
              radius={50}
              href="https://github.com/amandewett?tab=repositories"
            >
              <Image
                src={Github}
                alt="github logo"
                onClick={handleMenuOnClick}
                fill
                style={{ objectFit: "cover" }}
              />
            </NavLogoItem>
            <NavLogoItem radius={0} href="https://linkedin.com/in/amandewett">
              <Image
                src={LinkedIn}
                onClick={handleMenuOnClick}
                alt="github logo"
                fill
                style={{ objectFit: "cover" }}
              />
            </NavLogoItem>
          </div>
        </ul>
      </motion.div>
    </>
  );
};

export default MobileNavBar;
