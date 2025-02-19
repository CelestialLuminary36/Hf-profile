"use client";

import { ProjectCard } from "./ProjectCard";
import { projects } from "@/configs/projectsConfig"

export function ProjectsComponent() {
    return (
      <div className="w-full sm:w-3/5 mx-auto flex flex-col items-center justify-center bg-white p-20 rounded-2xl shadow-lg my-40">
        <div className="bg-black rounded-3xl shadow-lg mb-8 p-2">
          <p className="text-sm font-bold text-center text-white">我做过的</p>
        </div>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {projects.map((project, index) => (
            <div key={index} className="aspect-square">
              <ProjectCard
                projectName={project.projectName}
                projectDescription={project.projectDescription}
                imagePath={project.imagePath}
                projectLink={project.projectLink}
                githubLink={project.githubLink}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }