import { lazy, Suspense } from 'react';
// import ScrollMessage from "@/components/home/ScrollMessage";
import Reveal from '@/components/shared/Reveal';
import HomeHeaderLeft from '@/components/home/HomeHeaderLeft';
import HomeHeaderRight from '@/components/home/HomeHeaderRight';
import AppCircularLoader from '@/components/shared/AppCircularLoader';
import { Header } from '@/components/header';

const WorkWithComponent = lazy(() => import('@/components/home/WorkWithComponent'));
const SkillsComponent = lazy(() => import('@/components/home/SkillsComponent'));
const TechStackComponent = lazy(() => import('@/components/home/TechStackComponent'));
const ExperienceComponent = lazy(() => import('@/components/home/ExperienceComponent'));
const EducationComponent = lazy(() => import('@/components/home/EducationComponent'));
const RecentProjectsComponent = lazy(() => import('@/components/home/RecentProjectsComponent'));
const ContactComponent = lazy(() => import('@/components/home/ContactComponent'));

const HomePage = () => {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-center w-full">
        <section>
          <Reveal>
            <section className="w-full flex flex-col lg:flex-row mt-[3vh] md:mt-[12vh]">
              <HomeHeaderLeft />
              <HomeHeaderRight />
            </section>
          </Reveal>
        </section>
        {/* <ScrollMessage /> */}
        <Suspense fallback={<AppCircularLoader />}>
          <WorkWithComponent />
        </Suspense>
        <Suspense fallback={<AppCircularLoader />}>
          <SkillsComponent />
        </Suspense>
        <Reveal willSwipeUp>
          <Suspense fallback={<AppCircularLoader />}>
            <TechStackComponent />
          </Suspense>
        </Reveal>
        <Suspense fallback={<AppCircularLoader />}>
          <ExperienceComponent />
        </Suspense>
        <Reveal willSwipeUp>
          <Suspense fallback={<AppCircularLoader />}>
            <EducationComponent />
          </Suspense>
        </Reveal>
        <Reveal willSwipeUp>
          <Suspense fallback={<AppCircularLoader />}>
            <RecentProjectsComponent />
          </Suspense>
        </Reveal>
        <Reveal willSwipeUp>
          <Suspense fallback={<AppCircularLoader />}>
            <ContactComponent />
          </Suspense>
        </Reveal>
      </main>
    </>
  );
};

export default HomePage;
