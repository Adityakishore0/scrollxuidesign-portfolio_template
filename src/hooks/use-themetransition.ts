"use client";

import { useEffect, useCallback } from "react";
import { useTheme } from "next-themes";
import { usePixelTransition } from "@/hooks/usepixel-transition";
import { useSound } from "@/hooks/use-sound";
import { click8bitSound } from "@/lib/click-8bit";


export function useThemeTransition() {
  const { resolvedTheme, theme, setTheme } = useTheme();
  const { runTransition } = usePixelTransition({ cols: 20, rows: 12 });

  const [play] = useSound(click8bitSound, { volume: 0.1 });

  const toggleTheme = useCallback(
    (x?: number, y?: number) => {
      const currentTheme = resolvedTheme || theme;
      const isDark = currentTheme === "dark";

      setTimeout(() => {
        play();
      }, 60);

      runTransition(
        "wave",
        isDark,
        () => setTheme(isDark ? "light" : "dark"),
        x && y ? { x, y } : undefined
      );
    },
    [resolvedTheme, theme, runTransition, setTheme, play]
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;

      if (e.key.toLowerCase() === "d") {
        toggleTheme(window.innerWidth / 2, window.innerHeight / 2);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [toggleTheme]);

  return toggleTheme;
}