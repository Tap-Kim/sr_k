import type { Metadata } from "next";

const payload: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL ?? "http://localhost:3000"),
  title: "",
  description: "",
  openGraph: {
    title: "",
    description: "",
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
