"use client";

import React from "react";
import ImageContainer from "../shared/ImageContainer";
import { EducationSvg } from "@/public";
import SectionHeading from "./SectionHeading";
import EducationTimeline from "./EducationTimeline";

const EducationComponent = () => {
  return (
    <section className="px-8">
      <SectionHeading>Education</SectionHeading>
      <div className="flex flex-col lg:flex-row justify-between items-start mt-2">
        <EducationTimeline />
        <section className="w-[60vw] h-[60vh] hidden lg:inline">
          <ImageContainer src={EducationSvg.src} className="hidden lg:inline w-full h-full justify-self-center" alt="person_coding" />
        </section>
      </div>
    </section>
  );
};

export default EducationComponent;
