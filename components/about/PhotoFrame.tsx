import { PhotoFramerProps } from "@/utils/appTypes";

const PhotoFrame = ({ arrText }: PhotoFramerProps) => {
  return (
    <div className="frame">
      <div className="text">
        {arrText.map((letter: any, index: number) => {
          return <span key={`${index}_${letter}`}>{letter}</span>;
        })}
      </div>
    </div>
  );
};
export default PhotoFrame;
