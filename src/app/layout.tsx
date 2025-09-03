import localFont from "next/font/local";
import SyncThemeScript from "@/components/widget/SyncThemeScript";

import "./globals.css";
import ThemeWidget from "@/components/widget/ThemeWidget";

const pretendard = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <SyncThemeScript />
      </head>
      <body className={`${pretendard.className} linear-transition-color`}>
        <header className="print:hidden h-6" />
        <main className="max-w-4xl m-auto px-6 py-16 print:py-0">
          {children}
        </main>
        <footer className="print:hidden h-6" />
        <ThemeWidget className="fixed bottom-8 right-8 print:hidden" />
      </body>
    </html>
  );
}
