"use client";
import { PinContainer } from "../ui/3d-pin";

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
    <div className="w-full flex items-center justify-center">
      <PinContainer title={title} href={link}>
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 min-w-[18rem] max-w-[30rem] w-full">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-black">
            {projectName}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-black">{description}</span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500">
            <img
              src={path}
              className="mx-auto my-auto h-auto w-full object-cover rounded-xl group-hover/card:shadow-xl"
            />
          </div>
        </div>
      </PinContainer>
    </div>
  );
}

