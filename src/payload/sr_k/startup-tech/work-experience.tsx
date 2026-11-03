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
              "타입 확인과 버전 관리가 어려운 SDK 파일 배포 방식을 npm 패키지로 전환하도록 제안하고, 인프라팀 및 CTO와 공개 범위를 검토해 TypeScript API와 배포 구조 설계",
              "SDK 변경마다 빌드 파일을 예제 저장소에 복사하던 작업을 없애기 위해 Turborepo 모노레포로 SDK, 예제, SDK Playground를 통합해 같은 소스로 개발과 검증 진행",
              "사내 개발자는 Playground에서 아바타 렌더링과 버전별 API, PoC를 확인하고 외부 개발자는 Next.js, Svelte, Vanilla JS 예제와 버전별 문서로 연동하도록 구성",
            ],
          },
          {
            title: "PDS 디자인 시스템 - 공통 UI 도입과 서비스별 확장",
            techStack: ["React", "TypeScript", "Radix", "styled-components", "Storybook"],
            contents: [
              "세 서비스에서 반복되는 UI를 공통화하기 위해 디자인 시스템 도입을 제안하고 디자인팀과 토큰, 컴포넌트 범위 합의. 코드 교체와 학습 비용을 고려해 styled-components를 유지하고 Radix 채택",
              "Headless UI 기반의 단위 컴포넌트와 조합 컴포넌트를 분리하고 Slot, 다형성 API로 서비스별 변형 지원. 모노레포의 JIT 방식으로 별도 패키지 배포 없이 서비스 개발과 병행해 적용",
              "공통 컴포넌트에 맞추기 어려운 요구는 서비스별 조합으로 대응하도록 기준을 정하고, Storybook을 디자인, 기획, QA의 동작 확인 창구로 활용해 세 서비스에 적용",
            ],
          },
          {
            title: "Perso Studio - 슬라이드 단위 TTS 요청 구조 개선",
            techStack: ["React", "TypeScript", "Recoil"],
            contents: [
              "대사별 TTS 생성과 폴링이 네트워크 부담을 높이고 처리 흐름을 추적하기 어려워 사용자 작업 단위인 슬라이드에 맞춰 요청 구조 재설계",
              "백엔드에 대사 배열을 받는 일괄 API를 제안하고 분산된 비동기 로직을 슬라이드 단위 큐로 모아 배치 처리와 요청 순서 관리",
              "전체 생성 요청을 대사별 N회에서 슬라이드별 1회로 줄이면서 개별 대사 수정은 단건 요청을 유지해 기존 편집 방식 보존",
            ],
          },
          {
            title: "대시보드 앱 - 이용 지표 제공과 풀스택 설계",
            techStack: ["Next.js", "TypeScript", "tRPC", "Prisma", "PostgreSQL"],
            contents: [
              "키오스크 이용 로그를 방문, 매장별 지표로 제공하기 위해 전송 규격과 집계 기준을 협의하고 T3 Stack 기반 화면, API, DB 스키마와 수집 스케줄러 설계",
              "수집과 조회의 책임을 분리해 스케줄러가 적재한 데이터를 API로 제공하고, 사내 계정에서 이용 지표를 확인하도록 운영",
              "PR 검증 대기를 줄이기 위해 테스트 범위는 유지하고 서버 테스트를 병렬화해 CI 실행 시간을 약 182초에서 122초로 33% 단축(전후 각 14회 중앙값)",
            ],
          },
          {
            title: "SDK, 고객 웹앱 개발 지원 - 공용 개발 도구와 QA 도구",
            techStack: ["Claude Code", "Codex", "TypeScript"],
            contents: [
              "테스트 작성과 교차 리뷰 누락을 줄이기 위해 LLM 하네스로 Jira 일감 분석, 테스트, 리뷰, PR 생성과 작업 기록을 자동화하고 리뷰 반영과 머지는 사람이 판단하도록 구성",
              "동일한 지침으로도 작업 절차를 따르는 방식이 달라 Claude Code와 Codex의 스킬, 호출 경로를 분리해 도구별 실행 방식에 대응",
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
            title: "번역 자동화 - 번역 키 규칙과 코드 반영 절차 정비",
            techStack: ["TypeScript", "ms-excel-intl"],
            contents: [
              "번역 엑셀을 코드에 수동 복사하면서 생기는 누락, 중복과 잘못된 키 연결 위험을 줄이기 위해 기획팀과 서비스, 화면, 기능, 상황별 계층형 키 규칙 합의",
              "기획팀의 엑셀 작성 방식은 유지하고 ms-excel-intl로 키 추출, 정렬, 정합성 검증과 코드 반영을 자동화하도록 설계",
              "작성 규칙과 사용법을 공유하며 팀 도입을 주도해 번역 변경분을 사람이 일일이 대조하고 복사하던 절차 제거",
            ],
          },
          {
            title: "알툴즈 리뉴얼, 백오피스 - 렌더링 전략과 반복 UI 구조 개선",
            techStack: ["Next.js", "TypeScript", "React", "Yarn Berry"],
            contents: [
              "리뉴얼에서 콘텐츠 성격에 맞춰 Next.js의 SSR, SSG, ISR을 구분하고, 이미지 로딩 문제에는 picture와 Next.js 이미지 서버를 적용하도록 설계",
              "배포 과정의 병목이 된 느린 빌드를 개선하기 위해 Yarn Berry 전환, 번들 최적화와 Next.js standalone 적용",
              "백오피스의 테이블, 검색, 모달은 MUI와 Formik 기반 템플릿으로 구성해 공통 구조와 화면별 설정을 분리하고 중복 구현 축소",
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
