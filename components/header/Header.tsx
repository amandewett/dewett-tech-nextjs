import { FC } from "react";
import Image from "next/image";
import { AppLogo, GithubWhite, LinkedIn } from "@/public";
import { NavItem, HeaderTitle, NavLogoItem, MobileNavBar } from "./";
import Link from "next/link";

const Header: FC = () => {
  return (
    <header className="sticky top-0 left-0 right-0 h-14 flex justify-between items-center">
      <div className="flex items-center">
        <Link href="/">
          <div className="rounded-[50%] w-10 h-10 overflow-hidden ml-5 relative">
            <Image
              src={AppLogo}
              alt="logo"
              fill
              style={{ objectFit: "cover" }}
            />
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
            <NavLogoItem
              radius={50}
              href="https://github.com/amandewett?tab=repositories"
            >
              <Image
                src={GithubWhite}
                alt="github logo"
                fill
                style={{ objectFit: "cover" }}
              />
            </NavLogoItem>
            <NavLogoItem radius={0} href="https://linkedin.com/in/amandewett">
              <Image
                src={LinkedIn}
                alt="github logo"
                fill
                style={{ objectFit: "cover" }}
              />
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
