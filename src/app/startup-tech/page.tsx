import Profile from "@/components/profile/Profile";
import Introduce from "@/components/introduce/Introduce";
import Skill from "@/components/skill/Skill";
import WorkExperience from "@/components/work-experience/WorkExperience";
import OtherExperience from "@/components/other-experience/OtherExperience";
import Education from "@/components/education/Education";
import ExportPdf from "./ExportPdf";

import {
  metaPayload,
  profilePayload,
  introducePayload,
  skillPayload,
  workExperiencePayload,
  otherExperiencePayload,
  educationPayload,
} from "@/payload/sr_k/startup-tech";

export function generateMetadata() {
  return metaPayload;
}

export default function Home() {
  return (
    <>
      <ExportPdf />
      <div id="resume-content">
      <Profile info={profilePayload} />
      <Introduce introduces={introducePayload} />
      <WorkExperience careers={workExperiencePayload} />
      <Skill list={skillPayload} />
      <OtherExperience experiences={otherExperiencePayload} bulleted />
      <Education educations={educationPayload} />
      </div>
    </>
  );
}
