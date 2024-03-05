import { ScrambleTexts } from "@twistezo/react-text-scramble";
import { IconType } from "react-icons";

export type Props = {
  children?: React.ReactNode;
};

export type HomeHeaderProps = {
  arrString: ScrambleTexts;
  className: string;
};

export type ImageContainerProps = {
  src: string;
  className?: string;
  alt: string;
  width: number;
  height: number;
};

export type ImageCarouselProps = {
  items: React.ReactNode[];
  className?: string;
};

export type RevealProps = Props & {
  willSwipe?: boolean;
};

export type TimelineIconProps = {
  icon: IconType;
};

export type TimelineElementProps = Props & {
  icon: IconType;
  className: string;
};

export type TimelineImageContainer = {
  height?: number;
  width?: number;
  alt?: string;
  src: string;
  className?: string;
};
