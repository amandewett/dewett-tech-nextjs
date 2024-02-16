"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Layout2: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div key="flana">{children}</motion.div>
    </AnimatePresence>
  );
};

export default Layout2;
