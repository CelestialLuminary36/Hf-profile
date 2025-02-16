"use client";

import { ProjectCard } from "./ProjectCard";
import jx from "@/assets/images/jx-forum.png"; // Import the image
import artnectHub from "@/assets/images/artnectHub.png"
import demay from "@/assets/svg/cloud.svg"
import shop from "@/assets/svg/shop.svg"

const exampleProjects = [
    {
        projectName: "SnowFlow",
        projectDescription: "This is the first example project.",
        imagePath: jx,  // Use the imported image
        projectLink: "https://example1.com"
    },
    {
        projectName: "ArtnectHub",
        projectDescription: "This is the second example project.",
        imagePath: artnectHub,  // You could import other images similarly
        projectLink: "https://example2.com"
    },
    {
        projectName: "Demay Saas Platform",
        projectDescription: "This is the third example project.",
        imagePath: demay,  // Again, import the image if needed
        projectLink: "https://example3.com"
    },
    {
        projectName: "YK Shop",
        projectDescription: "This is the third example project.",
        imagePath: shop,  // Again, import the image if needed
        projectLink: "https://example3.com"
    }
];

export function ExampleProjects() {
    return (
        <div className="py-40 flex flex-wrap justify-center gap-4">
            {exampleProjects.map((project, index) => (
                <ProjectCard
                    key={index}
                    projectName={project.projectName}
                    projectDescription={project.projectDescription}
                    imagePath={project.imagePath}
                    projectLink={project.projectLink}
                />
            ))}
        </div>
    );
}
