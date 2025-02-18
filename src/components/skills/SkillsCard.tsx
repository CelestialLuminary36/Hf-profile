"use client";
import { PinContainer } from "../ui/3d-pin";
import react from "@/assets/svg/skills/react.svg";

// 使用 TypeScript 来定义组件的 props 类型
interface AnimatedPinProps {
  projectName: string;
  description: string;
  path: string;
  link: string;
  title: string;
}

export function AnimatedPin({
  projectName,
  description,
  path,
  link,
  title,
}: AnimatedPinProps) {
  return (
    <div className="h-[30rem] w-full flex items-center justify-center ">
      <PinContainer title={title} href={link}>
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 min-w-[24rem] min-h-[24rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-black">
            {projectName}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-black ">{description}</span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
            <img src={path} height="1000" width="1000" className="mx-auto my-auto h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl" />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}
