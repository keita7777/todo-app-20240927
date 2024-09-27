import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";
import MainNav from "@/components/MainNav";

export const metadata: Metadata = {
  title: "TODO App",
  description: "TODOを作成できます",
};

const noto = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${noto.className}`}>
        <div className="flex min-h-screen">
          <MainNav />
          {children}
        </div>
      </body>
    </html>
  );
}
