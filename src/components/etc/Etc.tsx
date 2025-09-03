import { Fragment } from "react";

import Section from "@/components/common/Section";
import Header5 from "@/components/common/Header5";
import UnorderedList, {
  UnorderedListProps
} from "@/components/common/UnorderedList";

export interface EtcPayload {
  title: string;
  descriptions: UnorderedListProps["items"];
}
export interface EtcProps {
  etcs: EtcPayload[];
}

function Etc({ etcs }: EtcProps) {
  return (
    <Section title="Etc.">
      {etcs.map(({ title, descriptions }) => (
        <Fragment key={title}>
          <Header5>{title}</Header5>
          <UnorderedList className="mb-4" items={descriptions} />
        </Fragment>
      ))}
    </Section>
  );
}

export default Etc;
