import { IconTree, IconType } from "react-icons";

export type DefaultProps = {
  children?: React.ReactNode;
};

export type HomeHeaderProps = {
  arrString?: string[];
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

export type RevealProps = DefaultProps & {
  willSwipe?: boolean;
  willSwipeUp?: boolean;
  once?: boolean;
};

export type TimelineIconProps = {
  icon: IconType;
};

export type TimelineElementProps = DefaultProps & {
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

export type AppButtonProps = DefaultProps & {
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
  isTablet?: boolean;
};

export type LottieAnimationProps = {
  animationData: any;
  width?: string;
  height?: string;
  className?: string;
};

export type AppLottieContainerProps = {
  animationData: any;
  width?: string;
  height?: string;
  className?: string;
  loop?: number | boolean;
};

export type ProjectsTimelineElementProps = {
  icon: IconType;
  imageSrc: string;
  projectName: string;
  aboutProject: string;
  url: string;
};

export type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};

export type SkillItemComponentProps = {
  bgColor?: string;
  text?: string;
  SkillIcon?: IconType;
  isLight?: boolean;
  isSmall?: boolean;
};

export type TechStackItemProps = {
  heading: string;
  arrItems: string[];
  arrIcons: IconType[];
  arrColors: string[];
  arrIsLight: boolean[];
};

export type WorkExperienceCardComponentProps = {
  bgColor?: string;
  imageSrc?: string;
  companyName: string;
  position: string;
  duration: string;
};

export type EducationItemComponentProps = {
  degree: string;
  duration: string;
  institute: string;
};

export type VisitButtonProps = {
  link: string;
};

export type RecentProjectsItemComponentProps = {
  projectName: string;
  projectDescription: string;
  projectIcon: IconType;
  link?: string;
};

export type ContactItemComponentProps = {
  link: string;
  bgColor: string;
  iconColor: string;
  socialIcon: IconType;
};

export type ScrollMessageProps = {
  arrScrollYPosition?: number[];
};
