import type { CareerPayload } from "@/components/work-experience/WorkExperience";

type DiscoveredArray<T> = T extends Array<infer R> ? R : never;

type Experience = DiscoveredArray<CareerPayload["experiences"]>;

type PositionExpeirence = DiscoveredArray<Experience["experience"]>;

const EST_ENGINEER_1: PositionExpeirence = {
  title: "Perso Studio - AI 휴먼 영상 편집 개발",
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
      "고객 내 OOM 이슈가 발생. 사전에 리스트업한 성능 이슈 리스트를 스쿼드 내 빠르게 공유",
      "각 컴포넌트에 선언된 핸들러의 이벤트 Task 누적 현상에 의한 Long Task 성능 문제 정의",
      "디바운싱을 통해 이벤트를 지연 처리하고 props 메모이징 처리",
      "최적화 후 Long Task 현상과 OOM 해결 및 40% 속도 개선하여 사용자 경험 개선",
    ],
    {
      bold: true,
      value:
        "슬라이드 제어(이동/추가/삭제/복제) 영역의 무분별한 리렌더링과 커스텀 훅 순환 참조 개선 및 최적화 작업",
    },
    [
      "퍼포먼스 기능 활용. 성능 저하 포인트를 리스트업하여 팀내 공유하여 단계별 배포 의견 제시",
      "슬라이드 개수만큼 참조된 커스텀 훅에 의한 전체 리렌더링 발생 문제 정의",
      "리렌더링을 발생시키는 recoil 훅 선언부 제거. useRecoilCallback과 props 메모이징을 통해 리스트 전체 최적화",
      "최적화 후 Task 당 속도를 최대 90% 단축하여 UX 개선 (평균 약 1.4s→0.3s)",
    ],
    {
      bold: true,
      value:
        "슬라이드당 다량의 문장 TTS(Text To Speech) 요청 프로세스 단순환 제안 및 최적화 작업",
    },
    [
      "다량의 TTS 요청의 네트워크 부하 발생과 TTS 서버 내부 큐의 복잡도 문제 의견 제시",
      "TTS 요청을 다건 → 단건 처리 구조로 프로세스 단순화를 제안하여 네트워크 부하 개선 정의",
      "API와 TTS 서버 통신 구조 재설계에 참여, 레거시 프로세스 대응을 위해 프론트엔드에서 이원화 작업 설계",
      "요청 개수를 줄여 응답 속도 개선, 서버 비용 절감과 트래픽 부하 감소 후 에러 발생 빈도 개선",
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
      "프로젝트 간 환경 불일치와 중복 설정 문제로인한 개발/운영 비용 증가를 대비해 모노레포 구조 제안",
      "빠른 개발 환경 구축을 위해 터보레포의 보일러 플레이트 도입과 개발 환경 규격화 정의",
      "각 스쿼드, 스프린트, 서버 환경별 배포 프로세스 대응을 위해 git flow 전략을 수립하여 컨벤션 정의 및 문서화 작업",
      "모노레포 적용을 통해 디자인 시스템과 개발 환경 세팅 비용을 크게 절약하여 개발 공수 확보",
      "디자인 시스템과 서비스를 동시에 구축하기 위해 JIT(Just in Time) 패키지 방식 제안",
    ],
    {
      bold: true,
      value: "스웨거 기반 API 추출 자동화 프로세스 적용을 위한 협업과 개선",
    },
    [
      "API 명세를 노션과 스웨거로 소통하며 발생하는 명세와 타입의 불일치 및 불필요한 소통 문제를 제시",
      "스웨거 기반 타입스크립트 생성 API 적용을 제안. 스웨거 스키마 정보로 소통하도록 백엔드 팀과 협의",
      "API 도입으로 명세서 및 API 타입의 신뢰성 확보하여 불필요한 휴먼 에러 감소",
      // "",
      // "",
      // "",
      // "",
    ],
    {
      bold: true,
      value: "다국어 자동화 프로세스 적용으로 생산성 증대와 휴먼 에러 개선",
    },
    [
      "기존 서비스의 다국어 적용 시 엑셀에 정의된 내용을 복사/붙여넣기시 발생하는 작업으로 인한, 번역 Key 누락 및 중복, 오타 문제 등 휴먼 에러가 반복되어 불필요한 소통 문제 제기",
      "스크립트 자동화를 통해 가져오는 방법을 찾아 팀 내 제안하여 문서화하고 기획팀과 협의하여 작성 방법 온보딩 주도",
      "다국어 추출 라이브러리(ms-excel-intl) 개발. 번역 키 추출, 정렬, 정합성 검증 자동화로 소통 비용을 크게 절감",
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
        "서비스 도메인에 대한 브랜드 이미지와 UI/UX/DX 증대를 위해 디자인 시스템 도입을 적극 주도",
    },
    [
      "자사 서비스들의 디자인 시스템 부재로 인한 UX와 DX 저하를 경험하여 스쿼드에 도입 제안",
      "Perso 도메인 내 서비스 확장 여부와 브랜드 이미지를 확립하기 위해 디자인 팀과 핸드오프 적극 주도",
      // "디자인 시스템 도입의 '왜'에 집중하여 '무엇'을 만들고 '어떻게' 할지에 대해 최우선 과제 선별",
      // "서비스 개발과 시스템 구축의 병렬 작업 제안. 주요 컴포넌트 단위(Primitive)를 먼저 선별 및 기능 옵션을 제안",
      "복잡한 컴포넌트 확장 요구 사항을 위해 Slot 구조와 다형성 API 설계하여 재사용성과 커스터마이징 대응 개선",
      "2개월 만에 컴포넌트 단위(Primitive) 15종과 이를 조합하여 만든 합성 컴포넌트(pds-ui) 8종을 구현 배포",
    ],
    {
      bold: true,
      value:
        "접근성, 커스텀과 DX 확보하기 위한 Radix 도입과 Storybook MDX를 활용한 문서화 관리",
    },
    [
      "서비스와 디자인 시스템(PDS) 개발을 위해 검증된 기술과 커뮤니티 활성화 빈도가 확보된 라이브러리를 검토",
      "빠른 개발과 접근성, 커스텀 개발에 특화된 Headless 기반의 라이브러리 Radix UI 제안",
      "Storybook 서빙 후 문서 관리와 디자인/기획/QA 팀과의 디자인 소통 창구를 개설 및 관리",
      "디자인 시스템 관련 버그와 기능 제안을 위한 사내 게시판을 개설하고 관리",
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
      "다양한 콘텐츠 성격으로인한 페이지 로딩 속도 편차 극복을 위해 SSR/SSG/ISR 전략 혼합 적용으로 초기 응답 시간 단축",
      "이미지 렌더링 차단 현상을 해결하기 위해 picture 태그와 next 이미지 서버 적용으로 브라우저 리소스 약 20% 절감",
      "Yarn Classic 버전 사용과 Webpack 기반 빌드 속도 저하로 인한 배포 주기 효율 저하 식별",
      "Yarn Berry 마이그레이션, 번들링 최적화와 standalone 적용을 통해 빌드 시간과 의존성 설치 시간 50% 단축",
      "Atomic/VAC 디자인 패턴 도입 후 개발/디자인 작업 병렬 프로세스 구축하여 생산성 확보",
    ],
    {
      bold: true,
      value: "알툴즈 백오피스 프로젝트 구축 및 개발 주도",
    },
    [
      "패키지 종속성 관리 이슈 해결을 위해 Yarn-Berry 기반 pnp 방식 적용 후 의존성 충돌 제거",
      "디자인 접근성, 확장성을 위해 Bootstrap > MUI 전환으로 UI 일관성 개선",
      "테이블, 검색, 모달 등 반복되는 컴포넌트를 Formik 조합으로 템플릿화로 중복 코드 제거 및 유지보수성 개선",
      // "",
      // "",
      // "",
      // "",
    ],
  ],
};

const EST_ENGINEER_5: PositionExpeirence = {
  title: "오거나이저(DevRel)",
  contents: [
    {
      bold: true,
      value: "사내 FE 시스템 구축 및 프론트엔드 Devrel 활동",
    },
    [
      "자기 주도하 사내 개발 문화 및 커뮤니티 활성화 활동 참여",
      "TIL, 기술/알고리즘 스터디 운영. 내부 기술 교류 및 공유 문화 조성",
      "사내 오거나이저 활동으로 사내 디자인 시스템 제안 및 백오피스 시스템 구축 발안 및 수행",
      // "",
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
  // end: new Date("2024-06"),
  // description:
  //   "‘어떤 상상도 바로 그릴 수 있게’를 추구하며 3차원 스케치북 서비스 ‘Feather’를 개발하는 스타트업으로, 엔지니어로 합류해 서비스의 프론트엔드를 담당했습니다. 신규 기능을 구현하고 서비스의 사용자 경험을 개선해 나갔으며, 아키텍처 개선, 모듈화 등 DX를 고려한 작업을 진행했습니다. 또한, 팀의 목표를 이루기 위해 백엔드 개발을 진행하기도 했습니다. 팀의 협업 방식에 대한 개선이 필요하게 되어, 스크럼을 도입하고 스프린트를 진행하며 제품 개발에 대한 프로세스를 정리하였습니다.",

  description:
    "Perso AI 휴먼/더빙/Portal 서비스와 알툴즈 서비스 웹 프론트엔드 구축 및 개발",
  experiences: [EST_EXPERIENCES],
};

const DOUZNE_DEVELOPER_1: PositionExpeirence = {
  title: "위하고 경비 청구 서비스(개인/법인 카드) 통합 모바일 개발",
  techStack: ["Expo(RN)", "Typescript", "Redux(+Saga)"],
  contents: [
    {
      bold: true,
      value: "웹 서비스 대비 모바일 서비스 성능 및 사용성 개선",
    },
    [
      "기존 웹 서비스의 무분별한 API 동기 처리, 중복 로직과 개선되지 않은 레거시 코드 기반 성능 문제 정의",
      "redux-saga를 적용하여 미들웨어 레벨의 비동기 프로세스 통합 설계",
      "API 통합 관리와 Suspense/Errorboundary 처리를 위해 redux-saga에서 공통 상태 처리 구조 설계",
      "웹 서비스 대비 전체적으로 모바일 앱 성능 60% 개선 및 Indicator 처리를 통한 UX 개선",
    ],
    { bold: true, value: "첫 초기화 과정에서 발생하는 병목 현상 개선" },
    [
      "데이터 초기화 과정에서 데이터 간 의존성에 의한 순차적 요청으로 발생하는 병목 구간 파악",
      "의존 관계를 분석해 실제 순차 처리가 필요한 흐름과 병렬 처리가 가능한 흐름을 구분",
      "요청 흐름을 재구성, redux-saga를 통해 병렬 처리로 전환해 초기화 속도를 약 30% 개선",
    ],
    {
      bold: true,
      value:
        "사내 공통 모바일 프레임워크 Expo 서비스의 파일 업/다운로드 이슈 해결 및 가이드 제공",
    },
    [
      "Expo 프레임워크의 파일 업/다운로드 기능 부재. 타 모바일 서비스 개발 지연 문제 확보",
      "s3 스토리지 업로드 기능이 공통으로 사용되는 Expo의 file-system 이슈 문제 정의",
      "Expo file-system 개발자와 직접 소통하여 네이티브에 특화된 API 문제임을 확인",
      "프레임워크 버전 업과 네이티브 업로드 방식 → 웹 업로드 방식으로 우회 적용하여 기능 가이드 문서 제공",
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
    { bold: true, value: "3개의 법률 서비스 운영과 시스템 설계 및 개발 주도" },
    [
      "법률 전문가 매칭 서비스 개발 및 법률 카테고리별 서비스 개발 주도",
      "MSA 설계 및 데이터베이스 설계를 통한 서비스 도메인 분리 및 데이터 관리 최적화",
      "ElasticSearch를 적용하여 검색 기능의 사용자 경험(UX) 개선",
    ],
  ],
};

const DOUZNE_DEVELOPER_3: PositionExpeirence = {
  title: "SmartA 물류 CS 서비스 웹 앱으로 마이그레이션 개발 진행",
  techStack: ["React", "Java Spring", "PostgreSQL"],
  contents: [
    {
      bold: true,
      value: "클래스형 React 기반 웹 UI 작업과 DB 데이터 처리 작업",
    },
    [
      "약 1000개 이상의 회사 운영 중인 서비스에서 견적서, 입/출고, 가출고, 환경설정 및 공통/프린트 모듈 개발",
      "설치형 SmartA CS 프로그램 서비스를 웹 서비스 마이그레이션 개발 진행",
      "공통 프린터 양식 및 모듈 개발",
      // "",
    ],
  ],
};

const DOUZNE_DEVELOPER_4: PositionExpeirence = {
  title:
    "기타 다양한 서비스 개발(근태관리, 매출채권 팩토링, CRM, 모바일 웹 서비스 등)",
  techStack: ["React", "Java Spring", "PostgreSQL"],
  contents: [
    {
      bold: true,
      value: "웹, 웹뷰, FTP 등 전반적인 웹 풀스택 개발을 진행",
    },
    // ["", "", ""],
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
