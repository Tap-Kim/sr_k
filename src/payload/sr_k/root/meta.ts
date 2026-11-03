import type { Metadata } from "next";

const payload: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL ?? "http://localhost:3000"),
  title: "김태현 | Frontend Platform Engineer",
  description: "SDK 공개, 디자인 시스템, CI와 개발 프로세스의 설계 판단 및 개선 경험",
  openGraph: {
    title: "김태현 | Frontend Platform Engineer",
    description: "SDK 공개, 디자인 시스템, CI와 개발 프로세스의 설계 판단 및 개선 경험",
    images: [
      {
        url: "/images/Profile.png",
        width: 600,
        height: 300,
        alt: "Page preview image",
      },
    ],
    type: "profile",
    firstName: "Taehyeon",
    lastName: "Kim",
    gender: "male",
  },
};

export default payload;
