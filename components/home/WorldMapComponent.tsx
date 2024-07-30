"use client";

import React from "react";
import ImageContainer from "../shared/ImageContainer";
import { WorldMapVector } from "@/public";
import Image from "next/image";
import Numbers from "../about/Numbers";

const WorldMapComponent = () => {
  return (
    <section className="relative w-[30rem] h-[30rem] xl:w-[45rem] xl:h-[35rem] 2xl:w-[50rem] 2xl:h-[35rem]">
      <ImageContainer src={WorldMapVector.src} className="w-full h-full absolute z-0" alt="world_map" />
      <div className="absolute z-1 text-appPrimaryColor top-[30%] bottom-[70%] left-[10%]">
        <Numbers text="Happy Clients" count={50} />
      </div>
      <div className="absolute z-1 text-appPrimaryColor top-[70%] bottom-[30%] left-[40%]">
        <Numbers text="Projects Delivered" count={70} />
      </div>
      <div className="absolute z-1 text-appPrimaryColor top-[40%] bottom-[60%] right-[5%]">
        <Numbers text="Years Of Experience" count={4} />
      </div>
    </section>
  );
};

export default WorldMapComponent;
