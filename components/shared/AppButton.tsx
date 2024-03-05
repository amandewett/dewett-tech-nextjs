"use client";
import { AnimatePresence, motion, useScroll } from "framer-motion";
const AppButton = ({ label }: any) => {
  return (
    <AnimatePresence initial>
      <motion.div
        className="bg-appPrimaryColor rounded-xl px-4 xxlMonitor:px-5 py-3 xxlMonitor:py-4 xxlMonitor:text-xl font-semibold cursor-pointer hover:shadow-md hover:shadow-slate-950"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 1 } }}
        whileHover={{
          y: -2,
          transition: { delay: 0, duration: 0.2 },
        }}
      >
        {label}
      </motion.div>
    </AnimatePresence>
  );
};
export default AppButton;
