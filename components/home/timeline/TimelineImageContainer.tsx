import ImageContainer from "@/components/shared/ImageContainer";
import { TimelineImageContainerProps } from "@/utils/appTypes";

const TimelineImageContainer = ({
  height = 0,
  width = 60,
  alt = "skill",
  src,
  className = "group-hover:scale-105 transition-all z-10 object-cover",
}: TimelineImageContainerProps) => {
  return (
    <ImageContainer
      alt={alt}
      width={width}
      height={height}
      src={src}
      className={className}
      priority
    />
  );
};
export default TimelineImageContainer;
