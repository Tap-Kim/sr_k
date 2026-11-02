import type { OtherExperiencePayload } from "@/components/other-experience/OtherExperience";

const payload: OtherExperiencePayload[] = [
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
