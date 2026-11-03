"use client";

import { useRef, useState } from "react";

export default function ExportPdf() {
  const busy = useRef(false);
  const [isExporting, setIsExporting] = useState(false);
  const [error, setError] = useState("");

  async function exportPdf() {
    if (busy.current) return;
    busy.current = true;
    setIsExporting(true);
    setError("");
    let downloadUrl: string | undefined;

    try {
      const { createResumePdf } = await import("./ResumePdf");
      const blob = await createResumePdf(window.location.origin);
      downloadUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = "김태현_경력기술서_startup-tech.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch {
      setError("PDF를 만들지 못했습니다. 잠시 후 다시 시도해 주세요.");
    } finally {
      if (downloadUrl) {
        const url = downloadUrl;
        window.setTimeout(() => URL.revokeObjectURL(url), 60_000);
      }
      busy.current = false;
      setIsExporting(false);
    }
  }

  return (
    <div className="mb-8 flex flex-col items-end gap-2 print:hidden">
      <button
        type="button"
        onClick={exportPdf}
        disabled={isExporting}
        aria-busy={isExporting}
        aria-describedby="pdf-export-help"
        className="rounded-md border border-current px-4 py-2 text-sm hover:opacity-70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 disabled:cursor-wait disabled:opacity-50"
      >
        {isExporting ? "PDF 만드는 중..." : "PDF 다운로드"}
      </button>
      <p id="pdf-export-help" className="text-sm text-gray-500">
        이력서 본문만 A4 PDF로 내려받습니다.
      </p>
      {error && <p role="alert" className="text-sm text-red-600">{error}</p>}
    </div>
  );
}
