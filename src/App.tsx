import './App.css'

import { OrbitingCirclesDemo } from './components/profile/ProfileCircle'
import { ProjectCard } from './components/projects/ProjectCard';
import { BentoGridDemo } from './components/skills/Skills'

function App() {
  return (
    <div className="bg-gray-100">
      {/* 内容将变得可滚动 */}
      <OrbitingCirclesDemo />
      <BentoGridDemo />
      <ProjectCard />
    </div>
  );
}


export default App
