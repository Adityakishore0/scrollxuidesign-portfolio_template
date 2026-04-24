"use client";

import { SunIcon, MoonIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useThemeTransition } from "@/hooks/use-themetransition";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function ModeToggle({ className }: { className?: string }) {
  const toggleTheme = useThemeTransition();

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          onClick={(e) => toggleTheme(e.clientX, e.clientY)}
          className={cn(
            "relative flex items-center justify-center w-8 h-8 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-accent transition-all",
            className
          )}
        >
          <SunIcon className="h-3.5 w-3.5 absolute transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="h-3.5 w-3.5 absolute transition-all rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
        </button>
      </TooltipTrigger>

      <TooltipContent
        side="bottom"
        sideOffset={6}
        className="flex items-center gap-2 px-2.5 py-1.5"
      >
        <span className="text-xs whitespace-nowrap">Toggle Mode</span>
        <span className="text-[10px] px-1.5 py-0.5 rounded border border-border bg-muted text-muted-foreground">
          D
        </span>
      </TooltipContent>
    </Tooltip>
  );
}