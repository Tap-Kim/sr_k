import type { ProfilePayload } from "@/components/profile/Profile";

import Github from "@/svgs/github.svg";
import RSS from "@/svgs/rss.svg";

const payload: ProfilePayload = {
  name: "김태현",
  profileImage: "/sr_k/images/Profile.png",
  contacts: [
    {
      icon: Github,
      link: "https://github.com/Tap-Kim",
      text: "GitHub",
    },
    {
      icon: RSS,
      link: "https://developertap.github.io/dev-tap/",
      text: "개발 블로그",
    },
  ],
};

export default payload;
