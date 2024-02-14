"use client";
import { FC, PropsWithChildren } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavItems: FC<PropsWithChildren<{ href: string }>> = ({
  children,
  href,
}) => {
  const path = usePathname();
  return (
    <li className={href === `/` ? undefined : `ml-5`}>
      <Link
        href={href}
        className={path === href ? "underline underline-offset-2" : ""}
      >
        {children}
      </Link>
    </li>
  );
};

export default NavItems;
