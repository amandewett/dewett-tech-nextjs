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
            ? "underline decoration-[4px] text-appPrimaryColor underline-offset-4 font-extrabold"
            : "un underline-offset-4 decoration-[4px]"
        }
      >
        {children}
      </Link>
    </motion.li>
  );
};

export default NavItems;
