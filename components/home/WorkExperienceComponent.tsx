import { InfowizLogo, ThirtyFourSoftSystemsLogo, VectorEight } from "@/public";
import React from "react";
import ImageContainer from "../shared/ImageContainer";
import WorkExperienceCardComponent from "./WorkExperienceCardComponent";
import { CodefernsTechnologiesLogo } from "@/public";
import SectionHeading from "./SectionHeading";

const WorkExperienceComponent = () => {
  return (
    <section className="px-10">
      <SectionHeading>Experience</SectionHeading>
      <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start mt-2">
        <section className="w-[90vw] lg:w-[50vw] lg:h-[40vh] xl:h-[45vh] 2xl:h-[50vh] bg-slate-200 dark:bg-zinc-800 rounded-2xl m-y-10">
          <ul className="w-full h-full flex items-center overflow-x-scroll">
            <WorkExperienceCardComponent bgColor="FBF8CC" position="Full Stack Developer" companyName="Freelance" duration="Sept 2023 - Present" />
            <WorkExperienceCardComponent bgColor="90DBF4" position="Software Developer" companyName="Codeferns Technologies" duration="Dec 2019 - Aug 2023" imageSrc={CodefernsTechnologiesLogo.src} />
            <WorkExperienceCardComponent bgColor="CFBAF0" position="Android Developer" companyName="Thirtyfour Soft Systems" duration="Aug 2019 - Nov 2019" imageSrc={ThirtyFourSoftSystemsLogo.src} />
            <WorkExperienceCardComponent bgColor="98F5E1" position="Training" companyName="Infowiz" duration="Jan 2019 - June 2019" imageSrc={InfowizLogo.src} />
          </ul>
        </section>
        <section className="w-[50vw] h-[50vh] hidden lg:inline">
          <ImageContainer src={VectorEight.src} className="hidden lg:inline w-full h-full justify-self-center" alt="person_coding" />
        </section>
      </div>
    </section>
  );
};

export default WorkExperienceComponent;
