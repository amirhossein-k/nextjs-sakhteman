import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "سازه‌سازان مدرن | خدمات تخصصی ساختمان و بازسازی",
  description: "مجری پروژه‌های نوسازی، بازسازی، تیغه‌چینی و دکوراسیون مدرن با بالاترین کیفیت.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body className="bg-gray-50 text-gray-900 antialiased font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
