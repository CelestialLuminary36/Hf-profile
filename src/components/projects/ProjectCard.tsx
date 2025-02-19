"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

interface ProjectCardProps {
  projectName: string;
  projectDescription: string;
  imagePath: string;
  projectLink: string;
  githubLink: string;
}

export function ProjectCard({
  projectName,
  projectDescription,
  imagePath,
  projectLink,
  githubLink
}: ProjectCardProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full max-w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {projectName}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {projectDescription}
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <img
            src={imagePath}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-5">
          <CardItem
            translateZ={20}
            translateX={-40}
            as="button"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            <a href={projectLink} target="_blank" rel="noopener noreferrer">
              Try now →
            </a>
          </CardItem>
          <CardItem
            translateZ={20}
            translateX={40}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
