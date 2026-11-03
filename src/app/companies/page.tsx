import type { Metadata } from "next";
import Link from "next/link";
import resumeDates from "./resume-dates.json";

export const metadata: Metadata = {
  title: "김태현 | 이력서 목록",
  description: "메인 이력서와 지원 목적별 이력서, 보관된 이전 버전",
};

const groups = [
  {
    title: "현재 이력서",
    items: [
      { href: "/", title: "메인 이력서", description: "설계 판단과 협업, 서비스 개선 경험을 담은 기본 이력서" },
      { href: "/startup-tech/", title: "스타트업", description: "문제 정의와 기술 선택, 개발 환경 개선 경험 중심" },
      { href: "/large-tech/", title: "중견 / 대기업", description: "담당 범위와 시스템 구조, 부서 간 협업 및 운영 경험 중심" },
    ],
  },
  {
    title: "지원별 보관본",
    items: [
      { href: "/toss-place-platform/", title: "토스플레이스 플랫폼", description: "SDK 공개 배포와 공통 UI, 개발 도구 경험" },
      { href: "/toss-bank/", title: "토스뱅크", description: "토스뱅크 지원용 이력서" },
      { href: "/toss-invest/", title: "토스증권", description: "토스증권 지원용 이력서" },
      { href: "/dau-data/", title: "다우데이타", description: "다우데이타 지원용 이력서" },
    ],
  },
  {
    title: "이전 버전",
    items: [
      { href: "/2026-03-30/", title: "2026-03-30 보관본", description: "루트 이력서 교체 전 보관한 내용" },
      { href: "/latest/", title: "기존 latest 버전", description: "별도로 유지 중인 이전 이력서" },
      { href: "/simple/", title: "간략 버전", description: "기존 간략 이력서" },
    ],
  },
];

export default function CompaniesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight">이력서 목록</h1>
      <p className="mt-3 text-gray-500">김태현의 메인 이력서와 지원 목적별 버전입니다.</p>
      <p className="mt-2 mb-12 text-sm text-gray-500">수정일은 본문, 페이지, PDF 파일의 마지막 Git 커밋 기준입니다. 보관본은 경로 생성일이 표시될 수 있습니다.</p>
      {groups.map(group => (
        <section key={group.title} className="mb-10" aria-label={group.title}>
          <h2 className="mb-4 text-xl font-semibold">{group.title}</h2>
          <ul className="grid gap-3 sm:grid-cols-2">
            {group.items.map(item => (
              <li key={item.href}>
                <Link href={item.href} className="block h-full rounded-lg border border-gray-400/30 p-5 transition-colors hover:border-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500">
                  <h3 className="font-semibold text-sky-600 dark:text-sky-400">{item.title} <span aria-hidden="true">↗</span></h3>
                  <p className="mt-2 text-sm text-gray-500">{item.description}</p>
                  <p className="mt-3 text-xs text-gray-500">마지막 수정 <time dateTime={resumeDates[item.href as keyof typeof resumeDates]}>{resumeDates[item.href as keyof typeof resumeDates]}</time></p>
                  <p className="mt-1 text-xs text-gray-500">/sr_k{item.href}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
