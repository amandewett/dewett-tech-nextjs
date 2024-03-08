import { ProjectsTimelineElementProps } from "@/utils/appTypes";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import Image from "next/image";
import Reveal from "../shared/Reveal";
import Link from "next/link";

const ProjectsTimelineElement = ({
  icon: Icon,
  aboutProject,
  imageSrc,
  projectName,
  url,
}: ProjectsTimelineElementProps) => {
  return (
    <VerticalTimelineElement
      visible
      className="vertical-timeline-element--work transition-all duration-500"
      contentStyle={{
        background: "transparent",
        width: "450px",
        height: "350px",
        minWidth: "0px",
        boxShadow: "none",
        paddingTop: "0px",
        paddingBottom: "0px",
        paddingLeft: "0px",
        paddingRight: "0px",
        marginTop: "0px",
        marginBottom: "0px",
        marginLeft: "0px",
        marginRight: "0px",
        borderRadius: "15px",
        transitionProperty: "all",
        transitionDuration: "1s",
      }}
      style={{
        paddingTop: "0px",
        paddingBottom: "0px",
        paddingLeft: "0px",
        paddingRight: "0px",
        marginTop: "0px",
        marginBottom: "0px",
        marginLeft: "0px",
        marginRight: "0px",
        transitionProperty: "all",
        transitionDuration: "1s",
      }}
      contentArrowStyle={{
        borderRight: "7px solid #F5F5F5",
        opacity: 0.5,
        paddingTop: "0px",
        paddingBottom: "0px",
        paddingLeft: "0px",
        paddingRight: "0px",
        marginTop: "0px",
        marginBottom: "0px",
        marginLeft: "0px",
        marginRight: "0px",
        transitionProperty: "all",
        transitionDuration: "1s",
      }}
      iconStyle={{
        background: "transparent",
        color: "#fff",
        transitionProperty: "all",
        transitionDuration: "1s",
      }}
      icon={<Icon />}
    >
      <>
        <Reveal>
          <Link href={url} target="_blank">
            <div className="bg-appColorWhiteSmoke overflow-hidden bg-opacity-30 rounded-xl w-[450px] h-[350px] lgMonitor:w-[350px] lgMonitor:h-[250px] lgMonitor:ml-20 laptop:w-[300px] laptop:h-[250px] laptop:ml-20 tablet:w-[300px] tablet:h-[250px] tablet:ml-20 phone:w-[220px] phone:h-[300px] phone:ml-20 transition-all duration-500 cursor-pointer relative group">
              <Image
                src={imageSrc}
                fill
                alt="project_image"
                className="mx-auto rounded-xl object-cover brightness-50 group-hover:blur-sm group-hover:brightness-[0.3] z-10 transition-all duration-500"
              />
              <div className="w-full h-full bg-transparent rounded-xl z-30 absolute p-5 transition-all duration-500">
                <h3 className="text-appColorWhiteSmoke group-hover:text-appPrimaryColor text-4xl font-extrabold transition-all duration-500 lgMonitor:text-2xl laptop:text-xl tablet:text-lg phone:text-base">
                  {projectName}
                </h3>
                <h6 className="mt-5 text-xl font-semibold text-pretty hidden group-hover:inline-block transition-all duration-500  lgMonitor:text-sm laptop:text-xs tablet:text-xs phone:text-xs phone:font-thin">
                  {aboutProject}
                </h6>
              </div>
            </div>
          </Link>
        </Reveal>
      </>
    </VerticalTimelineElement>
  );
};
export default ProjectsTimelineElement;
