import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zynthetix — Tools for AI-assisted development",
  description: "Zynthetix builds focused macOS tools for developers working with AI coding agents.",
  openGraph: {
    title: "Zynthetix",
    description: "Focused macOS tools for AI-assisted development.",
    siteName: "Zynthetix",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-bg text-[#e8e8ea] min-h-screen">{children}</body>
    </html>
  );
}
