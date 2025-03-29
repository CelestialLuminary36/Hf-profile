// src/components/projects/ProjectShowcase.tsx
"use client";

import { motion } from "framer-motion";
import { useLoaderData } from "react-router-dom";
import { Project } from "@/types/project";

export const ProjectShowcase = () => {
  const project = useLoaderData() as Project;

  return (
    <div className="max-w-6xl mx-auto mb-40 p-8 bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl shadow-2xl">
      {/* 项目标题和核心描述 */}
      <div className="mb-12 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500"
        >
          {project.projectName}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-gray-600 text-lg"
        >
          {project.projectDescription}
        </motion.p>
      </div>

      {/* 技术栈对比展示 */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="space-y-6">
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-semibold text-gray-800 border-l-4 border-blue-500 pl-4"
          >
            技术决策分析
          </motion.h3>
          
          {project.technologies.map((tech, index) => (
            <motion.div
              key={`tech-${index}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-lg font-medium text-gray-800">{tech.name}</span>
                <span className="text-sm px-2 py-1 bg-blue-100 text-blue-800 rounded-full">
                  采用理由
                </span>
              </div>
              <p className="text-sm text-gray-600 mb-4">{tech.adoptionReason}</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-green-50 rounded-lg">
                  <h4 className="text-sm font-medium text-green-700 mb-2">✓ 优势</h4>
                  <ul className="space-y-1 text-xs text-green-600">
                    {tech.pros.map((pro, i) => (
                      <li key={`pro-${i}`}>・{pro}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-3 bg-red-50 rounded-lg">
                  <h4 className="text-sm font-medium text-red-700 mb-2">⚠️ 挑战</h4>
                  <ul className="space-y-1 text-xs text-red-600">
                    {tech.cons.map((con, i) => (
                      <li key={`con-${i}`}>・{con}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 功能特性展示 */}
        <div className="space-y-6">
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-semibold text-gray-800 border-l-4 border-purple-500 pl-4"
          >
            核心功能演进
          </motion.h3>
          
          {project.features.map((feature, index) => (
            <motion.div
              key={`feature-${index}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-2 rounded-lg ${getColorClass(feature.progress, 'bg')}`}>
                  <span className="text-lg">{feature.icon}</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-800">{feature.title}</h4>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`${getColorClass(feature.progress, 'progress')} h-2 rounded-full transition-all duration-500`}
                        style={{ width: `${feature.progress}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-500">{feature.progress}%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 技术融合说明 */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center p-6 bg-white rounded-xl shadow-sm"
      >
        <p className="text-gray-600 italic">
            {project.explanation}
        </p>
      </motion.div>
    </div>
  );
};

// 颜色处理函数（Tailwind需要完整类名）
const getColorClass = (progress: number, type: 'bg' | 'progress') => {
    if (type === 'bg') {
      if (progress >= 90) return 'bg-green-100';
      if (progress >= 70) return 'bg-blue-100';
      return 'bg-purple-100';
    } else {
      if (progress >= 90) return 'bg-green-500';
      if (progress >= 70) return 'bg-blue-500';
      return 'bg-purple-500';
    }
  };