import type { SkillPayload } from "@/components/skill/Skill";

const payload: SkillPayload[] = [
  {
    category: "Frontend",
    list: [
      "Javascript, Typescript, React,  Next.js",
      "Recoil, Zustand, Tanstack-Query, Redux(+saga)",
      "Styled-components, Emotion, SCSS",
    ],
  },
  {
    category: "Backend",
    list: ["Java Spring, Node.js, PostgreSQL"],
  },
  {
    category: "Etc",
    list: ["Radix, StoryBook, Turborepo, Expo(RN)"],
  },
];

export default payload;
