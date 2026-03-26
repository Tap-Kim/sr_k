import type { CareerPayload } from "@/components/work-experience/WorkExperience";

type DiscoveredArray<T> = T extends Array<infer R> ? R : never;

type Experience = DiscoveredArray<CareerPayload["experiences"]>;

type PositionExpeirence = DiscoveredArray<Experience["experience"]>;

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
      "디바운싱으로 이벤트 지연 처리 및 props 메모이징 적용으로 불필요한 재연산 차단",
      "Long Task 및 OOM 해소, 슬라이드 조회 속도 40% 개선으로 사용자 경험 직결 지표 개선",
    ],
    {
      bold: true,
      value:
        "슬라이드 제어 전역 리렌더링·커스텀 훅 순환 참조 문제 정의 및 최적화",
    },
    [
      "퍼포먼스 탭으로 병목 구간을 시각화하여 팀 내 공유하고 단계별 배포 전략 제안",
      "슬라이드 수만큼 구독되는 Recoil 훅으로 인해 목록 전체 리렌더링이 발생하는 구조적 문제 정의",
      "구독 hook 선언부 제거, useRecoilCallback과 props 메모이징으로 리스트 단위 최적화 적용",
      "Task당 처리 속도 최대 90% 단축 (평균 1.4s → 0.3s), UX 직결 지표 개선",
    ],
    {
      bold: true,
      value:
        "다건 TTS 요청 구조의 서버 부하를 분석하고 단건 처리 구조로 프로세스 재설계 제안",
    },
    [
      "슬라이드당 다수 TTS 요청이 네트워크·서버 내부 큐 복잡도를 가중시키는 문제를 수치로 제시하고 백엔드 팀과 공론화",
      "다건 → 단건 요청 구조로 프로세스 단순화를 제안, API·TTS 서버 통신 구조 재설계에 직접 참여",
      "레거시 클라이언트 대응을 위해 프론트엔드 이원화 처리 구조 설계 및 구현",
      "요청 수 감소로 응답 속도 개선, 서버 비용 절감 및 에러 발생 빈도 감소",
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
        "짧은 일정 내 신규 포탈 서비스 출시를 위해 모노레포 아키텍처 및 개발 전략 수립 주도",
    },
    [
      "프로젝트 간 환경 불일치와 중복 설정으로 인한 운영 비용 증가를 선제적으로 식별하고 Turborepo 기반 모노레포 구조 제안",
      "Turborepo 보일러플레이트 도입으로 개발 환경 규격화, 온보딩 비용 절감",
      "스쿼드·스프린트·서버 환경별 배포 프로세스에 대응하는 Git Flow 전략 수립 및 컨벤션 문서화",
      "디자인 시스템과 서비스를 병렬 구축하기 위해 JIT(Just-in-Time) 패키지 방식 제안 및 적용으로 초기 개발 공수 확보",
    ],
    {
      bold: true,
      value: "Swagger 기반 API 타입 자동 생성 도입으로 명세 불일치 및 휴먼 에러 구조적 해소",
    },
    [
      "노션·스웨거 이중 관리로 인한 타입 불일치와 불필요한 커뮤니케이션 비용을 팀에 구체적 사례로 제시",
      "스웨거 스키마 기반 TypeScript 타입 자동 생성 도입을 제안하고 백엔드 팀과 스키마 관리 방식 협의",
      "API 타입 신뢰성 확보로 런타임 타입 오류 및 명세 관련 커뮤니케이션 비용 감소",
    ],
    {
      bold: true,
      value: "다국어 자동화 라이브러리(ms-excel-intl) 개발로 번역 프로세스 정비",
    },
    [
      "엑셀 기반 번역 키 수동 복사/붙여넣기로 반복 발생하는 키 누락·중복·오타 등 휴먼 에러를 문제로 정의",
      "번역 키 추출·정렬·정합성 검증 자동화 라이브러리 직접 개발(ms-excel-intl) 및 팀 도입 주도",
      "기획팀 대상 작성 방식 온보딩을 이끌어 번역 워크플로 전체를 정비하고 소통 비용 크게 절감",
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
      "자사 서비스 전반의 디자인 시스템 부재로 인한 UX·DX 저하를 직접 경험하고 스쿼드 내 도입 제안",
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
      "Storybook을 서빙하여 디자인/기획/QA 팀과의 컴포넌트 소통 창구로 활용, 문서 관리 체계 구축",
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
      value: "기존 웹 서비스 대비 모바일 성능 60% 개선 및 비동기 처리 구조 재설계",
    },
    [
      "웹 서비스의 무분별한 동기 API 처리·중복 로직·레거시 코드를 성능 저하의 근본 원인으로 정의",
      "redux-saga를 도입해 미들웨어 레벨에서 비동기 프로세스를 통합 설계, API 관리 일원화 및 Suspense/ErrorBoundary 공통 처리 구조 확립",
      "전반적인 성능 60% 개선 및 Indicator 처리를 통한 UX 개선",
    ],
    { bold: true, value: "초기화 구간 병목 분석 및 병렬 처리 전환으로 속도 30% 개선" },
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
    { bold: true, value: "법률 전문가 매칭 서비스 등 3종 법률 서비스 설계 및 개발 주도" },
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
  title:
    "기타 서비스 개발(근태관리, 매출채권 팩토링, CRM, 모바일 웹 등)",
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
