import type { SkillPayload } from "@/components/skill/Skill";

const payload: SkillPayload[] = [
  {
    category: "Frontend",
    list: [
      "React,  Next.js, Javascript, Typescript",
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
    list: ["Radix, StoryBook, Truborepo, Expo(RN)"],
  },
];

export default payload;
