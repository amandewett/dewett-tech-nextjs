import ImageContainer from "@/components/shared/ImageContainer";
import { TimelineImageContainerProps } from "@/utils/appTypes";

const TimelineImageContainer = ({
  height = 0,
  width = 60,
  alt = "skill",
  src,
  className = "group-hover:scale-50 transition-all z-10",
}: TimelineImageContainerProps) => {
  return (
    <ImageContainer
      alt={alt}
      height={height}
      width={width}
      src={src}
      className={className}
      priority
    />
  );
};
export default TimelineImageContainer;
