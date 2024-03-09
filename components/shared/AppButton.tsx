"use client";
import { AppButtonProps } from "@/utils/appTypes";
import { AnimatePresence, motion } from "framer-motion";

const AppButton = ({ children, onClick, revert }: AppButtonProps) => {
  return (
    <AnimatePresence initial>
      <motion.div
        className={`rounded-xl xxlMonitor:text-xl font-semibold cursor-pointer hover:shadow-md hover:shadow-slate-950 transition text-center w-28 h-14 phone:w-24 phone:h-12 flex items-center justify-center ${
          revert
            ? "bg-appColorWhiteSmoke text-appPrimaryColor"
            : "bg-appPrimaryColor text-appColorWhiteSmoke"
        }`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { delay: 1 } }}
        whileHover={{
          y: -2,
          transition: { delay: 0, duration: 0.2 },
        }}
        onClick={onClick}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
export default AppButton;
