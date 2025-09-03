import { mergeClassNames } from "@/utils/mergeClassNames";

export type Header4Props = React.HTMLAttributes<HTMLHeadElement>;

function Header4({ className, children, ...props }: Header4Props) {
  return (
    <h4 className={mergeClassNames("text-xl", className)} {...props}>
      {children}
    </h4>
  );
}

export default Header4;
