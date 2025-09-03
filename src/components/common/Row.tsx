import { mergeClassNames } from "@/utils/mergeClassNames";

export interface RowProps {
  className?: string;
  first?: React.ReactNode;
  last: React.ReactNode;
}

function Row({ className, first, last }: RowProps) {
  return (
    <div className={mergeClassNames("flex gap-10", className)}>
      {first && <div className="w-48">{first}</div>}
      <div className="flex-1">{last}</div>
    </div>
  );
}

export default Row;
