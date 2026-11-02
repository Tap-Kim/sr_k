import { Fragment } from "react";

import Section from "@/components/common/Section";
import Header4 from "@/components/common/Header4";
import UnorderedList, {
  UnorderedListProps,
} from "@/components/common/UnorderedList";
import Anchor from "@/components/common/Anchor";
import { displayPeriod, dateDiff } from "@/utils/date";

export interface OtherExperiencePayload {
  title: string;
  link?: string;
  start?: Date;
  end?: Date;
  descriptions: UnorderedListProps["items"];
}

export interface OtherExperienceProps {
  experiences: OtherExperiencePayload[];
  bulleted?: boolean;
}

function OtherExperience({ experiences, bulleted = false }: OtherExperienceProps) {
  const entries = experiences.map(({ title, link, start, end, descriptions }) => (
        <Fragment key={title}>
          <Header4 className="mb-2">
            {link ? (
              <Anchor target="_blank" href={link}>
                {title}
              </Anchor>
            ) : (
              title
            )}
          </Header4>
          {start && (
            <i className="block text-xl mb-4 text-gray-400">
              {displayPeriod(start, end)} ({dateDiff(start, end ?? new Date())})
            </i>
          )}
          {descriptions.length > 0 && <UnorderedList items={descriptions} />}
        </Fragment>
      ));

  return (
    <Section title="Other Experience">
      {bulleted ? (
        <ul className="list-disc pl-7 space-y-2">
          {entries.map((entry, index) => (
            <li key={experiences[index].title}>{entry}</li>
          ))}
        </ul>
      ) : entries}
    </Section>
  );
}

export default OtherExperience;
