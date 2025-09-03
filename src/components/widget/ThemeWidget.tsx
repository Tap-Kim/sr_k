"use client";

import useToggleTheme from "@/hooks/useToggleTheme";
import { mergeClassNames } from "@/utils/mergeClassNames";

import Sun from "@/svgs/sun.svg";
import Moon from "@/svgs/moon.svg";

export interface ThemeWidgetProps {
  className?: string;
}

function ThemeWidget({ className }: ThemeWidgetProps) {
  const toggleTheme = useToggleTheme();

  return (
    <div
      className={mergeClassNames(
        "w-12 h-12 bg-background rounded-lg overflow-hidden shadow-[1px_2px_6px_0px] shadow-black linear-transition-color",
        className
      )}
      onClick={() => toggleTheme()}
    >
      <div className="absolute w-12 h-12 flex justify-center items-center origin-[50%_100%] animate-rise dark:animate-set">
        <Sun className="fill-yellow-400" />
      </div>
      <div className="absolute w-12 h-12 flex justify-center items-center origin-[50%_100%] animate-set dark:animate-rise">
        <Moon className="fill-yellow-400" />
      </div>
    </div>
  );
}

export default ThemeWidget;
