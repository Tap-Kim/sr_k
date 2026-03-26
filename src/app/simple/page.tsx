import Profile from "@/components/profile/Profile";
import Introduce from "@/components/introduce/Introduce";
import Skill from "@/components/skill/Skill";
import WorkExperience from "@/components/work-experience/WorkExperience";
import Education from "@/components/education/Education";
import Etc from "@/components/etc/Etc";

import {
  metaPayload,
  profilePayload,
  introducePayload,
  skillPayload,
  workExperiencePayload,
  educationPayload,
  etcPayload,
} from "@/payload/sr_k/simple";

export function generateMetadata() {
  return {
    ...metaPayload,
    title: `${metaPayload.title} (Simple)`,
  };
}

/**
 * 심플 이력서 버전 (/sr_k/simple)
 *
 * - other-experience 섹션 제외
 * - payload는 @/payload/sr_k/simple 에서 관리
 * - dev 환경에서는 /simple 경로로 접근
 */
export default function SimplePage() {
  return (
    <>
      <Profile info={profilePayload} />
      <Introduce introduces={introducePayload} />
      <Skill list={skillPayload} />
      <WorkExperience careers={workExperiencePayload} />
      <Education educations={educationPayload} />
      <Etc etcs={etcPayload} />
    </>
  );
}
