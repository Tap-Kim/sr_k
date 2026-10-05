import type { SkillPayload } from "@/components/skill/Skill";

const payload: SkillPayload[] = [
  {
    category: "Web Engineering",
    list: [
      "Javascript, Typescript, React, Next.js",
      "WebRTC, Browser API, Recoil, Zustand, Tanstack-Query, Redux(+saga)",
      "Styled-components, Tailwind, SCSS",
    ],
  },
  {
    category: "Platform / SDK",
    list: [
      "SDK Architecture, Public API Design, npm package, Rollup",
      "pnpm workspace, Turborepo, Monorepo, Developer Experience",
    ],
  },
  {
    category: "Quality Engineering",
    list: [
      "Playwright, Jest, React Testing Library, MSW",
      "BDD, E2E, Cross-browser Verification, CI Automation",
    ],
  },
  {
    category: "Infrastructure",
    list: [
      "Docker, Github Actions, Azure, AKS, ACR, Static Web Apps",
    ],
  },
  {
    category: "AI Engineering",
    list: [
      "LLM Integration, MCP, AI Coding Agent, Agent Orchestration",
      "Knowledge Retrieval, Context / Reflection / Feedback Workflow",
    ],
  },
  {
    category: "Backend Experience",
    list: ["Node.js, Java Spring, PostgreSQL, ElasticSearch"],
  },
];

export default payload;
