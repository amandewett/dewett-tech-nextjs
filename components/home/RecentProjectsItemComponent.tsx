import React from "react";
import AppCardComponent from "../shared/AppCardComponent";
import VisitButton from "../shared/VisitButton";
import { RecentProjectsItemComponentProps } from "@/utils/appTypes";

const RecentProjectsItemComponent = ({ projectIcon: ProjectIcon, ...props }: RecentProjectsItemComponentProps) => {
  return (
    <li>
      <AppCardComponent classNames="min-h-[25rem]">
        <div className="p-5 flex flex-col justify-start gap-5 items-start">
          <section className="flex items-center justify-between w-full">
            <ProjectIcon className="text-5xl" />
            {props.link && <VisitButton link={props.link} />}
          </section>
          <h2 className="font-bold text-3xl">{props.projectName}</h2>
          <p className="font-light text-lg">{props.projectDescription}</p>
        </div>
      </AppCardComponent>
    </li>
  );
};

export default RecentProjectsItemComponent;
