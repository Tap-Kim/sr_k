import { mergeClassNames } from "@/utils/mergeClassNames";
import { ReactNode } from "react";

export interface BadgeProps {
  className?: string;
  children: ReactNode;
}

function Badge({ className, children }: BadgeProps) {
  return (
    <span
      className={mergeClassNames(
        "inline-block italic font-normal whitespace-nowrap text-[0.75rem] pl-[0.4rem] pr-[0.5rem] bg-blue-600 text-background rounded-[0.4rem] linear-transition-color",
        className
      )}
    >
      {children}
    </span>
  );
}

export default Badge;
