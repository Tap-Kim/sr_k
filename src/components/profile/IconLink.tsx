import { mergeClassNames } from "@/utils/mergeClassNames";
import Anchor from "@/components/common/Anchor";

export interface IconLinkProps {
  className?: string;
  icon: React.JSX.ElementType;
  link: string;
  text?: string;
}

function IconLink({ className, icon: Icon, link, text }: IconLinkProps) {
  return (
    <div className={mergeClassNames("flex items-center gap-4", className)}>
      <Icon
        className="fill-foreground linear-transition-color"
        width={16}
        height={16}
      />
      <Anchor target="_blank" href={link}>{text ?? link}</Anchor>
    </div>
  );
}

export default IconLink;
