import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import java from "../../assets/svg/skills/java.svg";
import spring from "@/assets/svg/skills/spring.svg";
import mysql from "@/assets/svg/skills/mysql.svg";
import golang from "@/assets/svg/skills/golang.svg";
import redis from "@/assets/svg/skills/redis.svg";
import study from "@/assets/svg/skills/study.svg";
import react from "@/assets/svg/skills/react.svg";

export function BentoGridDemo() {
  return (
    <div className="w-3/5 mx-auto bg-white p-20 rounded-2xl shadow-lg mt-60 flex flex-col items-center">
      {/* 技术栈标题 */}
      <div className="bg-black rounded-3xl shadow-lg mb-8 p-2">
        <p className="text-sm font-bold text-center text-white">我掌握的</p>
        </div>

      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
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

const items = [
  {
    title: "Java",
    description: "Java之父",
    header: <Skeleton path={java} />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Golang",
    description: "Go语言爱好者",
    header: <Skeleton path={golang} />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "MySQL",
    description: "绝对掌控",
    header: <Skeleton path={mysql} />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Spring框架",
    description: "完全掌握",
    header: <Skeleton path={spring} />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Redis",
    description: "已经拿捏",
    header: <Skeleton path={redis} />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "React",
    description: "熟练使用",
    header: <Skeleton path={react} />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Skills",
    header: <Skeleton path={study} />,
  },
];
