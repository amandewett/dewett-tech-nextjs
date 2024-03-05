import { TimelineElementProps } from "@/utils/appTypes";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import TimelineIcon from "./TimelineIcon";
// import "react-vertical-timeline-component/style.min.css";

const TimelineElement = ({ children, icon }: TimelineElementProps) => {
  return (
    <VerticalTimelineElement
      visible
      contentStyle={{
        padding: "20px",
        background: "none",
        boxShadow: "none",
      }}
      style={{
        height: 0,
        padding: "20px",
      }}
      contentArrowStyle={{
        borderRight: "0px solid  transparent",
        border: "none",
        background: "transparent",
      }}
      iconStyle={{
        background: "#0A66C2",
        color: "#ffffff",
        padding: "25px",
        width: "40px",
        height: "40px",
        left: "50%",
      }}
      icon={<TimelineIcon icon={icon} />}
    >
      <div className="bg-appPrimaryColor inline-block px-4 py-2 rounded-full text-2xl font-semibold">
        {children}
      </div>
    </VerticalTimelineElement>
  );
};
export default TimelineElement;
