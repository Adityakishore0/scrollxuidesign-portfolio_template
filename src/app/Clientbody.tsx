"use client";

import Image from "next/image";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/navbar";
import { SideBento } from "@/components/side-bento";
import ScrollToTop from "@/components/scrolltotop";

export default function ClientBody({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider delayDuration={0}>
        <div className="relative bg-background">
          
          <SideBento />

          <div className="relative max-w-5xl select-none mx-auto">
            <Navbar />
            <Banner src="/banner.gif" />
            <div className="max-w-5xl mx-auto border-x border-border min-h-screen">
              {children}
            </div>
          </div>
         <ScrollToTop />
        </div>
      </TooltipProvider>
    </ThemeProvider>
  );
}

function Banner({
  src,
  video,
  children,
}: {
  src?: string;
  video?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className="relative w-full overflow-hidden bg-black"
      style={{ aspectRatio: "2560 / 423" }}
    >
      {src && (
        <Image
          unoptimized
          src={src}
          alt="Banner"
          fill
          className="object-cover object-center"
          priority
        />
      )}
      {video && (
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
      )}
      {children}
    </div>
  );
}