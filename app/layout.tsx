import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import FTCDisclosure from "@/components/FTCDisclosure";
import EmailCapture from "@/components/EmailCapture";
import SidebarCapture from "@/components/SidebarCapture";
import ExitIntent from "@/components/ExitIntent";
import Link from "next/link";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Chronos Trail — AI Tools Reviews & Comparisons",
    template: "%s | Chronos Trail",
  },
  description:
    "In-depth reviews, comparisons, and buyer guides for AI tools. Find the best AI software for your workflow.",
  metadataBase: new URL("https://chronostrail.com"),
  openGraph: {
    siteName: "Chronos Trail",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <meta name="p:domain_verify" content="87f47da3fb6946c9d8b93b229cf62724" />
        <meta name="google-site-verification" content="FJcq25EHhvyx30E-9uy7GaffTxtYYPC8OS_WxI_7K8c" />
        <Script
          defer
          data-domain="chronostrail.com"
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      </head>
      <body className={`${inter.className} min-h-full flex flex-col`}>
        <FTCDisclosure />
        <header className="border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
            <Link href="/" className="font-semibold text-lg text-slate-900 tracking-tight">
              Chronos Trail
            </Link>
            <nav className="flex gap-7 text-sm text-slate-500">
              <Link href="/blog" className="hover:text-slate-900 transition-colors">Reviews</Link>
              <Link href="/tools" className="hover:text-slate-900 transition-colors">Tools</Link>
              <Link href="/newsletter" className="hover:text-slate-900 transition-colors">Newsletter</Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <SidebarCapture />
        <ExitIntent />
        <footer className="border-t border-slate-100 mt-20 py-10 text-center text-sm text-slate-400">
          <div className="max-w-md mx-auto mb-8">
            <EmailCapture />
          </div>
          <p>© {new Date().getFullYear()} Chronos Trail. This site contains affiliate links.</p>
        </footer>
      </body>
    </html>
  );
}
