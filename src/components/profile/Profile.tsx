import Section from "@/components/common/Section";
import Row from "@/components/common/Row";

import IconLink, { IconLinkProps } from "./IconLink";

export interface ProfilePayload {
  name: string;
  profileImage: string;
  contacts: Array<Omit<IconLinkProps, "className">>;
}

export interface ProfileProps {
  info: ProfilePayload;
}

function Profile({ info }: ProfileProps) {
  return (
    <Section>
      <Row
        className="max-sm:flex-col max-sm:items-center"
        last={
          <div className="h-[100%] flex flex-col justify-center gap-2">
            <h1 className="text-4xl mt-6 mb-6">{info.name}</h1>
            <div className="flex flex-row gap-5">
              {info.contacts.map(({ icon, link, text }, index) => (
                <IconLink
                  className={index === 0 ? "mt-auto" : ""}
                  key={text}
                  icon={icon}
                  link={link}
                  text={text}
                />
              ))}
            </div>
          </div>
        }
      />
    </Section>
  );
}

export default Profile;
