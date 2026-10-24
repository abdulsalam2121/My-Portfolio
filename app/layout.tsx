import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";

const body = Geist({ variable: "--font-body", subsets: ["latin"] });
const head = Bricolage_Grotesque({ variable: "--font-head", subsets: ["latin"], axes: ["opsz"] });

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title: { default: `${profile.name} · Full-stack developer`, template: `%s · ${profile.short}` },
  description:
    "Full-stack developer building production React and Node.js products. Creator of LoyaltyPro and CoverCell. Open to freelance and remote roles.",
  openGraph: {
    title: `${profile.name} · Full-stack developer`,
    description: "Production React and Node.js products, designed and shipped end to end.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f6fb" },
    { media: "(prefers-color-scheme: dark)", color: "#080914" },
  ],
};

// runs before paint so the saved theme never flashes
const themeScript = `try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t;else if(matchMedia('(prefers-color-scheme: dark)').matches)document.documentElement.dataset.theme='dark'}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${body.variable} ${head.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
