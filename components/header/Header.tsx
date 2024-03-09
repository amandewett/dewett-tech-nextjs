import { FC } from "react";
import Image from "next/image";
import { GithubWhite, LinkedIn, Aman1 } from "@/public";
import { NavItem, HeaderTitle, NavLogoItem, MobileNavBar } from "./";
import Link from "next/link";
import ImageContainer from "../shared/ImageContainer";

const Header: FC = () => {
  return (
    <header className="sticky top-0 left-0 right-0 h-14 flex justify-between items-center z-[70]">
      <div className="flex items-center">
        <Link href="/">
          <div className="rounded-[50%] w-10 h-10 overflow-hidden ml-5">
            <ImageContainer src="/images/aman_header.jpg" alt="logo" priority />
          </div>
        </Link>

        <HeaderTitle />
      </div>

      <nav>
        {/* large screen nav bar */}
        <div id="lg-nav" className="hidden md:block">
          <ul className="flex justify-end rounded-2xl overflow-hidden mr-5 pt-1 pb-1 pl-5 pr-5 backdrop-blur-lg items-center">
            <NavItem href="/">Home</NavItem>
            <NavItem href="/projects">Projects</NavItem>
            <NavItem href="/about">About</NavItem>
            <li className="ml-5">
              <a
                href="mailto:amandewett@gmail.com?subject=Requirement"
                className="un underline-offset-3 decoration-[4px]"
              >
                Contact
              </a>
            </li>
            <NavLogoItem radius={50} href="https://github.com/amandewett">
              <ImageContainer
                src={GithubWhite.src}
                alt="github logo"
                priority
              />
            </NavLogoItem>
            <NavLogoItem radius={0} href="https://linkedin.com/in/amandewett">
              <ImageContainer src={LinkedIn.src} alt="linkedIn logo" priority />
            </NavLogoItem>
          </ul>
        </div>
        {/* small screens nav bar */}
        <MobileNavBar />
      </nav>
    </header>
  );
};

export default Header;
