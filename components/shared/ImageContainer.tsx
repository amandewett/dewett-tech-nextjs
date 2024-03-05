import { ImageContainerProps } from "@/utils/appTypes";
import Image from "next/image";

const ImageContainer = ({
  src,
  className,
  alt,
  height,
  width,
}: ImageContainerProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};
export default ImageContainer;
