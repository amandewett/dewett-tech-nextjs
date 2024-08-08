import { lazy, Suspense } from "react";
import ScrollMessage from "@/components/home/ScrollMessage";
import Reveal from "@/components/shared/Reveal";
import HomeHeaderLeft from "@/components/home/HomeHeaderLeft";
import HomeHeaderRight from "@/components/home/HomeHeaderRight";
import AppCircularLoader from "@/components/shared/AppCircularLoader";

const WorkWithComponent = lazy(() => import("@/components/home/WorkWithComponent"));
const SkillsComponent = lazy(() => import("@/components/home/SkillsComponent"));
const TechStackComponent = lazy(() => import("@/components/home/TechStackComponent"));
const WorkExperienceComponent = lazy(() => import("@/components/home/WorkExperienceComponent"));
const EducationComponent = lazy(() => import("@/components/home/EducationComponent"));

const HomePage = () => {
  return (
    <>
      <main className="flex flex-col justify-center w-full">
        <section>
          <Reveal>
            <section className="w-full flex flex-col lg:flex-row mt-[3vh] md:mt-[12vh]">
              <HomeHeaderLeft />
              <HomeHeaderRight />
            </section>
          </Reveal>
        </section>
        <ScrollMessage />
        <Suspense fallback={<AppCircularLoader />}>
          <WorkWithComponent />
        </Suspense>
        <Suspense fallback={<AppCircularLoader />}>
          <SkillsComponent />
        </Suspense>
        <Suspense fallback={<AppCircularLoader />}>
          <Reveal willSwipeUp once={false}>
            <TechStackComponent />
          </Reveal>
        </Suspense>
        <Suspense fallback={<AppCircularLoader />}>
          <Reveal willSwipeUp once={false}>
            <WorkExperienceComponent />
          </Reveal>
        </Suspense>
        <Suspense fallback={<AppCircularLoader />}>
          <Reveal willSwipeUp once={false}>
            <EducationComponent />
          </Reveal>
        </Suspense>
      </main>
    </>
  );
};

export default HomePage;
