'use client';

import React from 'react';
import ImageContainer from '../shared/ImageContainer';
import { WorldMapVector, WorldMapDarkVector } from '@/public';
import CounterComponent from './CounterComponent';
import { durationCalculator } from '@/utils/durationCalculator';

const WorldMapComponent = () => {
  return (
    <section className="relative w-[90vw] h-[90vw] lg:w-[55vw] lg:h-[55vh]">
      <ImageContainer src={WorldMapVector.src} className="hidden dark:inline w-full h-full absolute z-0" alt="world_map" />
      <ImageContainer src={WorldMapDarkVector.src} className="inline dark:hidden w-full h-full absolute z-0" alt="world_map" />
      <div className="absolute z-1 text-appPrimaryColor top-[35%] bottom-[65%] lg:top-[25%] lg:bottom-[75%] left-[20%] md:left-[20%]">
        <CounterComponent text="Happy Clients" count={50} />
      </div>
      <div className="absolute z-1 text-appPrimaryColor top-[60%] bottom-[40%] md:bottom-[25%] left-[40%]">
        <CounterComponent text="Projects Delivered" count={70} />
      </div>
      <div className="absolute z-1 text-appPrimaryColor top-[40%] bottom-[60%] right-[6vw] md:top-[40%] md:bottom-[60%]">
        <CounterComponent text="Years of Experience" count={+durationCalculator(new Date(2019, 7, 1), undefined, true)} />
      </div>
    </section>
  );
};

export default WorldMapComponent;
