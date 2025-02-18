import SnowFlow from "@/assets/images/projects/SnowFlow.png"; // Import the image
import ArtnectHub from "@/assets/images/projects/ArtnectHub.png"
import Demay_Saas_Platform from "@/assets/svg/projects/Demay_Saas_Platform.svg"
import YK_Shop from "@/assets/svg/projects/YK_Shop.svg"
import { AnimatedPin } from "./SkillsCard";


const projects = [
    {
        projectName: "SnowFlow",
        projectDescription: "This is the first example project.",
        imagePath: SnowFlow,
        projectLink: "https://example1.com",
        title: "fuck"
    },
    {
        projectName: "ArtnectHub",
        projectDescription: "This is the second example project.",
        imagePath: ArtnectHub,
        projectLink: "https://example2.com",
        title: "fuck"
    },
    {
        projectName: "Demay Saas Platform",
        projectDescription: "This is the third example project.",
        imagePath: Demay_Saas_Platform,
        projectLink: "https://example3.com",
        title: "fuck"
    },
    {
        projectName: "YK Shop",
        projectDescription: "This is the third example project.",
        imagePath: YK_Shop,
        projectLink: "https://example3.com",
        title: "fuck"
    }
];

export function MyProjects() {
    return (
      <div className="w-full sm:w-3/5 mx-auto flex flex-col items-center justify-center bg-white p-20 rounded-2xl shadow-lg my-40">
        {/* "我做过的项目" 标题 */}
        <div className="bg-black rounded-3xl shadow-lg mb-8 p-2">
          <p className="text-sm font-bold text-center text-white">我做过的</p>
        </div>
  
        {/* 项目卡片显示区域 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          {projects.map((project, index) => (
            <div key={index} className="aspect-square">
              <AnimatedPin
                projectName={project.projectName}
                description={project.projectDescription}
                path={project.imagePath}
                link={project.projectLink}
                title={project.title}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }