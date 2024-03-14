import TextScrambler from "@/components/shared/TextScrambler";
import ImageCarousel from "../shared/ImageCarousel";
import {
  VectorTwo,
  VectorThree,
  VectorFive,
  VectorSix,
  VectorSeven,
  VectorEight,
  VectorNine,
  VectorTen,
  CodingLottieOne,
  CodingLottieTwo,
} from "@/public";
import ImageContainer from "../shared/ImageContainer";
import AppButton from "../shared/AppButton";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import LottieAnimation from "../about/LottieAnimation";
import Reveal from "../shared/Reveal";

const HomeHeader = () => {
  const arrCarouselImages = [
    VectorTwo,
    // VectorThree,
    // VectorFive,
    VectorSix,
    // VectorSeven,
    VectorEight,
    VectorNine,
    // VectorTen,
  ];

  return (
    <>
      <div
        key="homeHeader"
        className="w-full h-[80vh] xxlMonitor:h-[85vh] lgMonitor:h-[85vh] laptop:h-[85vh] flex flex-row pt-20 xxlMonitor:pt-40 tablet:flex-col phone:flex-col tablet:items-center phone:items-center"
      >
        {/* left side */}
        <div className="flex w-[40%] flex-col pl-20 tablet:w-[100%] phone:w-[100%] tablet:p-10 laptop:p-12 phone:p-5">
          <h3 className="uppercase text-slate-300/90 text-xl xxlMonitor:text-2xl tablet:text-xl phone:text-lg">
            hi there
          </h3>
          <h1 className="text-white text-4xl xxlMonitor:text-6xl laptop:text-2xl tablet:text-xl phone:text-lg mt-2">
            I&#39;m{" "}
            <span className="font-extrabold phone:font-bold">Aman Dewett</span>
          </h1>

          <h1 className="text-3xl xxlMonitor:text-5xl laptop:text-2xl tablet:text-2xl phone:text-xl mt-3 h-14 xxlMonitor:h-20 text-appPrimaryColor font-bold overflow-hidden">
            <span>&#60;&#47;</span>
            <TextScrambler
              arrString={["Frontend", "Backend", "Mobile"]}
              className="inline-block text-white"
            />
            <span>
              <span className="text-white">&#09;Developer</span>&#62;
            </span>
          </h1>
          <div className="mt-3 text-base text-pretty xxlMonitor:text-xl tablet:text-lg phone:text-base">
            <p>
              I&#39;m a Full stack developer based in{" "}
              <span className="text-appRedColor font-bold">Canada</span>. I
              enjoy helping people make the world a better place through quality
              softwares.
            </p>
          </div>
          {/* buttons */}

          <div className="self-end phone:self-center laptop:self-center tablet:self-center pt-8 xxlMonitor:pt-12 z-10 flex flex-row mr-10 laptop:m-0">
            <a href="/resume/Resume.pdf" target="_blank" download>
              <Reveal>
                <AppButton revert>
                  <div className="flex items-center phone:text-base">
                    Resume <FaExternalLinkAlt className="ml-1" size={12} />
                  </div>
                </AppButton>
              </Reveal>
            </a>
            <a
              href="mailto:amandewett@gmail.com?subject=Requirement"
              className="ml-5"
            >
              <Reveal>
                <AppButton>Reach Out</AppButton>
              </Reveal>
            </a>
          </div>
        </div>
        {/* right side */}
        <div className="w-[60%] tablet:w-full phone:w-full z-10 tablet:mt-28 phone:mt-28">
          {/* <ImageCarousel
            items={arrCarouselImages.map((image: any) => {
              return (
                <ImageContainer
                  key={image}
                  src={image}
                  alt="vector"
                  width={450}
                  height={450}
                  priority
                  className="ml-auto mr-auto xxlMonitor:w-[550px] xxlMonitor:h-[550px] xlMonitor:w-[450px] xlMonitor:h-[450px] laptop:w-[400px] laptop:h-[400px] tablet:w-[350px] tablet:h-[350px] phone:w-[300px] phone:h-[300px]"
                />
              );
            })}
          /> */}
          <LottieAnimation
            animationData={CodingLottieOne}
            className="ml-auto mr-auto p-0 z-10 xxlMonitor:w-[550px] xxlMonitor:h-[550px] m-0 xlMonitor:w-[450px] xlMonitor:h-[450px] lgMonitor:w-[400px] lgMonitor:h-[400px] laptop:w-[400px] laptop:h-[400px] tablet:w-[350px] tablet:h-[350px] phone:w-[300px] phone:h-[300px]"
          />
        </div>
      </div>
    </>
  );
};
export default HomeHeader;
