"use client";
import { ExperienceCardProps } from "@/utils/appTypes";
import { PiCircleNotchFill } from "react-icons/pi";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "../shared/Reveal";
import useScreenSize from "@/app/hooks/useScreenSize";

const ExperienceCard = ({
  company,
  description,
  duration,
  location,
  position,
  stack,
  isLeft = false,
  isTablet = false,
}: ExperienceCardProps) => {
  const screenSize = useScreenSize();
  isTablet =
    screenSize.width === 0 ? false : screenSize.width <= 767 ? true : false;

  return (
    <>
      <li
        className={`z-10 my-8 first:mt-0 last:mb-0 ${
          isLeft
            ? "mr-[520px] lgMonitor:mr-[470px] laptop:mr-[370px] tablet:ml-[10px] phone:ml-[10px]"
            : "ml-[520px] lgMonitor:ml-[470px] laptop:ml-[370px] tablet:ml-[10px] phone:ml-[10px]"
        }`}
      >
        <Reveal once={false}>
          <div className="flex">
            {isTablet ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.5,
                  type: "smooth",
                  repeatType: "mirror",
                  repeat: Infinity,
                }}
              >
                <PiCircleNotchFill size={28} className="text-appPrimaryColor" />
              </motion.div>
            ) : (
              !isLeft && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    type: "smooth",
                    repeatType: "mirror",
                    repeat: Infinity,
                  }}
                >
                  <PiCircleNotchFill
                    size={28}
                    className="text-appPrimaryColor"
                  />
                </motion.div>
              )
            )}

            <div
              className={`flex flex-col bg-appColorWhiteSmoke bg-opacity-20 rounded-2xl p-5 w-[500px] lgMonitor:w-[450px] laptop:w-[350px] tablet:w-[500px] phone:w-[260px] z-10 ${
                isTablet ? "ml-5" : isLeft ? "mr-5" : "ml-5"
              }`}
            >
              <h3 className="text-appColorWhiteSmoke text-2xl xxlMonitor:text-3xl lgMonitor:text-xl laptop:text-base tablet:text-2xl phone:text-lg font-bold">
                {position}
              </h3>
              <div className="flex flex-row items-end tablet:flex-col laptop:flex-col phone:flex-col tablet:items-start phone:items-start laptop:items-start">
                <h5 className="text-appPrimaryColor font-bold text-lg lgMonitor:text-base laptop:text-sm tablet:text-lg phone:text-base phone:mt-1">
                  {`@${company}`}
                </h5>
                <span className="hidden xxlMonitor:inline xlMonitor:inline lgMonitor:inline">
                  &#44; &#00;
                </span>
                <h5 className="text-appColorWhiteSmoke laptop:mt-1 tablet:mt-1 phone:mt-1 font-medium text-opacity-60 text-base lgMonitor:text-sm laptop:text-xs tablet:text-base phone:text-xs">
                  {`${location}`}
                </h5>
              </div>
              <span className="italic font-medium text-base lgMonitor:text-sm laptop:text-xs tablet:text-base phone:text-sm mt-3">{`(${duration})`}</span>
              {stack && (
                <div className="mt-3 flex flex-row tablet:flex-col phone:flex-col">
                  <h6 className="text-appPrimaryColor w-[20%] laptop:w-[25%] tablet:w-full phone:w-full underline laptop:text-xs phone:text-xs text-sm font-extrabold">
                    Tech stack:
                  </h6>
                  <p className="w-[80%] laptop:w-[75%] lgMonitor:pl-5 phone:font-thin laptop:pl-6 tablet:w-full tablet:text-xs phone:w-full phone:text-xs laptop:text-xs text-sm">
                    {stack}
                  </p>
                </div>
              )}

              {typeof description === "object" && (
                <ul className="mt-5 list-disc text-pretty space-y-2 text-sm tablet:text-sm phone:text-xs phone:p-1 p-3">
                  {description.map((item, index) => {
                    return <li key={`${index}_${item[0]}`}>{item}</li>;
                  })}
                </ul>
              )}

              {typeof description === "string" && (
                <p className="mt-3 text-pretty text-sm tablet:text-sm phone:text-xs phone:p-1">
                  {description}
                </p>
              )}
            </div>
            {isTablet
              ? undefined
              : isLeft && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.5,
                      type: "smooth",
                      repeatType: "mirror",
                      repeat: Infinity,
                    }}
                  >
                    <PiCircleNotchFill
                      size={28}
                      className="text-appPrimaryColor"
                    />
                  </motion.div>
                )}
          </div>
        </Reveal>
      </li>
    </>
  );
};
export default ExperienceCard;
