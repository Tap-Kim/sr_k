import { cpSync, existsSync, mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const requestedSlug = process.argv[2];
const slug = requestedSlug ?? "latest";

if (!/^[a-z0-9][a-z0-9-]*$/.test(slug)) {
  console.error("Path must use lowercase letters, numbers, and hyphens only.");
  process.exit(1);
}

const root = process.cwd();
const appDir = resolve(root, "src/app", slug);
const payloadDir = resolve(root, "src/payload/sr_k", slug);

if (existsSync(appDir) || existsSync(payloadDir)) {
  if (!requestedSlug && slug === "latest") {
    console.log("Current resume already exists at /sr_k/latest/.");
    console.log("Route: src/app/latest/page.tsx");
    console.log("Payload: src/payload/sr_k/latest/");
    console.log("");
    console.log("To create another variant: pnpm resume:new <path>");
    process.exit(0);
  }

  console.error(`Resume path "${slug}" already exists.`);
  process.exit(1);
}

const payloadFiles = [
  "meta.ts",
  "profile.tsx",
  "introduce.tsx",
  "skill.tsx",
  "work-experience.tsx",
  "other-experience.tsx",
  "education.tsx",
  "etc.tsx",
];

mkdirSync(payloadDir, { recursive: true });
for (const file of payloadFiles) {
  cpSync(resolve(root, "src/payload", file), resolve(payloadDir, file));
}

writeFileSync(
  resolve(payloadDir, "index.ts"),
  `/**
 * /sr_k/${slug} 전용 이력서 payload snapshot.
 *
 * 생성 시점의 기본 payload를 복사해 두므로 루트(/sr_k)와 독립적으로 수정할 수 있습니다.
 */
export { default as metaPayload } from "./meta";
export { default as profilePayload } from "./profile";
export { default as introducePayload } from "./introduce";
export { default as skillPayload } from "./skill";
export { default as workExperiencePayload } from "./work-experience";
export { default as otherExperiencePayload } from "./other-experience";
export { default as educationPayload } from "./education";
export { default as etcPayload } from "./etc";
`,
);

mkdirSync(appDir, { recursive: true });
writeFileSync(
  resolve(appDir, "page.tsx"),
  `import Profile from "@/components/profile/Profile";
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
} from "@/payload/sr_k/${slug}";

export function generateMetadata() {
  return metaPayload;
}

/**
 * 독립 이력서 버전: /sr_k/${slug}/
 *
 * 이 경로의 내용은 @/payload/sr_k/${slug} 아래에서만 관리합니다.
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
`,
);

console.log(`Created /sr_k/${slug}/`);
console.log(`Route: src/app/${slug}/page.tsx`);
console.log(`Payload: src/payload/sr_k/${slug}/`);
