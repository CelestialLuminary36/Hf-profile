import './App.css'

import { OrbitingCirclesDemo } from './components/profile/ProfileCircle'
import { ExampleProjects } from './components/projects/Projects';
import { BentoGridDemo } from './components/skills/Skills'


function App() {
  return (
    <div className="bg-gray-100">
      {/* 内容将变得可滚动 */}
      <OrbitingCirclesDemo />
      <BentoGridDemo />
      <ExampleProjects />
    </div>
  );
}


export default App
