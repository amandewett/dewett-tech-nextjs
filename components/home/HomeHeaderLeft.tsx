import TextScrambler from "@/components/shared/TextScrambler";
import { FaExternalLinkAlt } from "react-icons/fa";
import Reveal from "../shared/Reveal";
import AppButton from "../shared/AppButton";

const HomeHeaderLeft = () => {
  return (
    <div className="flex w-[90%] flex-col justify-center px-10 ml-auto mr-auto">
      <h3 className="uppercase text-2xl">hi there!,</h3>
      <h1 className="xxlMonitor:text-6xl font-bold mt-2 text-appLightTextColor dark:text-appDarkTextColor">I&#39;m a creative</h1>
      <h1 className="xxlMonitor:text-6xl mt-3 text-appPrimaryColor font-bold overflow-hidden">
        <span>&#60;&#47;</span>
        <TextScrambler arrString={["Frontend", "Backend", "Mobile"]} className="inline-block text-appLightTextColor dark:text-appDarkTextColor" />
        <span>
          <span className="text-appLightTextColor dark:text-appDarkTextColor">&#09;Developer</span>&#62;
        </span>
      </h1>
      <div className="mt-[3rem] xxlMonitor:text-2xl">
        <p>
          A seasoned Full Stack Developer based in <span className="text-appRedColor font-extrabold uppercase">Canada</span>. Who enjoy helping people to make the world a better place through quality
          software.
        </p>
      </div>
    </div>
  );
};
export default HomeHeaderLeft;
