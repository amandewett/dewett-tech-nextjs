import Bio from "@/components/about/Bio";
import Education from "@/components/about/Education";
import Experience from "@/components/about/Experience";
import LottieAnimation from "@/components/about/LottieAnimation";
import PhotoFrame from "@/components/about/PhotoFrame";
import Footer from "@/components/shared/Footer";
import { MeditationLottie } from "@/public";

const AboutPage = () => {
  const quote = "rekcod ❤ rettulf ❤ lqsym ❤ edon ❤ tcaer ❤ sjtxen";
  return (
    <>
      <main>
        <LottieAnimation
          animationData={MeditationLottie}
          className="ml-auto mr-auto xxlMonitor:w-[400px] xxlMonitor:h-[400px] xlMonitor:w-[300px] xlMonitor:h-[300px] lgMonitor:w-[250px] lgMonitor:h-[250px] laptop:w-[250px] laptop:h-[250px] tablet:w-[200px] tablet:h-[200px] phone:w-[200px] phone:h-[200px]"
        />
        <div className="flex flex-row tablet:flex-col phone:flex-col tablet:items-center phone:items-center mt-0 ml-16 tablet:ml-auto tablet:mr-auto phone:ml-auto phone:mr-auto">
          <div className="w-[20%] z-[10] tablet:w-full tablet:flex tablet:justify-center phone:w-full phone:flex phone:justify-center">
            <PhotoFrame arrText={quote.split("")} />
          </div>
          <div className="w-[80%] tablet:w-[100%] z-[10] tablet:mt-20 phone:w-[100%] phone:mt-20">
            <Bio />
          </div>
        </div>
        <Experience />
        <Education />
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
