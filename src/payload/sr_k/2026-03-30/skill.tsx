import type { SkillPayload } from "@/components/skill/Skill";

const payload: SkillPayload[] = [
  {
    category: "Frontend",
    list: [
      "Javascript, Typescript, React,  Next.js",
      "Recoil, Zustand, Tanstack-Query, Redux(+saga)",
      "Styled-components, Tailwind, SCSS",
    ],
  },
  {
    category: "Backend",
    list: ["Node.js, PostgreSQL, Java Spring"],
  },
  {
    category: "Etc",
    list: ["Radix, StoryBook, Turborepo, WebRTC", "Expo(RN), Jest"],
  },
];

export default payload;
