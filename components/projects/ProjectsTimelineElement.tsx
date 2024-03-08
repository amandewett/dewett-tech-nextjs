import { ProjectsTimelineElementProps } from "@/utils/appTypes";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import Image from "next/image";
import Reveal from "../shared/Reveal";

const ProjectsTimelineElement = ({
  icon: Icon,
  aboutProject,
  imageSrc,
  projectName,
}: ProjectsTimelineElementProps) => {
  return (
    <VerticalTimelineElement
      visible
      className="vertical-timeline-element--work transition-all duration-500"
      contentStyle={{
        background: "#F5F5F533",
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
          <div className="bg-appColorWhiteSmoke bg-opacity-30 rounded-xl w-[450px] h-[350px] transition-all duration-500 cursor-pointer relative group">
            <Image
              src={imageSrc}
              fill
              alt="project_image"
              className="mx-auto rounded-xl object-cover brightness-50 group-hover:blur-sm group-hover:brightness-[0.3] z-10 transition-all duration-500"
            />
            <div className="w-full h-full bg-transparent rounded-xl z-30 absolute p-5 transition-all duration-500">
              <h3 className="text-appColorWhiteSmoke group-hover:text-appPrimaryColor text-4xl font-extrabold transition-all duration-500">
                {projectName}
              </h3>
              <h6 className="mt-5 text-xl font-semibold text-pretty hidden group-hover:inline-block transition-all duration-500">
                {aboutProject}
              </h6>
            </div>
          </div>
        </Reveal>
      </>
    </VerticalTimelineElement>
  );
};
export default ProjectsTimelineElement;
