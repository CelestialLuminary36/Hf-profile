import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import java from "../../assets/svg/java-svgrepo-com.svg";
import spring from "@/assets/svg/spring.svg"
import mysql from "@/assets/svg/mysql.svg"
import golang from "@/assets/svg/golang.svg"
import redis from "@/assets/svg/redis.svg"
import study from "@/assets/svg/study.svg"
import react from "@/assets/react.svg"

export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto mt-64">
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
  );
}
const Skeleton: React.FC<{ path: string }> = ({ path }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
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
    description:
      "完全掌握",
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
