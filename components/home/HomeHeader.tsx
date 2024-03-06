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
} from "@/public";
import ImageContainer from "../shared/ImageContainer";
import AppButton from "../shared/AppButton";
import Link from "next/link";

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
        <div className="flex w-[40%] flex-col pl-20 tablet:w-[100%] phone:w-[100%] tablet:pr-20 phone:pr-20">
          <h3 className="uppercase text-slate-300/90 text-xl xxlMonitor:text-2xl">
            hi there
          </h3>
          <h1 className="text-white text-4xl xxlMonitor:text-6xl pt-5">
            I&#39;m <span className="font-extrabold">Aman Dewett</span>
          </h1>

          <h1 className="text-3xl xxlMonitor:text-5xl pt-5 h-14 xxlMonitor:h-20 text-appPrimaryColor font-bold overflow-hidden">
            <span>&#60;&#47;</span>
            <TextScrambler
              arrString={["Web", "Backend", "Mobile"]}
              className="inline-block text-white"
            />
            <span>
              <span className="text-white">&#09;Developer</span>&#62;
            </span>
          </h1>
          <div className="pt-10 text-base text-pretty xxlMonitor:text-xl">
            <p>
              Seasoned Full Stack Developer with over five years of hands-on
              experience specializing in{" "}
              <span className="text-appPrimaryColor font-bold">
                React, NextJS, NodeJS, NestJS and Flutter
              </span>{" "}
              development. I enjoy helping people make the world a better place
              through quality softwares.
            </p>
          </div>
          <div className="self-end pt-8 xxlMonitor:pt-12 z-10">
            <Link href="mailto:amandewett@gmail.com?subject=Requirement">
              <AppButton label="Reach Out" />
            </Link>
          </div>
        </div>
        {/* right side */}
        <div className="w-[60%] tablet:pt-20 phone:pt-20 z-10">
          <ImageCarousel
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
          />
        </div>
      </div>
    </>
  );
};
export default HomeHeader;
