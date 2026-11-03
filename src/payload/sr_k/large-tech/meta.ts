import type { Metadata } from "next";

const payload: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL ?? "http://localhost:3000"),
  title: "김태현 | Frontend / Fullstack Engineer",
  description: "공통 UI와 SDK 설계, 부서 간 규격 협의 및 웹 서비스 운영 경험",
  openGraph: {
    title: "김태현 | Frontend / Fullstack Engineer",
    description: "공통 UI와 SDK 설계, 부서 간 규격 협의 및 웹 서비스 운영 경험",
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
