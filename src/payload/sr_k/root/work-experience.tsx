import type { CareerPayload } from "@/components/work-experience/WorkExperience";
import Anchor from "@/components/common/Anchor";

const payload: CareerPayload[] = [
  {
    name: "이스트소프트",
    start: new Date("2022-04"),
    description:
      "Perso Web SDK 공개와 연동 환경 설계, 디자인 시스템과 개발 프로세스 개선. 서비스 개발 및 파트 리드",
    experiences: [
      {
        position: "Frontend Engineer",
        start: new Date("2022-04"),
        experience: [
          {
            title: "Perso Interactive SDK - 공개 배포와 연동 환경 설계",
            text: "npm",
            link: "https://www.npmjs.com/package/perso-interactive-sdk-web",
            techStack: ["TypeScript", "WebRTC", "Rollup", "Turborepo", "VitePress"],
            contents: [
              "파일 배포 방식에서 타입 확인, 버전 관리, 서버와 클라이언트 코드 구분이 어려워 npm 공개 전환을 제안하고, 인프라팀 및 CTO 검토를 거쳐 TypeScript API와 배포 구조 설계 주도",
              "SDK 변경마다 예제 저장소에 빌드 파일을 복사하던 절차를 없애기 위해 Turborepo 기반 모노레포로 SDK, 예제, SDK Playground를 통합하고 동일한 SDK 소스로 개발과 연동 검증 진행",
              "유지보수자와 사내 연동 개발자는 SDK Playground에서 아바타 렌더링, 버전별 API와 PoC를 검증하고, 외부 개발자는 Next.js, Svelte, Vanilla JS 예제와 버전별 문서로 설치부터 연동까지 확인하도록 구성",
            ],
          },
          {
            title: "SDK, 고객 웹앱 개발 지원 - 공용 개발 도구와 QA 도구",
            techStack: ["Claude Code", "Codex", "TypeScript"],
            contents: [
              "테스트 작성과 교차 리뷰 등 반복 절차의 누락을 줄이기 위해 LLM 하네스로 Jira 일감 분석부터 테스트, 리뷰, PR 생성과 작업 기록까지 자동화하고 최종 리뷰 반영과 머지는 사람이 판단하도록 구성",
              "같은 지침으로도 작업 절차를 따르는 방식이 달라 Claude Code와 Codex의 스킬 및 호출 경로를 분리하고, 도구별 실행 방식에 맞춰 공통 절차 적용",
              <span key="qa-tools">
                {"기기별 화면 비교와 재현 환경 공유의 반복 작업을 줄이기 위해 "}
                <Anchor href="https://github.com/cola9k1/multibox" target="_blank" rel="noopener noreferrer">Multibox</Anchor>
                {", "}
                <Anchor href="https://chromewebstore.google.com/detail/bggdmmjfgocbbjdpjjhbibljhmdnoffh" target="_blank" rel="noopener noreferrer">Browser Support Reporter</Anchor>
                {"를 제공하고, 화면 비교 및 재현 자료의 Jira 등록 자동화를 QA팀에서 사용"}
              </span>,
            ],
          },
          {
            title: "대시보드 앱 - 이용 지표 제공과 풀스택 설계",
            techStack: ["Next.js", "TypeScript", "tRPC", "Prisma", "PostgreSQL"],
            contents: [
              "키오스크 로그를 방문, 매장별 지표로 제공하기 위해 전송 규격과 집계 기준을 협의하고, T3 Stack 기반의 화면, API, DB 스키마와 수집 스케줄러 설계",
              "수집과 조회의 책임을 분리해 스케줄러가 적재한 데이터를 API로 제공하고, 사내 계정에서 이용 지표를 확인하는 대시보드로 운영",
              "PR 검증 대기를 줄이기 위해 서버 테스트를 병렬화하고, 검증 범위를 유지하면서 CI 실행 시간을 약 182초에서 122초로 33% 단축(전후 각 14회 중앙값)",
            ],
          },
          {
            title: "Perso Studio - 슬라이드 단위 TTS 요청 구조 개선",
            techStack: ["React", "TypeScript", "Recoil"],
            contents: [
              "대사별 TTS 생성 요청과 폴링으로 네트워크 부담이 커지고 비동기 처리 흐름을 추적하기 어려워, 사용자 작업 단위인 슬라이드를 기준으로 요청 구조 재설계",
              "백엔드에 대사 배열을 받는 일괄 API를 제안해 요청을 배치 처리하고, 분산된 비동기 로직을 슬라이드 단위 큐로 통합해 처리 순서 관리",
              "전체 생성 요청을 대사별 N회에서 슬라이드별 1회로 줄이되, 개별 대사 수정에는 기존 단건 요청을 유지해 편집 방식 보존",
            ],
          },
          {
            title: "PDS 디자인 시스템 - 공통 UI 도입과 서비스별 확장",
            techStack: ["React", "TypeScript", "Radix", "styled-components", "Storybook"],
            contents: [
              "세 서비스의 UI 중복과 동작 차이를 줄이기 위해 도입을 주도하고 디자인팀과 디자인 토큰 및 공통화 범위 합의. 기존 styled-components를 유지하고 동작과 스타일을 분리하는 Headless UI 기반의 Radix 채택",
              "단위 컴포넌트와 조합 컴포넌트를 분리하고, Slot과 다형성 API로 서비스별 변형을 지원하는 컴포지션 구조 설계. 서비스 개발과 병행해 적용하며 모노레포의 JIT 방식으로 배포 부담 축소",
              "Storybook으로 디자인, 기획, QA가 실제 동작을 확인하는 핸드오프 환경을 마련하고, 공통 범위를 벗어나는 요구는 서비스별 조합으로 대응하며 세 서비스에 적용",
            ],
          },
          {
            title: "번역 자동화 - 번역 키 규칙과 코드 반영 절차 정비",
            techStack: ["TypeScript", "ms-excel-intl"],
            contents: [
              "번역 엑셀의 변경분을 코드에 수동 반영하며 누락, 중복, 오타와 잘못된 키 연결 위험이 있어 기획팀과 서비스, 화면, 기능, 상황을 구분하는 계층형 키 규칙 합의",
              "기획팀의 엑셀 작성 방식은 유지하면서 코드 반영 과정을 자동화하도록 ms-excel-intl을 설계하고, 키 추출과 정렬, 정합성 검증을 거쳐 번역 데이터를 반영하는 흐름 구성",
              "작성 규칙과 사용법을 기획팀에 공유하고 팀 도입을 주도해, 변경된 번역을 사람이 일일이 대조하고 복사하던 절차 제거",
            ],
          },
          {
            title: "알툴즈 리뉴얼, 백오피스 - 렌더링 전략과 반복 UI 구조 개선",
            techStack: ["Next.js", "TypeScript", "React", "Yarn Berry"],
            contents: [
              "콘텐츠 성격에 따라 SSR, SSG, ISR을 구분하는 Next.js 기반 리뉴얼 설계를 주도하고, 이미지 로딩 문제에는 picture와 Next.js 이미지 서버를 적용해 전달 및 렌더링 방식 개선",
              "느린 빌드가 배포 과정의 병목이 되어 Yarn Berry 전환과 번들 최적화, Next.js standalone 적용으로 빌드 및 배포 구성 개선",
              "백오피스의 반복 UI는 MUI와 Formik 기반 템플릿으로 구성하고, 테이블, 검색, 모달의 공통 구조와 화면별 설정을 분리해 중복 구현 축소",
            ],
          },
        ],
      },
    ],
  },
  {
    name: "더존비즈온",
    start: new Date("2018-05"),
    end: new Date("2022-03"),
    description: "클라우드 플랫폼 위하고의 웹, 모바일 서비스 풀스택 개발",
    experiences: [
      {
        position: "Fullstack Developer",
        start: new Date("2018-05"),
        end: new Date("2022-03"),
        experience: [
          {
            title: "위하고 경비 청구 모바일 - 비동기 흐름과 실행 환경 제약 개선",
            techStack: ["Expo (React Native)", "TypeScript", "Redux-Saga"],
            contents: [
              "초기화 과정의 순차 API 호출과 중복 처리를 확인하고, 요청 간 의존 관계를 기준으로 순서가 필요한 작업과 병렬 실행 가능한 작업 구분",
              "Redux-Saga로 비동기 흐름을 통합하고 초기화 요청을 병렬화하며, API 호출과 로딩, 오류 처리를 공통 구조로 정리",
              "Expo 환경의 S3 업로드 제약을 Expo 개발자와 확인한 뒤 웹 업로드 방식으로 대응하고, 판단 근거와 해결 과정을 사내 가이드로 공유",
            ],
          },
          {
            title: "위하고 법률 서비스, SmartA - 도메인 분리와 웹 전환",
            techStack: ["React", "Java Spring", "PostgreSQL", "Elasticsearch"],
            contents: [
              "법률 서비스의 도메인별 책임을 분리하는 MSA 구조와 React, Java Spring, PostgreSQL 기반의 프론트엔드 및 백엔드 설계와 개발 담당",
              "법률 서비스 검색에는 Elasticsearch를 적용해 검색 기능을 구성하고, 서비스 데이터 저장과 검색을 각각의 역할에 맞춰 처리",
              "1,000개 이상 기업이 사용하던 설치형 SmartA의 견적서, 입출고, 환경설정을 웹으로 전환하고, 반복되는 출력 요구는 공통 프린트 양식과 모듈로 구성",
            ],
          },
        ],
      },
    ],
  },
];

export default payload;
