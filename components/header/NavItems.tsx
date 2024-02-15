"use client";
import { FC, PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const NavItems: FC<PropsWithChildren<{ href: string }>> = ({
  children,
  href,
}) => {
  const path = usePathname();
  return (
    <motion.li className={href === `/` ? undefined : `ml-5`}>
      <Link
        href={href}
        className={
          path === href
            ? "underline decoration-2 underline-offset-4 font-bold"
            : "un"
        }
      >
        {children}
      </Link>
    </motion.li>
  );
};

export default NavItems;
