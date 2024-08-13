import { WireFrameSvg } from "@/public";
import ImageContainer from "./ImageContainer";
import { FC, PropsWithChildren } from "react";

type AppCardComponentProps = {
  classNames?: string;
};

const AppCardComponent: FC<PropsWithChildren<AppCardComponentProps>> = ({ children, classNames }) => {
  classNames =
    classNames === ""
      ? "relative w-[80vw] h-[10rem] lg:w-[35rem] lg:h-[8rem] xl:w-[40rem] xl:h-[10rem] rounded-[15px] border-solid border-2 border-zinc-500 glow-card-bg"
      : `${classNames} relative rounded-[15px] border-solid border-2 border-zinc-500 glow-card-bg`;

  return (
    <div className={classNames}>
      <section className="w-full h-full rounded-[inherit] absolute glow-card-bg-child" />
      <ImageContainer src={WireFrameSvg.src} className="w-full h-full rounded-[inherit] absolute object-cover" />
      <section className="w-full h-full absolute rounded-[inherit] overflow-hidden top-[-0.8rem] left-[-0.8rem] bg-appLightBgColor dark:bg-appDarkBgColor border-zinc-500 border-solid border-2 flex flex-col justify-between">
        {children}
      </section>
    </div>
  );
};

export default AppCardComponent;
