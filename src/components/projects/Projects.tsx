"use client";

import { ProjectCard } from "./ProjectCard";
import SnowFlow from "@/assets/images/projects/SnowFlow.png"; // Import the image
import ArtnectHub from "@/assets/images/projects/ArtnectHub.png"
import Demay_Saas_Platform from "@/assets/svg/projects/Demay_Saas_Platform.svg"
import YK_Shop from "@/assets/svg/projects/YK_Shop.svg"

const exampleProjects = [
    {
        projectName: "SnowFlow",
        projectDescription: "This is the first example project.",
        imagePath: SnowFlow,  // Use the imported image
        projectLink: "https://example1.com"
    },
    {
        projectName: "ArtnectHub",
        projectDescription: "This is the second example project.",
        imagePath: ArtnectHub,  // You could import other images similarly
        projectLink: "https://example2.com"
    },
    {
        projectName: "Demay Saas Platform",
        projectDescription: "This is the third example project.",
        imagePath: Demay_Saas_Platform,  // Again, import the image if needed
        projectLink: "https://example3.com"
    },
    {
        projectName: "YK Shop",
        projectDescription: "This is the third example project.",
        imagePath: YK_Shop,  // Again, import the image if needed
        projectLink: "https://example3.com"
    }
];

export function ExampleProjects() {
    return (
      <div className="w-full sm:w-3/5 mx-auto flex flex-col items-center justify-center bg-white p-20 rounded-2xl shadow-lg my-40">
        {/* "我做过的项目" 标题 */}
        <div className="bg-black rounded-3xl shadow-lg mb-8 p-2">
          <p className="text-sm font-bold text-center text-white">我做过的</p>
        </div>
  
        {/* 项目卡片显示区域 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {exampleProjects.map((project, index) => (
            <div key={index} className="aspect-square">
              <ProjectCard
                projectName={project.projectName}
                projectDescription={project.projectDescription}
                imagePath={project.imagePath}
                projectLink={project.projectLink}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }