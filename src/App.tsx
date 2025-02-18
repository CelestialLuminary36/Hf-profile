import './App.css'
import { ButtomDock } from '@/components/docks/ButtomDock';
import { FilmTelevisionMarquee } from '@/components/filmTelevisions/FilmTelevision';
import { GameMarquee3D } from '@/components/games/Games';

import { OrbitingCirclesDemo } from '@/components/profile/ProfileCircle'
import { ExampleProjects } from '@/components/projects/Projects';
import { BentoGridDemo } from '@/components/skills/Skills'
import { AnimatedPin } from './components/skills/SkillsCard';
import { MyProjects } from './components/skills/SkillsTemplate';


function App() {
  return (
    <div className="bg-gray-100">
      {/* 内容将变得可滚动 */}
      <OrbitingCirclesDemo />
      <BentoGridDemo />
      <ExampleProjects />
      <GameMarquee3D />
      <FilmTelevisionMarquee />
      <MyProjects />
      <ButtomDock />
      <div className='h-40'></div>
    </div>
  );
}


export default App
