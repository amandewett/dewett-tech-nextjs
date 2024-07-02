"use client";
import { AnimatePresence, useIsPresent } from "framer-motion";
import { usePathname } from "next/navigation";
import PageTransition from "@/components/PageTransition";

const PageTransitionLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathName = usePathname();
  const isPresent = useIsPresent();
  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <PageTransition key={pathName} isPresent={isPresent} />
      </AnimatePresence>
      {children}
    </>
  );
};

export default PageTransitionLayout;
