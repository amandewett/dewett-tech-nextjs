"use client";
import { ImageCarouselProps } from "@/utils/appTypes";
import dynamic from "next/dynamic";
const Carousel = dynamic(() => import("react-alice-carousel"), { ssr: false });
import "react-alice-carousel/lib/alice-carousel.css";

const ImageCarousel = ({ items, className }: ImageCarouselProps) => {
  return (
    <div className={className}>
      <Carousel
        autoPlay
        autoPlayStrategy="action"
        autoPlayInterval={3500}
        animationDuration={300}
        animationEasingFunction="ease-in-out"
        animationType="slide"
        infinite
        touchTracking={false}
        mouseTracking={false}
        disableDotsControls
        disableButtonsControls
        items={items}
      />
    </div>
  );
};
export default ImageCarousel;
