import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { skills } from "@/configs/skillsConfig"

export function SkillsComponent() {
  return (
    <div className="w-3/5 mx-auto bg-white p-20 rounded-2xl shadow-lg mt-60 flex flex-col items-center">
      <div className="bg-black rounded-3xl shadow-lg mb-8 p-2">
        <p className="text-sm font-bold text-center text-white">我掌握的</p>
        </div>

      <BentoGrid className="max-w-4xl mx-auto">
        {skills.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={<Skeleton path={item.iconPath}/>}
            className={`${i === 3 || i === 6 ? "md:col-span-2" : ""} `}
          />
        ))}
      </BentoGrid>
    </div>
  );
}


const Skeleton: React.FC<{ path: string }> = ({ path }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-white from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <div className="flex justify-center items-center w-full h-full">
      <img
        src={path}
        alt="Skeleton Image"
        className="object-contain w-full h-full rounded-xl"
      />
    </div>
  </div>
);
