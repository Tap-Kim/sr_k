import type { CareerPayload } from "@/components/work-experience/WorkExperience";

type DiscoveredArray<T> = T extends Array<infer R> ? R : never;

type Experience = DiscoveredArray<CareerPayload["experiences"]>;

type PositionExpeirence = DiscoveredArray<Experience["experience"]>;

const EST_ENGINEER_0: PositionExpeirence = {
  title: "Perso Interactive SDK 개발",
  text: "Perso Interactive SDK",
  link: "https://www.npmjs.com/package/perso-interactive-sdk-web",
  techStack: ["Typescript", "webRTC", "Rollup", "Turborepo"],
  contents: [
    {
      bold: true,
      value:
        "VanillaJS 빌드 파일 제공 방식의 타입 안전성·버전 관리 문제를 식별하고 TypeScript npm 패키지로 전환",
    },
    [
      "빌드 파일 직접 참조 구조에서 타입 추론 불가 및 버전 교체 시 수동 경로 변경이 반복 발생함을 확인, TypeScript npm 패키지 전환으로 구조적 해소",
      "Rollup 기반 ESM·CJS 다중 포맷 빌드 및 타입 번들링 구성으로 타입 및 JS 안정성 확보",
      "Github Actions CI/CD npm publish 자동화로 버전 및 배포 관리 효율화",
      "client/server 진입점 분리로 브라우저 전용 API의 잘못된 환경 참조를 구조적으로 방지",
      "LLM 학습이 용이하도록 기능별 파이프라인 단위의 example-guide 구조화, 프레임워크 무관한 빠른 온보딩 지원",
    ],
    {
      bold: true,
      value:
        "분산된 SDK·샘플·도구 개발 환경을 pnpm workspace·Turborepo 기반 모노레포로 통합",
    },
    [
      "SDK 변경 시 수동 빌드 호출로 실시간 반영 불가, 빌드 결과물 기준 디버깅, 예제 앱 간 개발 환경 파편화 문제 확인",
      "Turborepo dependsOn으로 빌드 순서 선언 및 변경 패키지만 재빌드, 소스 기준 즉시 반영·디버깅 가능하도록 개선",
      "Prettier·TypeScript·ESLint 루트 공유 설정으로 전체 패키지 코드 품질 기준 통일, 기능별 Playground·성능 지표 도구를 사내 단일 앱으로 구축",
    ],
    {
      bold: true,
      value:
        "BDD 방법론 기반 단위·통합 테스트 전략 수립으로 SDK 기능별 검증 체계 확립",
    },
    [
      "기능 명세를 기반으로 시나리오 단위 테스트 케이스를 정의하고, 단위·통합 테스트로 계층 분리하여 회귀 리스크 최소화",
    ],
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
        "슬라이드 조회 시 Long Task 누적으로 인한 OOM 이슈 분석 및 성능 최적화 주도",
    },
    [
      "고객 OOM 이슈 발생 시점에 사전에 리스트업해 둔 성능 이슈 목록을 스쿼드에 즉시 공유해 빠른 원인 분석 기반 마련",
      "각 컴포넌트 핸들러의 이벤트 Task 누적으로 인한 Long Task를 근본 원인으로 정의",
      "디바운싱·메모이징 적용으로 Long Task 및 OOM 해소하여 메모리 사용량 50% 감소, 슬라이드 조회 속도 40% 개선으로 사용자 경험 직결 지표 개선",
    ],
    {
      bold: true,
      value:
        "Recoil Snapshot 전파 · 커스텀 훅 순환 참조로 인한 슬라이드 목록 전체 리렌더링 병목 분석 및 최적화",
    },
    [
      "Hook 간 순환 참조 상태에서 atomFamily 인스턴스 변경 시 Snapshot 전파 → 의존 selectorFamily 재계산까지 연쇄되어 두 훅이 동시 재실행되는 복합 병목 발생",
      "Performance 탭 플레임 그래프로 병목 구간 시각화 후 팀 내 공유, 기능 단위 단계별 배포 전략 수립",
      "훅 간 의존 방향 단방향 정리, useRecoilCallback으로 구독을 이벤트 시점, read로 전환, React 메모이징 props 참조 고정으로 리스트 단위 리렌더링 차단",
      "Task당 처리 속도 최대 90% 단축 (평균 1.4s → 0.3s), 슬라이드 조작 응답성 개선",
    ],
    {
      bold: true,
      value:
        "다건 TTS 요청 구조의 서버 부하를 분석하고 단건 처리 구조로 프로세스 재설계 제안",
    },
    [
      "슬라이드당 다수 TTS 요청이 네트워크·서버 내부 큐 복잡도를 가중시키는 문제를 수치로 제시하고 백엔드 팀과 공론화",
      "TTS 다건 → 단건 요청 구조 재설계 주도, (N x M -> N번) 요청 수 감소",
      "롱 폴링 빈도 감소로 API 서버 응답 속도 개선 및 서버 비용 절감과 에러 빈도 감소로 서비스 안정성 향상",
      "레거시 클라이언트 대응을 위해 프론트엔드 이원화 처리 구조 설계 및 구현",
    ],
  ],
};

const EST_ENGINEER_2: PositionExpeirence = {
  title: "Perso 포탈/Dubbing 개발",
  text: "AI Dubbing",
  link: "https://perso.ai/ai-dubbing",
  techStack: [
    "Next.js",
    "Typescript",
    "Storybook",
    "Zustand",
    "Radix",
    "styled-components",
  ],
  contents: [
    {
      bold: true,
      value:
        "짧은 일정 내 신규 포탈 서비스 출시를 위해 모노레포 아키텍처 및 개발 전략 수립 주도",
    },
    [
      "프로젝트 간 환경 불일치와 중복 설정으로 인한 운영 비용 증가를 선제적으로 식별하고 Turborepo 기반 모노레포 구조 제안",
      "Turborepo 보일러플레이트 도입으로 개발 환경 규격화, 온보딩 비용 절감",
      "스쿼드·스프린트·서버 환경별 배포 프로세스에 대응 - Git Flow 전략 수립 및 컨벤션 문서화",
      "디자인 시스템·서비스 병렬 구축을 위해 JIT 패키지 방식을 제안·적용, 초기 개발 공수 확보 및 출시 일정 준수",
    ],
    {
      bold: true,
      value:
        "Swagger 기반 API 타입 자동 생성 도입으로 명세 불일치 및 휴먼 에러 구조적 해소",
    },
    [
      "노션·스웨거 이중 관리로 인한 타입 불일치와 불필요한 커뮤니케이션 비용을 팀에 구체적 사례로 제시",
      "스웨거 스키마 기반 TypeScript 타입 자동 생성 도입을 제안하고 백엔드 팀과 스키마 관리 방식 협의",
      "API 타입 신뢰성 확보로 런타임 타입 오류 및 명세 관련 커뮤니케이션 비용 감소",
    ],
    {
      bold: true,
      value:
        "다국어 자동화 라이브러리(ms-excel-intl) 개발로 번역 프로세스 정비",
    },
    [
      "엑셀 기반 번역 키 수동 복사/붙여넣기로 반복 발생하는 키 누락·중복·오타 등 휴먼 에러를 문제로 정의",
      "번역 키 추출·정렬·정합성 검증 자동화 라이브러리 개발(ms-excel-intl) 및 팀 도입 주도",
      "기획팀 대상 작성 방식 온보딩을 이끌어 번역 워크플로 전체를 정비하고 번역 키 누락·오타 등 휴먼 에러 완전 방지",
    ],
  ],
};

const EST_ENGINEER_3: PositionExpeirence = {
  title: "PDS(Perso Design System) 디자인 시스템 개발",
  techStack: ["Next.js", "Typescript", "Zustand", "Radix", "styled-components"],
  contents: [
    {
      bold: true,
      value:
        "서비스 UX 일관성과 DX 개선을 위해 디자인 시스템 도입을 주도하고 2개월 내 핵심 컴포넌트 출시",
    },
    [
      "서비스의 디자인 시스템 부재로 인한 UX·DX 저하를 직접 경험하고 스쿼드 내 도입 제안",
      "브랜드 이미지 확립을 위해 디자인 팀과 핸드오프 적극 주도, 서비스 확장성을 고려한 컴포넌트 범위 정의",
      "복잡한 확장 요구사항을 수용하기 위해 Slot 구조와 다형성 API 설계, 재사용성과 커스터마이징 자유도 확보",
      "2개월 만에 Primitive 컴포넌트 15종 및 합성 컴포넌트(pds-ui) 8종 구현·배포",
    ],
    {
      bold: true,
      value:
        "접근성·커스텀·DX 기준으로 Radix 도입 결정, Storybook MDX로 디자인·개발 소통 창구 구축",
    },
    [
      "검증된 커뮤니티와 Headless 구조로 접근성·커스터마이징에 최적화된 Radix UI를 기술 검토 후 제안",
      "Storybook을 정적 앱 으로 배포하여 디자인/기획/QA 팀과의 실시간 컴포넌트 소통 창구로 활용, 문서 관리 체계 구축",
      "사내 게시판을 개설해 디자인 시스템 관련 버그 리포트·기능 제안을 구조화하여 지속적 개선 주도",
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
      value: "구버전 알툴즈 웹 서비스 리뉴얼 아키텍처 설계 및 개발 주도",
    },
    [
      "콘텐츠 성격에 따라 SSR/SSG/ISR 렌더링 전략을 혼합 적용해 초기 응답 시간 단축 및 페이지별 로딩 편차 최소화",
      "이미지 렌더링 차단 현상을 picture 태그 + Next.js 이미지 서버 조합으로 해소, 브라우저 리소스 약 20% 절감",
      "Yarn Classic + Webpack 기반 빌드 속도 저하를 배포 주기 병목으로 식별, Yarn Berry 마이그레이션·번들 최적화·standalone 적용으로 빌드 시간 50% 단축",
      "Atomic/VAC 디자인 패턴 도입으로 개발·디자인 병렬 프로세스 구축, 팀 생산성 확보",
    ],
    {
      bold: true,
      value: "알툴즈 백오피스 프로젝트 구축 및 개발 주도",
    },
    [
      "Yarn Berry PnP 방식으로 패키지 종속성 충돌 구조적 해소",
      "Bootstrap → MUI 전환으로 접근성과 확장성 기반의 UI 일관성 개선",
      "테이블·검색·모달 등 반복 패턴을 Formik 조합으로 템플릿화하여 중복 코드 제거 및 유지보수성 향상",
    ],
  ],
};

const EST_ENGINEER_5: PositionExpeirence = {
  title: "오거나이저(DevRel)",
  contents: [
    {
      bold: true,
      value: "사내 FE 기술 문화 조성 및 프론트엔드 DevRel 활동",
    },
    [
      "TIL·기술·알고리즘 스터디 자발적 운영으로 팀 내 지식 공유 문화 형성",
      "사내 오거나이저 활동으로 디자인 시스템 도입 및 백오피스 시스템 구축 발안·수행",
      "개선 사항을 문서화하고 공유해 팀 온보딩 비용 절감 및 개발 문화 개선에 기여",
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
    EST_ENGINEER_5,
  ],
};

const EST_PAYLOAD: CareerPayload = {
  name: "이스트소프트",
  start: new Date("2022-04"),
  description:
    "Perso AI Studio/Dubbing/Portal 서비스와 알툴즈 서비스 웹 프론트엔드 구축 및 개발",
  experiences: [EST_EXPERIENCES],
};

const DOUZNE_DEVELOPER_1: PositionExpeirence = {
  title: "위하고 경비 청구 서비스(개인/법인 카드) 통합 모바일 개발",
  techStack: ["Expo(RN)", "Typescript", "Redux(+Saga)"],
  contents: [
    {
      bold: true,
      value:
        "기존 웹 서비스 대비 모바일 성능 60% 개선 및 비동기 처리 구조 재설계",
    },
    [
      "무분별한 동기 API 처리·중복 로직·레거시 코드를 성능 저하의 근본 원인으로 정의",
      "redux-saga를 도입해 미들웨어 레벨에서 비동기 프로세스를 통합 설계, API 관리 일원화 및 Suspense/ErrorBoundary 공통 처리 구조 확립",
      "전반적인 성능 60% 개선 및 Indicator 처리를 통한 UX 개선",
    ],
    {
      bold: true,
      value: "초기화 구간 병목 분석 및 병렬 처리 전환으로 속도 30% 개선",
    },
    [
      "데이터 초기화 시 의존성에 의한 순차 요청이 병목을 유발하는 구간 파악",
      "의존 관계를 분석해 순차 처리가 필요한 흐름과 병렬화 가능한 흐름을 명확히 구분",
      "redux-saga 기반 병렬 처리로 재구성해 초기화 속도 약 30% 개선",
    ],
    {
      bold: true,
      value:
        "Expo 공통 프레임워크의 파일 업/다운로드 이슈 해결 및 사내 가이드 제공",
    },
    [
      "Expo file-system의 S3 업로드 기능 부재로 타 모바일 서비스 개발이 지연되는 문제 확인",
      "Expo 개발자와 직접 소통해 네이티브 API 제약임을 확인하고 웹 업로드 방식으로 우회 적용",
      "해결 과정을 문서화해 사내 가이드로 공유, 타 팀 동일 이슈 재발 방지",
    ],
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
    {
      bold: true,
      value: "법률 전문가 매칭 서비스 등 3종 법률 서비스 설계 및 개발 주도",
    },
    [
      "법률 카테고리별 서비스 도메인을 MSA 구조로 분리 설계하여 데이터 관리 최적화",
      "ElasticSearch 도입으로 검색 기능 사용자 경험 개선",
      "풀스택(React + Java Spring + PostgreSQL) 구조로 프론트엔드·백엔드 양쪽 개발 주도",
    ],
  ],
};

const DOUZNE_DEVELOPER_3: PositionExpeirence = {
  title: "SmartA 물류 CS 서비스 웹 앱 마이그레이션",
  techStack: ["React", "Java Spring", "PostgreSQL"],
  contents: [
    {
      bold: true,
      value: "설치형 SmartA CS 프로그램의 웹 서비스 마이그레이션 개발",
    },
    [
      "1,000개 이상 기업이 운영 중인 서비스의 견적서·입출고·가출고·환경설정 및 공통/프린트 모듈 개발",
      "설치형 프로그램을 웹 기반으로 전환, 공통 프린터 양식 및 모듈 직접 개발",
    ],
  ],
};

const DOUZNE_DEVELOPER_4: PositionExpeirence = {
  title: "기타 서비스 개발(근태관리, 매출채권 팩토링, CRM, 모바일 웹 등)",
  techStack: ["React", "Java Spring", "PostgreSQL"],
  contents: [
    {
      bold: true,
      value: "웹·웹뷰·FTP 등 다양한 도메인의 풀스택 개발 참여",
    },
    [
      "근태관리·매출채권 팩토링·CRM 등 사내 다양한 서비스의 프론트엔드·백엔드 기능 개발",
      "모바일 웹뷰 환경 대응 및 FTP 기반 파일 처리 업무 수행",
    ],
  ],
};

const DOUZNE_EXPERIENCES_1: Experience = {
  position: "Fullstack developer",
  start: new Date("2018-05"),
  end: new Date("2022-03"),
  experience: [
    DOUZNE_DEVELOPER_1,
    DOUZNE_DEVELOPER_2,
    DOUZNE_DEVELOPER_3,
    DOUZNE_DEVELOPER_4,
  ],
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
