"use client";
import React from "react";
import { PinContainer } from "../ui/3d-spin";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
    title: string;
    description: string;
    href: string;
    type: JSX.Element;
    typeColor: string;
    tags: JSX.Element[];
}

const ProjectCard:React.FC<ProjectCardProps> = ({title, description, href, tags, type, typeColor}) => {
  return (
    <div className="h-[25rem] w-min flex items-start justify-start ">
      <PinContainer
        title={href}
        href={href}
      >
        <div className="flex basis-full flex-col p-2 tracking-tight sm:basis-1/2 w-[260px] h-[340px] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-primary">
            {title}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-primary ">
              {description}
            </span>
          </div>
          <span className={cn("text-sm border w-min mt-1", typeColor)}>{type}</span>
          <div className="flex-grow"/>
          <div className="flex flex-wrap w-full h-14 rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-violet-400 to-secondary">
            {tags.map((tag, index) => (
              <span key={index} className="text-primary">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </PinContainer>
    </div>
  );
}

export default ProjectCard;
