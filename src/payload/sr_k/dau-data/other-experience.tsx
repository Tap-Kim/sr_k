import type { OtherExperiencePayload } from "@/components/other-experience/OtherExperience";

const payload: OtherExperiencePayload[] = [
  {
    title: "AI-assisted Engineering — ai-brain / codex-bridge",
    link: "https://github.com/Tap-Kim/codex-bridge",
    descriptions: [
      "Claude·Codex 등 AI coding agent가 프로젝트의 결정·실패·해결책을 재사용할 수 있도록 MCP 기반 장기 지식 시스템(ai-brain) 구축",
      "Retrieval → Context → Observation → Reflection → Consolidation → Feedback으로 이어지는 knowledge lifecycle을 운영하고, 28개 repository에서 약 3,800개 active knowledge·누적 13,000회 이상의 retrieval을 계측",
      "codex-bridge에 DAG 기반 task scheduling, bounded parallel execution, Git worktree 격리, verification, deterministic integration, cancellation/recovery 구조를 적용",
      "AI 도구 사용 자체보다 결과를 검증하고 재현 가능한 개발 workflow로 만드는 것을 목표로 지속 개선",
    ],
  },
  {
    title: "Korean FE Article - FE 아티클 번역 모임",
    link: "https://velog.io/@tap_kim/posts",
    descriptions: ["총 18글 번역 작성"],
    start: new Date("2024-01"),
  },
  {
    title: "글또(9~10기 참여) - 주기적으로 글을 쓰는 모임",
    link: "https://developertap.github.io/dev-tap/Tech/",
    descriptions: ["총 21글 작성"],
    start: new Date("2023-01"),
    end: new Date("2025-04"),
  },
  {
    title: "Storybook - 오픈소스 기여",
    link: "https://github.com/storybookjs/storybook/pull/25219",
    descriptions: [""],
  },
];

export default payload;
