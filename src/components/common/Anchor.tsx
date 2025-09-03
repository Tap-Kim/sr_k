import { mergeClassNames } from "@/utils/mergeClassNames";

export type AnchorProps = React.HTMLProps<HTMLAnchorElement>;

function Anchor({ className, children, ...props }: AnchorProps) {
  return (
    <a
      className={mergeClassNames(
        "text-gray-500 underline decoration-gray-400 underline-offset-4 linear-transition-color",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}

export default Anchor;
