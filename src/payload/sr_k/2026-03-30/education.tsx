import type { EducationPayload } from "@/components/education/Education";

const payload: EducationPayload[] = [
  {
    name: "동서대학교",
    department: "소프트웨어공학과",
    start: new Date("2012.02"),
    end: new Date("2018.02"),
    // degree: "학사(4.0 / 4.5)",
    activities: [
      {
        title: "교내외 수상경력",
        descriptions: [
          "외부 IT 창업 및 사업 아이템 공모전 수상 3건",
          "그 외 교내 개발 수상 2건",
        ],
      },
    ],
  },
  {
    name: "우신고등학교",
    start: new Date("2009.01"),
    end: new Date("2011.12"),
    degree: "인문계",
    activities: [],
  },
];

export default payload;
