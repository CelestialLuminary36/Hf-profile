// src/types/project.d.ts
export interface Project {
    slug: string;
    projectName: string;
    projectDescription: string;
    imagePath: string;
    projectLink: string;
    githubLink: string;
    technologies: Technology[];
    features: Feature[];
    explanation: string;
  }
  
  interface Technology {
    name: string;
    pros: string[];
    cons: string[];
    adoptionReason: string;
  }
  
  interface Feature {
    title: string;
    progress: number;
    icon: string;
  }