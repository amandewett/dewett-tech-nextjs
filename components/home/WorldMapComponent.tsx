"use client";

import React from "react";
import ImageContainer from "../shared/ImageContainer";
import { WorldMapVector, WorldMapDarkVector } from "@/public";
import Numbers from "../about/Numbers";

const WorldMapComponent = () => {
  return (
    <section className="relative w-[40rem] h-[15rem] md:w-[50rem] md:h-[25rem] lg:w-[50rem] lg:h-[25rem] xl:w-[55rem] xl:h-[30rem] 2xl:w-[60rem] 2xl:h-[35rem]">
      <ImageContainer src={WorldMapVector.src} className="hidden dark:inline w-full h-full absolute z-0 blah" alt="world_map" />
      <ImageContainer src={WorldMapDarkVector.src} className="inline dark:hidden w-full h-full absolute z-0 blah" alt="world_map" />
      <div className="absolute z-1 text-appPrimaryColor top-[15%] bottom-[85%] left-[30%] md:left-[10%]">
        <Numbers text="Happy Clients" count={50} />
      </div>
      <div className="absolute z-1 text-appPrimaryColor top-[65%] bottom-[35%] md:bottom-[25%] left-[40%]">
        <Numbers text="Projects Delivered" count={70} />
      </div>
      <div className="absolute z-1 text-appPrimaryColor top-[40%] bottom-[60%] right-[25%] md:right-[5%]">
        <Numbers text="Years Of Experience" count={4} />
      </div>
    </section>
  );
};

export default WorldMapComponent;
