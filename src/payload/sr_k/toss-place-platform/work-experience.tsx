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
              "타입 확인과 서버, 클라이언트 코드 구분이 어려운 파일 배포 방식을 개선하기 위해 npm 공개 전환 제안. TypeScript API와 배포 구조 설계 주도",
              "SDK 수정마다 예제 저장소에 빌드 파일을 복사해야 해 SDK, 예제, SDK Playground를 모노레포로 통합하고 수동 파일 교체 제거",
              "아바타 렌더링과 버전별 API를 함께 확인할 환경이 없어 SDK 유지보수자와 사내 연동 개발자를 위한 SDK Playground 앱 구축",
              "SDK Playground에서 기능을 확인하고 같은 SDK 소스로 테스트, PoC 환경을 구성해 변경 검증과 시연에 활용. SDK 개발과 연동 검증을 분리된 저장소에서 진행하던 불편 개선",
              "외부 개발자에게는 Next.js, Svelte, Vanilla JS 예제와 버전별 API 문서를 제공해 패키지 설치부터 환경별 연동과 검증까지 지원",
            ],
          },
          {
            title: "SDK, 고객 웹앱 개발 지원 - 공용 개발 도구와 QA 도구",
            techStack: ["Claude Code", "Codex", "TypeScript"],
            contents: [
              "LLM 하네스를 구축해 Jira 일감 분석, 테스트 작성, 교차 리뷰, PR 생성과 작업 기록을 자동화",
              <span key="qa-tools">
                <Anchor href="https://github.com/cola9k1/multibox" target="_blank" rel="noopener noreferrer">Multibox</Anchor>
                {", "}
                <Anchor href="https://chromewebstore.google.com/detail/bggdmmjfgocbbjdpjjhbibljhmdnoffh" target="_blank" rel="noopener noreferrer">Browser Support Reporter</Anchor>
                {"로 기기 화면 비교와 재현 자료의 Jira 자동화, QA팀 사용"}
              </span>,
            ],
          },
          {
            title: "대시보드 앱",
            techStack: ["Next.js", "TypeScript", "tRPC", "Prisma", "PostgreSQL"],
            contents: [
              "Next.js 화면, 조회 API, PostgreSQL 스키마와 로그 수집 스케줄러의 풀스택 구조를 설계하고 구현 방향 검토",
              "수집과 집계는 서버에서 처리하고 화면은 DB에 저장된 지표를 조회하도록 분리해 방문, 매장별 이용 현황 제공",
              "PR 검증 대기를 줄이려 서버 테스트를 분할해 병렬 실행, 약 182초에서 122초(33%)로 단축(전후 14회 중앙값)",
            ],
          },
          {
            title: "Perso Studio - TTS 요청 구조 개선",
            techStack: ["React", "TypeScript", "Recoil"],
            contents: [
              "슬라이드의 대사별 TTS 생성과 폴링이 네트워크 부담을 높이고 비동기 처리 추적을 어렵게 함",
              "백엔드에 일괄 API를 제안해 슬라이드당 N건을 1회로 묶고 처리 로직과 큐를 슬라이드 단위로 정리",
              "전체 생성은 일괄 요청하되 개별 대사 수정은 기존 단건 요청을 유지해 사용자의 편집 방식 보존",
            ],
          },
          {
            title: "PDS 디자인 시스템 - 세 서비스의 공통 UI 설계",
            techStack: ["React", "TypeScript", "Radix", "styled-components", "Storybook"],
            contents: [
              "세 서비스의 UI 중복 구현을 줄이기 위해 도입을 제안하고 디자인팀과 토큰, 컴포넌트 기준 수립 주도",
              "코드 교체와 학습 비용을 고려해 styled-components를 유지하고 Radix 기반 단위, 조합 컴포넌트 설계",
              "JIT로 공통 UI를 함께 반영하고 서비스별로 조합하도록 설계해 세 서비스 적용, Storybook으로 사용법 공유",
            ],
          },
          {
            title: "번역 자동화",
            techStack: ["TypeScript", "ms-excel-intl"],
            contents: [
              "번역 엑셀의 변경분을 코드에 수동 복사하면서 누락, 중복, 오타와 잘못된 키 연결 위험 발생",
              "기획팀과 서비스, 화면, 기능, 상황별 키 규칙을 정하고 ms-excel-intl 개발과 도입 주도",
              "엑셀 작성 방식은 유지하고 키 추출, 정렬, 정합성 검증과 반영을 자동화해 수동 대조, 복사 제거",
            ],
          },
          {
            title: "알툴즈 리뉴얼, 백오피스 개발",
            techStack: ["Next.js", "TypeScript", "React", "Yarn Berry"],
            contents: [
              "리뉴얼 설계 주도, SSR/SSG/ISR 분리와 picture, Next.js 이미지 서버 적용으로 로딩 문제 개선",
              "Yarn Berry 전환과 번들 최적화, standalone 적용으로 느린 빌드 개선",
              "백오피스는 MUI로 전환하고 Formik 기반 UI 템플릿으로 테이블, 검색, 모달 중복 구현 축소",
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
            title: "위하고 경비 청구 모바일",
            techStack: ["Expo (React Native)", "TypeScript", "Redux-Saga"],
            contents: [
              "초기화 요청의 의존 관계를 분석해 병렬화하고 API, 로딩, 오류 처리를 공통화",
              "Expo의 S3 업로드 제약을 개발자와 확인해 웹 업로드 방식으로 대응하고 해결 과정을 사내 가이드로 공유",
            ],
          },
          {
            title: "위하고 법률 서비스, SmartA 웹 전환",
            techStack: ["React", "Java Spring", "PostgreSQL", "Elasticsearch"],
            contents: [
              "법률 서비스의 프론트엔드, 백엔드와 검색 기능 개발. 1,000개 이상 기업이 사용하던 SmartA의 견적서, 입출고, 환경설정과 공통 프린트 모듈 웹 개발 담당",
            ],
          },
        ],
      },
    ],
  },
];

export default payload;
