import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

// src/components/ui/bento-grid.tsx
export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  proficiency, // 新增熟练度属性
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  proficiency?: number; // 新增类型定义
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-gray-200 border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        {/* 进度条容器 */}
        <div className="w-full bg-gray-300 rounded-full h-2.5 dark:bg-gray-700 mt-3">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full transition-all duration-500"
            style={{ width: `${proficiency}%` }}
            role="progressbar"
            aria-valuenow={proficiency}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
        {/* 可选保留文字描述 */}
        {description && (
          <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300 mt-2">
            {description}
          </div>
        )}
      </div>
    </div>
  );
};