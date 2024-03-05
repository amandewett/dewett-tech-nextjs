import ImageContainer from "@/components/shared/ImageContainer";
import { TimelineImageContainer } from "@/utils/appTypes";

const TimelineImageContainer = ({
  height = 0,
  width = 60,
  alt = "skill",
  src,
  className = "group-hover:scale-125 transition-all",
}: TimelineImageContainer) => {
  return (
    <ImageContainer
      alt={alt}
      height={height}
      width={width}
      src={src}
      className={className}
    />
  );
};
export default TimelineImageContainer;
