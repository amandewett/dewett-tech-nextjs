"use client";
import { FC, ReactNode } from "react";
import { motion } from "framer-motion";

type navLogoItem = {
  children: ReactNode;
  radius: number;
  href: string;
};

const NavLogoItem: FC<navLogoItem> = ({ children, radius, href }) => {
  return (
    <a href={href} target="_blank">
      <motion.div
        className={`rounded-[${radius}%] w-6 h-6 overflow-hidden ml-5 relative cursor-pointer`}
        whileHover={{
          scale: 1.1,
          transition: { type: "spring", duration: 0.2, stiffness: 200 },
        }}
      >
        {children}
      </motion.div>
    </a>
  );
};

export default NavLogoItem;
