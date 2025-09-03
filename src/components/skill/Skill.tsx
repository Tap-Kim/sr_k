import { Fragment } from "react";

import Section from "@/components/common/Section";
import Header4 from "@/components/common/Header4";
import UnorderedList, {
  UnorderedListProps
} from "@/components/common/UnorderedList";

export interface SkillPayload {
  category: string;
  list: UnorderedListProps["items"];
}

export interface SkillProps {
  list: SkillPayload[];
}

function Skill({ list }: SkillProps) {
  return (
    <Section title="Skill">
      {list.map(({ category, list }) => (
        <Fragment key={category}>
          <Header4 className="mb-2">{category}</Header4>
          <UnorderedList
            className="[&:nth-last-child(n+2)]:mb-4"
            items={list}
          />
        </Fragment>
      ))}
    </Section>
  );
}

export default Skill;
