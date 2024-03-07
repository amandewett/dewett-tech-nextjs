// import StaggeredText from "../shared/StaggeredText";
import dynamic from "next/dynamic";
const StaggeredText = dynamic(() => import("../shared/StaggeredText"), {
  ssr: false,
});

const Quote = () => {
  return (
    <div className="flex flex-row justify-center items-center w-full h-36 mt-14">
      <div className="w-[50%] font-extrabold flex flex-row justify-center items-center">
        <StaggeredText
          text="I am not what happened to me, I am what I choose to become."
          className="text-5xl text-center"
        />
      </div>
    </div>
  );
};
export default Quote;
