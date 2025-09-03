import Section from "@/components/common/Section";
import Paragraph from "@/components/common/Paragraph";

export type IntroducePayload = string;

export interface IntroduceProps {
  introduces: IntroducePayload[];
}

function Introduce({ introduces }: IntroduceProps) {
  return (
    <Section title="Introduce" className="[&>p]:mb-4">
      {introduces.map((item) => (
        <Paragraph key={item?.toString()}>{item}</Paragraph>
      ))}
    </Section>
  );
}

export default Introduce;
