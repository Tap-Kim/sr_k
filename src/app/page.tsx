import Profile from "@/components/profile/Profile";
import Introduce from "@/components/introduce/Introduce";
import Skill from "@/components/skill/Skill";
import WorkExperience from "@/components/work-experience/WorkExperience";
import OtherExperience from "@/components/other-experience/OtherExperience";
import Education from "@/components/education/Education";
import Etc from "@/components/etc/Etc";

import metaPayload from "@/payload/meta";
import profilePayload from "@/payload/profile";
import introducePayload from "@/payload/introduce";
import skillPayload from "@/payload/skill";
import workExperiencePayload from "@/payload/work-experience";
import otherExperiencePayload from "@/payload/other-experience";
import educationPayload from "@/payload/education";
import etcPayload from "@/payload/etc";

export function generateMetadata() {
  return metaPayload;
}

export default function Home() {
  return (
    <>
      <Profile info={profilePayload} />
      <Introduce introduces={introducePayload} />
      <Skill list={skillPayload} />
      <WorkExperience careers={workExperiencePayload} />
      <OtherExperience experiences={otherExperiencePayload} />
      <Education educations={educationPayload} />
      <Etc etcs={etcPayload} />
    </>
  );
}
