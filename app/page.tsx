import React from "react";
import PageTransition from "@/components/PageTransition";
import { AnimatePresence, motion } from "framer-motion";

const HomePage: React.FC = () => {
  return (
    <main>
      <div>HomePage</div>
      <PageTransition />
    </main>
  );
};

export default HomePage;
