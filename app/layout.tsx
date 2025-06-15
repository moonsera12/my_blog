import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "@/components/common/header";
import { Footer } from "@/components/common/footer";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://yourblog.com'),
  title: {
    default: "AI & 딥러닝 기술 블로그",
    template: "%s | AI & 딥러닝 기술 블로그"
  },
  description: "PyTorch, 트랜스포머, ChatGPT 등 최신 AI 기술과 딥러닝에 대한 심층적인 기술 블로그입니다.",
  keywords: ["AI", "딥러닝", "PyTorch", "트랜스포머", "ChatGPT", "LangChain", "머신러닝"],
  authors: [{ name: "AI 전문가" }],
  creator: "AI 전문가",
  publisher: "AI 전문가",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://yourblog.com',
    title: 'AI & 딥러닝 기술 블로그',
    description: 'PyTorch, 트랜스포머, ChatGPT 등 최신 AI 기술과 딥러닝에 대한 심층적인 기술 블로그입니다.',
    siteName: 'AI & 딥러닝 기술 블로그',
    images: [{
      url: '/images/og-image.png',
      width: 1200,
      height: 630,
      alt: 'AI & 딥러닝 기술 블로그',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI & 딥러닝 기술 블로그',
    description: 'PyTorch, 트랜스포머, ChatGPT 등 최신 AI 기술과 딥러닝에 대한 심층적인 기술 블로그입니다.',
    images: ['/images/og-image.png'],
    creator: '@yourtwitterhandle',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="h-full">
      <body className={`${inter.className} min-h-full flex flex-col bg-[#FAFAFA]`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
