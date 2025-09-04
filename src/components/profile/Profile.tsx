import Section from "@/components/common/Section";
import Row from "@/components/common/Row";
// import ProfileImg from "@/assets/images/Profile.png";

import IconLink, { IconLinkProps } from "./IconLink";
import Image from "next/image";

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
        first={
          <Image
            className="max-w-[12rem]"
            src={info.profileImage}
            width={192}
            height={192}
            alt="Profile Image"
            style={{ borderRadius: "50%" }}
          />
        }
        last={
          <div className="h-[100%] flex flex-col justify-center gap-2">
            <h1 className="text-4xl mt-6 mb-6">{info.name}</h1>
            <div className="flex flex-row gap-[0.75rem] max-sm:gap-[1rem]">
              {info.contacts.map(({ icon, link, text }, index) => (
                <IconLink
                  className={`gap-1.5 max-sm:gap-[0.5rem] ${
                    index === 0 ? "mt-auto" : ""
                  }`}
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
