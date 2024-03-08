import LottieAnimation from "../about/LottieAnimation";
import { ProjectDevelopmentLottie } from "@/public";
import Reveal from "../shared/Reveal";

const ProjectsHeader = () => {
  return (
    <>
      <div className="w-[98vw] mt-5 flex items-center justify-center">
        <Reveal>
          <LottieAnimation
            animationData={ProjectDevelopmentLottie}
            className="p-0 z-10 w-[97%]"
          />
        </Reveal>
      </div>
    </>
  );
};
export default ProjectsHeader;
