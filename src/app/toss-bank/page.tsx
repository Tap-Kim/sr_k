import Profile from "@/components/profile/Profile";
import Introduce from "@/components/introduce/Introduce";
import Skill from "@/components/skill/Skill";
import WorkExperience from "@/components/work-experience/WorkExperience";
import OtherExperience from "@/components/other-experience/OtherExperience";
import Education from "@/components/education/Education";
import Etc from "@/components/etc/Etc";

import {
  metaPayload,
  profilePayload,
  introduceTossBankPayload,
  skillPayload,
  workExperiencePayload,
  otherExperiencePayload,
  educationPayload,
  etcPayload,
} from "@/payload/sr_k";

export function generateMetadata() {
  return metaPayload;
}

export default function Home() {
  return (
    <>
      <Profile info={profilePayload} />
      <Introduce introduces={introduceTossBankPayload} />
      <WorkExperience careers={workExperiencePayload} />
      <Skill list={skillPayload} />
      <OtherExperience experiences={otherExperiencePayload} />
      <Education educations={educationPayload} />
      <Etc etcs={etcPayload} />
    </>
  );
}
