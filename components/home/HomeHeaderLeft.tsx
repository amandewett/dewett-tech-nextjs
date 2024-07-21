import TextScrambler from "@/components/shared/TextScrambler";
import { FaCanadianMapleLeaf, FaExternalLinkAlt } from "react-icons/fa";
import Reveal from "../shared/Reveal";
import AppButton from "../shared/AppButton";

const HomeHeaderLeft = () => {
  return (
    <div className="flex w-[90%] flex-col justify-center px-10 ml-auto mr-auto">
      <h3 className="uppercase md:text-2xl">hi there!,</h3>
      <h1 className="xl:text-5xl sm:text-3xl font-bold mt-2 text-appLightTextColor dark:text-appDarkTextColor">I&#39;m Aman Dewett</h1>
      <h1 className="xl:text-5xl sm:text-3xl mt-3 text-appPrimaryColor font-bold overflow-hidden">
        <span>&#60;&#47;</span>
        <TextScrambler arrString={["Frontend", "Backend", "Mobile"]} className="inline-block text-appLightTextColor dark:text-appDarkTextColor" />
        <span>
          <span className="text-appLightTextColor dark:text-appDarkTextColor">&#09;Developer</span>&#62;
        </span>
      </h1>
      <section className="mt-[3rem] xl:text-2xl sm:text-xl">
        <p>
          An experienced software developer based in
          <span className="font-extrabold uppercase inline">
            &nbsp;Canada&nbsp;
            <FaCanadianMapleLeaf className="inline text-appRedColor mb-[0.6rem]" />
          </span>
          . Who enjoy helping people to make the world a better place through quality software.
        </p>
      </section>
    </div>
  );
};
export default HomeHeaderLeft;
