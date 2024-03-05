import { TimelineElementProps } from "@/utils/appTypes";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import TimelineIcon from "./TimelineIcon";
import { motion } from "framer-motion";
import Reveal from "@/components/shared/Reveal";

const TimelineElement = ({
  children,
  icon,
  className,
}: TimelineElementProps) => {
  return (
    <Reveal>
      <VerticalTimelineElement
        visible
        contentStyle={{
          background: "none",
          boxShadow: "none",
          padding: 0,
          paddingTop: 0,
          paddingBottom: 0,
          margin: 0,
          marginLeft: "30%",
        }}
        style={{ margin: "5px" }}
        contentArrowStyle={{ border: "none" }}
        iconStyle={{ width: "56px", height: "56px", left: "-13px" }}
        icon={<TimelineIcon icon={icon} />}
      >
        <motion.div className={className}>{children}</motion.div>
      </VerticalTimelineElement>
    </Reveal>
  );
};
export default TimelineElement;
