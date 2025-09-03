import { mergeClassNames } from "@/utils/mergeClassNames";

export type Header5Props = React.HTMLAttributes<HTMLHeadElement>;

function Header5({ className, children, ...props }: Header5Props) {
  return (
    <h5 className={mergeClassNames("text-lg", className)} {...props}>
      {children}
    </h5>
  );
}

export default Header5;
