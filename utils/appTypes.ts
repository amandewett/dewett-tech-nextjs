import { ScrambleTexts } from "@twistezo/react-text-scramble";
import { IconTree, IconType } from "react-icons";

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
  alt?: string;
  width?: number;
  height?: number;
  priority?: boolean;
};

export type ImageCarouselProps = {
  items: React.ReactNode[];
  className?: string;
};

export type RevealProps = Props & {
  willSwipe?: boolean;
  willSwipeUp?: boolean;
  once?: boolean;
};

export type TimelineIconProps = {
  icon: IconType;
};

export type TimelineElementProps = Props & {
  icon: IconType;
  className: string;
};

export type TimelineImageContainerProps = {
  height?: number;
  width?: number;
  alt?: string;
  src: string;
  className?: string;
};

export type AppButtonProps = Props & {
  onClick?: () => void;
  revert?: boolean;
};

export type StaggeredTextProps = {
  text: string;
  className?: string;
};

export type PhotoFramerProps = {
  arrText: string[];
};

export type NumbersProps = {
  count: number;
  text: string;
};

export type ExperienceCardProps = {
  position: string;
  duration: string;
  company: string;
  stack?: string;
  location: string;
  description: string[] | string;
  isLeft?: boolean;
};

export type LottieAnimationProps = {
  animationData: any;
  width?: string;
  height?: string;
  className?: string;
};

export type ProjectsTimelineElementProps = {
  icon: IconType;
  imageSrc: string;
  projectName: string;
  aboutProject: string;
};
