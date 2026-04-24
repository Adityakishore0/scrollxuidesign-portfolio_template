import { DATA } from "@/data/resume";
import type { Metadata } from "next";
import "./globals.css";
import ClientBody from "./Clientbody";

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: { default: DATA.name, template: `%s | ${DATA.name}` },
  description: DATA.description,
  openGraph: {
    title: DATA.name, description: DATA.description,
    url: DATA.url, siteName: DATA.name, locale: "en_US", type: "website",
  },
  robots: { index: true, follow: true },
  twitter: { title: DATA.name, card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
