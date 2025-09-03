import { mergeClassNames } from "@/utils/mergeClassNames";

export type Header3Props = React.HTMLAttributes<HTMLHeadElement>;

function Header3({ className, children, ...props }: Header3Props) {
  return (
    <h3 className={mergeClassNames("text-2xl", className)} {...props}>
      {children}
    </h3>
  );
}

export default Header3;
