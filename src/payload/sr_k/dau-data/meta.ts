import type { Metadata } from "next";

const payload: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL ?? "http://localhost:3000"),
  title: "김태현 | 다우데이타 지원 경력기술서",
  description:
    "Frontend / Web Platform Engineering, SDK, WebRTC, Test Automation, CI/CD, AI-assisted Development 경험을 중심으로 정리한 다우데이타 지원용 경력기술서",
  openGraph: {
    title: "김태현 | 다우데이타 지원 경력기술서",
    description:
      "Frontend / Web Platform Engineering, SDK, WebRTC, Test Automation, CI/CD, AI-assisted Development 경험",
    images: [
      {
        url: "/images/Profile.png",
        width: 600,
        height: 300,
        alt: "김태현 경력기술서",
      },
    ],
    type: "profile",
    firstName: "Taehyeon",
    lastName: "Kim",
    gender: "male",
  },
};

export default payload;
