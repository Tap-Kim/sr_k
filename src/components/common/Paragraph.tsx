import { mergeClassNames } from "@/utils/mergeClassNames";

export type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement>;

function Paragraph({ className, children, ...props }: ParagraphProps) {
  return (
    <p className={mergeClassNames("indent-0", className)} {...props}>
      {children}
    </p>
  );
}

export default Paragraph;
