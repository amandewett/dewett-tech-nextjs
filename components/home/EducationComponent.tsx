import React from "react";
import ImageContainer from "../shared/ImageContainer";
import { VectorEight } from "@/public";
import SectionHeading from "./SectionHeading";

const EducationComponent = () => {
  return (
    <section className="px-10 mt-[10rem]">
      <SectionHeading>Education</SectionHeading>
      <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start mt-2">
        <section className="w-[90vw] lg:w-[50vw] lg:h-[40vh] xl:h-[45vh] 2xl:h-[50vh] bg-slate-200 dark:bg-zinc-800 rounded-2xl m-y-10">
          <ul className="w-full h-full flex items-center overflow-x-scroll"></ul>
        </section>
        <section className="w-[50vw] h-[50vh] hidden lg:inline">
          <ImageContainer src={VectorEight.src} className="hidden lg:inline w-full h-full justify-self-center" alt="person_coding" />
        </section>
      </div>
    </section>
  );
};

export default EducationComponent;
