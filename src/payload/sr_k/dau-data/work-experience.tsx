import type { CareerPayload } from "@/components/work-experience/WorkExperience";

type DiscoveredArray<T> = T extends Array<infer R> ? R : never;
type Experience = DiscoveredArray<CareerPayload["experiences"]>;
type PositionExperience = DiscoveredArray<Experience["experience"]>;

const EST_SDK: PositionExperience = {
  title: "Perso Interactive SDK 개발",
  text: "Perso Interactive SDK",
  link: "https://www.npmjs.com/package/perso-interactive-sdk-web",
  techStack: ["Typescript", "WebRTC", "Rollup", "Turborepo"],
  contents: [
    {
      bold: true,
      value:
        "VanillaJS 빌드 파일 제공 방식의 타입 안전성·버전 관리 문제를 식별하고 TypeScript npm 패키지로 전환",
    },
    [
      "Rollup 기반 ESM·CJS 다중 포맷 빌드 및 타입 번들링으로 타입·배포 안정성 확보",
      "Github Actions CI/CD와 npm publish 자동화로 버전·배포 관리 효율화",
      "client/server 진입점을 분리해 브라우저 전용 API가 잘못된 환경에서 참조되는 문제를 구조적으로 방지",
    ],
    {
      bold: true,
      value:
        "SDK 내부 transport 복잡도를 public API 밖으로 숨기고 사용자가 이해해야 할 개념을 줄이는 방향으로 인터페이스 개선",
    },
    [
      "분리되어 있던 STF/TTS 처리 경로를 processSTF·processTTSTF 중심으로 정리하고 streaming 기반 처리 흐름을 일관된 인터페이스로 통합",
      "레거시 public surface를 줄여 구현 세부사항보다 사용 시나리오 중심의 API를 제공하도록 개선",
      "VanillaJS·TypeScript·Svelte 등 다양한 사용 환경의 example/guide를 제공해 SDK 온보딩과 검증 비용 절감",
    ],
    {
      bold: true,
      value:
        "분산된 SDK·샘플·도구를 pnpm workspace·Turborepo 모노레포로 통합하고 BDD 기반 검증 체계 구축",
    },
    [
      "Turborepo dependsOn으로 패키지 빌드 순서를 선언하고 변경 패키지만 재빌드해 소스 기준 디버깅 가능하도록 개선",
      "Prettier·TypeScript·ESLint 공통 설정과 기능별 Playground·성능 지표 도구를 구성해 개발 기준 통일",
      "기능 명세를 시나리오 단위로 정의하고 단위·통합 테스트를 계층화해 SDK 회귀 리스크 최소화",
    ],
  ],
};

const EST_WEB_SDK_APP: PositionExperience = {
  title: "실시간 Web SDK Application 아키텍처·운영 개선",
  techStack: ["Next.js", "Typescript", "WebRTC", "Playwright", "Docker"],
  contents: [
    {
      bold: true,
      value:
        "화면 라우팅과 WebRTC 세션의 생명주기를 일치시키도록 실시간 서비스 Architecture 개선",
    },
    [
      "아바타/WebRTC가 필요한 화면과 필요하지 않은 화면의 resource lifecycle이 달라지는 문제를 분석",
      "Next.js nested layout에 session ownership을 배치해 라우트 이동 중 유지되어야 하는 연결과 해제되어야 하는 연결의 경계를 명확화",
      "UI 상태와 실시간 connection lifecycle을 하나의 전역 상태로 처리하던 복잡도를 줄이고 화면 구조와 resource scope를 일치시킴",
    ],
    {
      bold: true,
      value:
        "브라우저·WebView lifecycle 이슈를 재현 가능한 E2E 시나리오로 전환해 Cross-browser 검증",
    },
    [
      "refresh·back/forward navigation·BFCache·iOS WKWebView 등 브라우저별 차이로 발생하는 실시간 세션 문제를 분석",
      "Playwright에서 Chromium·WebKit 등 복수 엔진으로 회귀 시나리오를 검증해 브라우저 동작 차이를 코드 수준에서 고정",
      "Docker image 배포 및 CI 흐름과 함께 기능 변경이 실제 실행 환경까지 검증되는 개발 프로세스를 운영",
    ],
  ],
};

const EST_METRIC_ADMIN: PositionExperience = {
  title: "Metric Admin - Test Engineering·CI/CD 개선",
  techStack: ["Next.js", "Typescript", "Playwright", "Docker", "Azure"],
  contents: [
    {
      bold: true,
      value:
        "노후화된 Playwright E2E 환경을 인증·테스트 데이터·CI 실행 구조부터 복원해 회귀 검증 체계 재구축",
    },
    [
      "기존 E2E 테스트를 현재 서비스 흐름에 맞게 현행화하고 인증 scaffolding과 CI 연결을 정비",
      "핵심 사용자 플로우를 독립적으로 시작·검증할 수 있도록 테스트 실행 조건을 구조화",
    ],
    {
      bold: true,
      value:
        "CI 실행시간을 실측하고 실행 전략을 조정해 테스트를 개발 workflow의 실제 품질 게이트로 운영",
    },
    [
      "worker·sharding 등 E2E 실행 전략을 실측 데이터 기준으로 검토하고 CI-first 실행 모델을 정비",
      "문서 전용 변경 등 불필요한 실행을 paths filter로 분리해 변경 범위에 맞는 CI가 수행되도록 개선",
    ],
    {
      bold: true,
      value:
        "Docker image build·ACR·Azure 배포 흐름을 정리해 개발부터 release까지 이어지는 운영 구조 관리",
    },
    [
      "Docker 이미지 빌드·push와 Azure Container Registry 기반 release pipeline을 관리",
      "환경별 배포 위상과 책임 범위를 문서화해 코드 변경과 실제 운영 환경 사이의 추적 가능성을 높임",
    ],
  ],
};

const EST_STUDIO: PositionExperience = {
  title: "Perso Studio - AI 스튜디오 영상 편집 개발 및 파트 리드",
  text: "AI STUDIO",
  link: "https://perso.ai/",
  techStack: ["React", "Typescript", "Recoil", "styled-components"],
  contents: [
    {
      bold: true,
      value:
        "슬라이드 조회 시 Long Task 누적으로 인한 OOM 이슈를 분석하고 성능 최적화 주도",
    },
    [
      "컴포넌트 이벤트 Task 누적을 근본 원인으로 정의하고 디바운싱·메모이징을 적용해 Long Task와 OOM 해소",
      "메모리 사용량 50% 감소, 슬라이드 조회 속도 40% 개선으로 사용자 경험 직결 지표 개선",
    ],
    {
      bold: true,
      value:
        "Recoil Snapshot 전파·custom hook 순환 참조로 인한 리스트 전체 리렌더링 병목 분석 및 최적화",
    },
    [
      "Performance flame graph로 병목 구간을 시각화하고 팀에 공유한 뒤 기능 단위 단계별 배포 전략 수립",
      "의존 방향을 단방향으로 정리하고 useRecoilCallback·메모이징을 적용해 불필요한 구독과 리스트 리렌더링 차단",
      "Task 처리 속도를 평균 1.4s → 0.3s 수준으로 개선, 최대 약 90% 단축",
    ],
    {
      bold: true,
      value:
        "프론트엔드 문제를 Client 내부에 한정하지 않고 TTS 요청·서버 queue까지 확장해 프로세스 개선",
    },
    [
      "슬라이드당 다수 TTS 요청이 네트워크와 서버 queue 복잡도를 증가시키는 문제를 수치로 제시하고 백엔드 팀과 공론화",
      "TTS 다건 → 단건 처리 구조 재설계를 주도해 요청 수와 polling 빈도, 에러 발생 가능성을 낮춤",
    ],
  ],
};

const EST_PORTAL: PositionExperience = {
  title: "Perso 포탈/Dubbing 개발",
  text: "AI Dubbing",
  link: "https://perso.ai/ai-dubbing",
  techStack: ["Next.js", "Typescript", "Turborepo", "Storybook", "Zustand"],
  contents: [
    {
      bold: true,
      value:
        "짧은 일정의 신규 서비스 출시를 위해 모노레포 Architecture와 개발·배포 기준 수립",
    },
    [
      "프로젝트별 환경 불일치와 중복 설정을 운영 비용으로 정의하고 Turborepo 기반 구조를 도입",
      "스쿼드·스프린트·서버 환경별 배포 프로세스에 대응하는 Git Flow와 컨벤션을 문서화",
    ],
    {
      bold: true,
      value:
        "Swagger 기반 API 타입 자동 생성과 번역 자동화 도구로 반복적인 휴먼 에러를 구조적으로 제거",
    },
    [
      "Swagger schema 기반 TypeScript 타입 생성을 도입해 Frontend/Backend 명세 불일치와 커뮤니케이션 비용 감소",
      "ms-excel-intl을 개발해 번역 키 추출·정렬·정합성 검증을 자동화하고 기획팀 workflow까지 정비",
    ],
  ],
};

const EST_PDS: PositionExperience = {
  title: "PDS(Perso Design System) 디자인 시스템 개발",
  techStack: ["Next.js", "Typescript", "Radix", "Storybook"],
  contents: [
    {
      bold: true,
      value:
        "서비스 UX 일관성과 Developer Experience 개선을 위해 디자인 시스템 도입을 제안하고 2개월 내 핵심 컴포넌트 출시",
    },
    [
      "디자인팀과 handoff를 주도하고 확장성을 고려해 Slot·polymorphic API를 설계",
      "Primitive 15종·합성 컴포넌트 8종을 구현하고 Storybook을 디자인·기획·QA와의 공통 검증 창구로 운영",
    ],
  ],
};

const EST_ALTOOLS: PositionExperience = {
  title: "알툴즈 웹 서비스 리뉴얼",
  text: "Altools",
  link: "https://altools.co.kr/",
  techStack: ["Next.js", "Typescript", "Recoil", "SCSS"],
  contents: [
    {
      bold: true,
      value:
        "렌더링·빌드 병목을 Web Architecture와 build pipeline 관점에서 개선",
    },
    [
      "콘텐츠 특성에 따라 SSR/SSG/ISR을 혼합 적용하고 이미지 처리 구조 개선으로 브라우저 리소스 약 20% 절감",
      "Yarn Berry migration·bundle 최적화·standalone 적용으로 빌드 시간 50% 단축",
    ],
  ],
};

const EST_EXPERIENCES: Experience = {
  position: "Frontend Engineer",
  start: new Date("2022-04"),
  experience: [
    EST_SDK,
    EST_WEB_SDK_APP,
    EST_METRIC_ADMIN,
    EST_STUDIO,
    EST_PORTAL,
    EST_PDS,
    EST_ALTOOLS,
  ],
};

const EST_PAYLOAD: CareerPayload = {
  name: "이스트소프트",
  start: new Date("2022-04"),
  description:
    "AI 서비스의 Frontend를 중심으로 SDK·실시간 Web·Test/CI·배포 환경까지 Web Platform 영역 확장",
  experiences: [EST_EXPERIENCES],
};

const DOUZONE_MOBILE: PositionExperience = {
  title: "위하고 경비 청구 서비스 통합 모바일 개발",
  techStack: ["Expo(RN)", "Typescript", "Redux(+Saga)"],
  contents: [
    {
      bold: true,
      value:
        "동기 API 처리와 초기화 병목을 비동기·병렬 처리 구조로 재설계해 모바일 성능 개선",
    },
    [
      "redux-saga로 비동기 프로세스와 API 관리를 일원화해 기존 웹 대비 전반적인 모바일 성능 60% 개선",
      "의존 관계를 분석해 병렬화 가능한 초기화 흐름을 분리하고 초기화 속도 약 30% 개선",
      "Expo file-system 제약으로 발생한 S3 업로드 문제를 우회하고 해결 과정을 사내 가이드로 공유",
    ],
  ],
};

const DOUZONE_LEGAL: PositionExperience = {
  title: "위하고 L(법률 서비스) 및 백오피스 시스템 개발",
  techStack: ["React", "Redux(+Saga)", "Java Spring", "PostgreSQL", "ElasticSearch"],
  contents: [
    {
      bold: true,
      value:
        "초기 커리어에서 React와 Java Spring·PostgreSQL을 함께 사용하며 서비스 전 영역 개발 경험 확보",
    },
    [
      "법률 전문가 매칭 등 3종 서비스의 Frontend/Backend 개발에 참여하고 ElasticSearch 기반 검색 기능 구현",
      "현재 Backend/Spring·DB는 주력 전문 영역이라기보다 Web Platform 설계 시 서버·데이터 구조를 이해하기 위한 기반 경험으로 활용",
    ],
  ],
};

const DOUZONE_SMARTA: PositionExperience = {
  title: "SmartA 물류 CS 서비스 웹 마이그레이션",
  techStack: ["React", "Java Spring", "PostgreSQL"],
  contents: [
    {
      bold: true,
      value:
        "1,000개 이상 기업이 사용하는 설치형 업무 프로그램을 웹 서비스로 전환",
    },
    [
      "견적서·입출고·가출고·환경설정과 공통 프린트 모듈 개발",
      "설치형 프로그램의 업무 흐름을 Web UI와 공통 모듈 구조로 옮기는 마이그레이션 경험 확보",
    ],
  ],
};

const DOUZONE_EXPERIENCES: Experience = {
  position: "Fullstack Developer",
  start: new Date("2018-05"),
  end: new Date("2022-03"),
  experience: [DOUZONE_MOBILE, DOUZONE_LEGAL, DOUZONE_SMARTA],
};

const DOUZONE_PAYLOAD: CareerPayload = {
  name: "더존비즈온",
  start: new Date("2018-05"),
  end: new Date("2022-03"),
  description:
    "초기 커리어에서 기업용 Web 서비스의 Frontend를 중심으로 Java Spring·PostgreSQL 기반 Fullstack 개발 경험",
  experiences: [DOUZONE_EXPERIENCES],
};

const payload: CareerPayload[] = [EST_PAYLOAD, DOUZONE_PAYLOAD];

export default payload;
