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
            title: "PDS 디자인 시스템 - 공통 UI 도입과 서비스별 확장",
            techStack: ["React", "TypeScript", "Radix", "styled-components", "Storybook"],
            contents: [
              "세 서비스의 UI 중복과 동작 차이를 정리하기 위해 디자인팀과 디자인 토큰, 공통 컴포넌트 범위를 합의하고 도입 주도. 기존 코드와 팀의 학습 부담을 고려해 styled-components와 Radix 조합 선택",
              "Radix의 Headless UI를 바탕으로 단위, 조합 컴포넌트 계층을 분리하고 Slot, 다형성 API로 확장 구조 설계. 공통 범위를 벗어나는 요구는 서비스별 조합으로 대응하도록 기준 정리",
              "모노레포의 JIT 방식으로 서비스 개발과 병행해 세 서비스에 적용하고, Storybook으로 디자인, 기획, QA가 동작과 사용법을 확인하는 핸드오프 환경 구성",
            ],
          },
          {
            title: "Perso Interactive SDK - 공개 배포와 연동 환경 설계",
            text: "npm",
            link: "https://www.npmjs.com/package/perso-interactive-sdk-web",
            techStack: ["TypeScript", "WebRTC", "Rollup", "Turborepo", "VitePress"],
            contents: [
              "SDK 공개 전환 과정에서 인프라팀 및 CTO와 공개 범위를 검토하고, 파일 배포에서 구분하기 어려웠던 서버, 클라이언트 코드와 TypeScript API, npm 배포 구조 설계",
              "Turborepo 기반 모노레포로 SDK, 예제, SDK Playground를 통합해 빌드 파일 수동 복사를 제거하고 개발, 연동 검증이 동일한 SDK 소스를 사용하도록 구성",
              "유지보수자와 사내 개발자에게 Playground 기반 API, 아바타 렌더링 검증 환경을 제공하고 외부 개발자에게 Next.js, Svelte, Vanilla JS 예제 및 버전별 문서 제공",
            ],
          },
          {
            title: "대시보드 앱 - 이용 지표 제공과 풀스택 설계",
            techStack: ["Next.js", "TypeScript", "tRPC", "Prisma", "PostgreSQL"],
            contents: [
              "키오스크 로그 전송 규격과 집계 기준을 클라이언트 담당자와 협의하고, T3 Stack 기반 화면, 조회 API, PostgreSQL 스키마와 수집 스케줄러의 설계 담당",
              "스케줄러의 수집, 적재와 API의 조회 책임을 분리해 외부 로그 서버를 화면에서 직접 호출하지 않도록 구성하고, 사내 계정 기반 이용 지표 대시보드로 운영",
              "PR 검증 범위를 유지하며 서버 테스트를 분할해 병렬 실행하도록 개선. CI 실행 시간을 약 182초에서 122초로 33% 단축(전후 각 14회 중앙값)",
            ],
          },
          {
            title: "알툴즈 리뉴얼, 백오피스 - 렌더링 전략과 반복 UI 구조 개선",
            techStack: ["Next.js", "TypeScript", "React", "Yarn Berry"],
            contents: [
              "알툴즈 리뉴얼 아키텍처 설계를 주도하고 콘텐츠별 SSR, SSG, ISR 전략 수립. picture와 Next.js 이미지 서버로 이미지 전달 및 렌더링 방식 개선",
              "Yarn Berry 전환, 번들 최적화와 Next.js standalone 적용으로 느린 빌드 및 배포 구성 개선",
              "백오피스는 MUI와 Formik 기반으로 테이블, 검색, 모달의 공통 템플릿을 정하고 화면별 설정을 분리해 반복 구현과 유지보수 대상 축소",
            ],
          },
          {
            title: "Perso Studio - 슬라이드 단위 TTS 요청 구조 개선",
            techStack: ["React", "TypeScript", "Recoil"],
            contents: [
              "대사별 TTS 생성 요청과 폴링으로 네트워크 부담이 커지고 비동기 흐름 추적이 어려워 슬라이드를 기준으로 요청, 처리 단위 재설계",
              "백엔드와 일괄 API 적용을 협의해 대사 배열을 한 번에 전달하고, 분산된 로직을 슬라이드 단위 큐로 통합해 요청 순서 관리",
              "전체 생성 요청은 대사별 N회에서 슬라이드별 1회로 축소하고 개별 대사 수정은 기존 단건 요청을 유지해 사용자 편집 흐름 보존",
            ],
          },
          {
            title: "번역 자동화 - 번역 키 규칙과 코드 반영 절차 정비",
            techStack: ["TypeScript", "ms-excel-intl"],
            contents: [
              "번역 엑셀의 변경분을 수동 반영하며 발생하는 키 누락, 중복과 잘못된 연결 위험에 대응해 기획팀과 서비스, 화면, 기능, 상황별 키 명명 규칙 합의",
              "ms-excel-intl로 키 추출, 정렬, 정합성 검증과 코드 반영 과정을 자동화하고 기획팀의 기존 엑셀 작성 절차 유지",
              "작성 규칙과 사용법의 팀 도입을 주도해 담당자 간 전달 기준을 정리하고 번역 변경분의 수동 대조, 복사 절차 제거",
            ],
          },
          {
            title: "SDK, 고객 웹앱 개발 지원 - 공용 개발 도구와 QA 도구",
            techStack: ["Claude Code", "Codex", "TypeScript"],
            contents: [
              "테스트와 교차 리뷰, Jira 작업 기록의 반복 절차를 LLM 하네스로 구성하고, 자동화 범위와 사람이 판단할 리뷰 반영, PR 머지 단계 구분",
              "Claude Code와 Codex가 동일 지침을 다르게 수행하는 문제에 대응해 스킬과 호출 경로를 분리하고 도구별 작업 절차 구성",
              <span key="qa-tools">
                {"기기별 화면 비교와 재현 환경 공유의 반복 작업을 줄이기 위해 "}
                <Anchor href="https://github.com/cola9k1/multibox" target="_blank" rel="noopener noreferrer">Multibox</Anchor>
                {", "}
                <Anchor href="https://chromewebstore.google.com/detail/bggdmmjfgocbbjdpjjhbibljhmdnoffh" target="_blank" rel="noopener noreferrer">Browser Support Reporter</Anchor>
                {"를 제공하고, 화면 비교 및 재현 자료의 Jira 등록 자동화를 QA팀에서 사용"}
              </span>,
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
