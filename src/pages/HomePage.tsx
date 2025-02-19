import { FilmsComponent } from '@/components/films/Films';
import { GamesComponent } from '@/components/games/Games';
import { ProfilesComponent } from '@/components/profile/Profiles'
import { ProjectsComponent } from '@/components/projects/Projects';
import { SkillsComponent } from '@/components/skills/Skills'


function HomePage() {
  return (
    <div className="bg-gray-100">
      <ProfilesComponent />
      <SkillsComponent />
      <ProjectsComponent />
      <GamesComponent />
      <FilmsComponent />
      <div className='h-40'></div>
    </div>
  );
}


export default HomePage
