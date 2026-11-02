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
} from "@/payload/sr_k/toss-place-platform";

export function generateMetadata() {
  return metaPayload;
}

/**
 * 독립 이력서 버전: /sr_k/toss-place-platform/
 *
 * 이 경로의 내용은 @/payload/sr_k/toss-place-platform 아래에서만 관리합니다.
 * 기본 /sr_k/ 이력서와 서로 영향을 주지 않습니다.
 */
export default function ResumeVariantPage() {
  return (
    <>
      <ExportPdf />
      <div id="resume-content">
      <Profile info={profilePayload} />
      <Introduce introduces={introducePayload} />
      <Skill list={skillPayload} />
      <WorkExperience careers={workExperiencePayload} />
      <OtherExperience experiences={otherExperiencePayload} bulleted />
      <Education educations={educationPayload} />
      </div>
    </>
  );
}
