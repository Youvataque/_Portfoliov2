"use client";
import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Tag, { TagColor } from "./Tag";

interface ProjectCardProps {
  title: string;
  description: string;
  href: string;
  type: JSX.Element;
  typeColor: TagColor;
  tags: JSX.Element[];
  // projet arrêté : ajoute une étiquette « Arrêté »
  discontinued?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, href, tags, type, typeColor, discontinued }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={cn(
        "group relative flex flex-col w-80 h-[360px] m-4 p-6 overflow-hidden rounded-3xl",
        "glass glass-hover ease-out hover:-translate-y-1"
      )}
    >
      {/* halo au survol */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accentColor/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10 flex items-start justify-between gap-3">
        <h3 className="font-bold text-base text-primary group-hover:text-secondary transition-colors duration-300">
          {title}
        </h3>
        <span className="shrink-0 p-1.5 rounded-full bg-accentColor/50 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ArrowUpRight className="w-4 h-4 text-primary" />
        </span>
      </div>

      <p className="relative z-10 mt-2 text-sm text-primary/85 leading-relaxed">{description}</p>

      <div className="relative z-10 mt-2 flex flex-wrap gap-2">
        <Tag color={typeColor}>{type}</Tag>
        {discontinued && <Tag color="slate">Arrêté</Tag>}
      </div>

      <div className="flex-grow" />

      <div className="relative z-10 flex flex-wrap items-center gap-2 mt-4">
        {tags.map((tag, index) => (
          <div key={index} className="text-foreground">
            {tag}
          </div>
        ))}
      </div>
    </Link>
  );
};

export default ProjectCard;
