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
  introducePayload,
  skillPayload,
  workExperiencePayload,
  otherExperiencePayload,
  educationPayload,
  etcPayload,
} from "@/payload/sr_k/dau-data";

export function generateMetadata() {
  return metaPayload;
}

/**
 * 독립 이력서 버전: /sr_k/dau-data/
 *
 * 이 경로의 내용은 @/payload/sr_k/dau-data 아래에서만 관리합니다.
 * 기본 /sr_k/ 이력서와 서로 영향을 주지 않습니다.
 */
export default function ResumeVariantPage() {
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
