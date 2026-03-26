import type { CareerPayload } from "@/components/work-experience/WorkExperience";

type DiscoveredArray<T> = T extends Array<infer R> ? R : never;

type Experience = DiscoveredArray<CareerPayload["experiences"]>;

type PositionExpeirence = DiscoveredArray<Experience["experience"]>;

// ─── 이스트소프트 ────────────────────────────────────────────────────────────
const EST_ENGINEER_0: PositionExpeirence = {
  title: "Perso Interactive - SDK 개발 및 유지보수",
  text: "Interactive SDK",
  link: "https://perso.ai/interactive-sdk",
  contents: [
    {
      bold: true,
      value: "",
    },
    [""],
  ],
};

const EST_ENGINEER_1: PositionExpeirence = {
  title: "Perso Studio - AI 스튜디오 영상 편집 개발 및 파트 리드",
  text: "AI STUDIO",
  link: "https://perso.ai/",
  techStack: ["React", "Typescript", "Recoil", "styled-components"],
  contents: [
    {
      bold: true,
      value:
        "슬라이드 조회 시 렌더링 병목과 Long Task 누적으로 인한 OOM 개선 및 최적화 작업",
    },
    [
      "각 컴포넌트 핸들러의 이벤트 Task 누적에 의한 Long Task 성능 문제 정의",
      "디바운싱을 통해 이벤트를 지연 처리하고 props 메모이징 처리",
      "Long Task 현상과 OOM 해결 및 40% 속도 개선",
    ],
    {
      bold: true,
      value:
        "슬라이드 제어 영역의 무분별한 리렌더링과 커스텀 훅 순환 참조 개선 및 최적화 작업",
    },
    [
      "슬라이드 개수만큼 참조된 커스텀 훅에 의한 전체 리렌더링 발생 문제 정의",
      "useRecoilCallback과 props 메모이징으로 리스트 전체 최적화",
      "Task 당 속도를 최대 90% 단축하여 UX 개선 (평균 약 1.4s→0.3s)",
    ],
    {
      bold: true,
      value: "슬라이드당 다량의 TTS 요청 프로세스 단순화 제안 및 최적화 작업",
    },
    [
      "TTS 요청을 다건 → 단건 처리 구조로 프로세스 단순화 제안하여 네트워크 부하 개선",
      "API와 TTS 서버 통신 구조 재설계에 참여, 레거시 프로세스 대응을 위해 프론트엔드에서 이원화 작업 설계",
    ],
  ],
};

const EST_ENGINEER_2: PositionExpeirence = {
  title: "Perso 포탈/Dubbing 개발",
  text: "AI Dubbing",
  link: "https://perso.ai/ai-dubbing",
  techStack: ["Next.js", "Typescript", "Zustand", "Radix", "styled-components"],
  contents: [
    {
      bold: true,
      value:
        "짧은 기간 내 개발 진행을 위해 Perso 포탈 서비스의 아키텍처 구성과 개발 환경 및 전략 수립",
    },
    [
      "모노레포 구조 제안, 터보레포 보일러 플레이트 도입과 개발 환경 규격화 정의",
      "git flow 전략 수립하여 컨벤션 정의 및 문서화, JIT 패키지 방식 제안",
    ],
    {
      bold: true,
      value: "다국어 자동화 프로세스 적용으로 생산성 증대와 휴먼 에러 개선",
    },
    [
      "다국어 추출 라이브러리(ms-excel-intl) 개발. 번역 키 추출, 정렬, 정합성 검증 자동화로 소통 비용 절감",
    ],
  ],
};

const EST_ENGINEER_3: PositionExpeirence = {
  title: "PDS(Perso Design System) 디자인 시스템 개발",
  text: "Design System",
  link: "https://orange-mushroom-039830a00.4.azurestaticapps.net/",
  techStack: ["Next.js", "Typescript", "Zustand", "Radix", "styled-components"],
  contents: [
    {
      bold: true,
      value:
        "서비스 도메인에 대한 브랜드 이미지와 UI/UX/DX 증대를 위해 디자인 시스템 도입을 적극 주도",
    },
    [
      "Slot 구조와 다형성 API 설계하여 재사용성과 커스터마이징 대응 개선",
      "2개월 만에 Primitive 컴포넌트 15종과 합성 컴포넌트 8종을 구현 배포",
      "Headless 기반 Radix UI 도입, Storybook MDX 활용한 문서화 및 디자인 소통 창구 운영",
    ],
  ],
};

const EST_ENGINEER_4: PositionExpeirence = {
  title: "알툴즈 리뉴얼 개발",
  text: "Altools",
  link: "https://altools.co.kr/",
  techStack: ["Next.js", "Typescript", "Recoil", "SCSS"],
  contents: [
    {
      bold: true,
      value: "구버전 알툴즈 웹서비스 리뉴얼 프로젝트 구축 및 개발 주도",
    },
    [
      "SSR/SSG/ISR 전략 혼합 적용으로 초기 응답 시간 단축",
      "Yarn Berry 마이그레이션, 번들링 최적화와 standalone 적용으로 빌드 시간 50% 단축",
      "Atomic/VAC 디자인 패턴 도입 후 개발/디자인 병렬 프로세스 구축",
    ],
  ],
};

const EST_EXPERIENCES: Experience = {
  position: "Frontend Engineer",
  start: new Date("2022-04"),
  experience: [
    EST_ENGINEER_0,
    EST_ENGINEER_1,
    EST_ENGINEER_2,
    EST_ENGINEER_3,
    EST_ENGINEER_4,
  ],
};

const EST_PAYLOAD: CareerPayload = {
  name: "이스트소프트",
  start: new Date("2022-04"),
  description:
    "Perso AI SDK/플랫폼 서비스와 알툴즈 서비스 웹 프론트엔드 구축 및 개발",
  experiences: [EST_EXPERIENCES],
};

// ─── 더존비즈온 ──────────────────────────────────────────────────────────────

const DOUZNE_DEVELOPER_1: PositionExpeirence = {
  title: "위하고 경비 청구 서비스(개인/법인 카드) 통합 모바일 개발",
  techStack: ["Expo(RN)", "Typescript", "Redux(+Saga)"],
  contents: [
    {
      bold: true,
      value: "웹 서비스 대비 모바일 서비스 성능 및 사용성 개선",
    },
    [
      "redux-saga 미들웨어 레벨의 비동기 프로세스 통합 설계",
      "웹 서비스 대비 전체적으로 모바일 앱 성능 60% 개선",
    ],
    { bold: true, value: "첫 초기화 과정에서 발생하는 병목 현상 개선" },
    ["요청 흐름 재구성, redux-saga 병렬 처리로 전환해 초기화 속도 약 30% 개선"],
  ],
};

const DOUZNE_DEVELOPER_2: PositionExpeirence = {
  title: "위하고 L(법률 서비스) 및 백오피스 시스템 개발",
  techStack: [
    "React",
    "Redux(+Saga)",
    "Java Spring",
    "PostgreSQL",
    "ElasticSearch",
  ],
  contents: [
    { bold: true, value: "3개의 법률 서비스 운영과 시스템 설계 및 개발 주도" },
    [
      "법률 전문가 매칭 서비스 개발 및 법률 카테고리별 서비스 개발 주도",
      "MSA 설계 및 DB 설계를 통한 서비스 도메인 분리 및 데이터 관리 최적화",
      "ElasticSearch 적용하여 검색 기능의 사용자 경험 개선",
    ],
  ],
};

const DOUZNE_EXPERIENCES_1: Experience = {
  position: "Fullstack developer",
  start: new Date("2018-05"),
  end: new Date("2022-03"),
  experience: [DOUZNE_DEVELOPER_1, DOUZNE_DEVELOPER_2],
};

const DOUZNE_PAYLOAD: CareerPayload = {
  name: "더존비즈온",
  start: new Date("2018-05"),
  end: new Date("2022-03"),
  description: "클라우드 웹 플랫폼 '위하고' 웹 서비스 풀스택 개발",
  experiences: [DOUZNE_EXPERIENCES_1],
};

const payload: CareerPayload[] = [EST_PAYLOAD, DOUZNE_PAYLOAD];

export default payload;
