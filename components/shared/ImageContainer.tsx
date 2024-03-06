import { ImageContainerProps } from "@/utils/appTypes";
import Image from "next/image";

const ImageContainer = ({
  src,
  className,
  alt = "image",
  height = 50,
  width = 50,
  priority = false,
}: ImageContainerProps) => {
  className = className + " w-auto";
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`${className}`}
      priority={priority}
    />
  );
};
export default ImageContainer;
