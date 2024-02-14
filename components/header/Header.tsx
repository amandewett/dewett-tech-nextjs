import { FC } from "react";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import { NavItem, HeaderTitle } from "./";
import Link from "next/link";

const Header: FC = () => {
  return (
    <header className="sticky top-0 left-0 right-0 h-14 flex justify-between items-center">
      <div className="flex items-center">
        <Link href="/">
          <div className="rounded-[50%] w-10 h-10 overflow-hidden ml-5 relative">
            <Image src={logo} alt="logo" fill style={{ objectFit: "cover" }} />
          </div>
        </Link>

        <HeaderTitle />
      </div>

      <nav>
        <ul className="flex justify-end rounded-2xl overflow-hidden mr-5 pt-1 pb-1 pl-5 pr-5 backdrop-blur-xl">
          <NavItem href="/">Home</NavItem>
          <NavItem href="/projects">Projects</NavItem>
          <NavItem href="/about">About</NavItem>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
