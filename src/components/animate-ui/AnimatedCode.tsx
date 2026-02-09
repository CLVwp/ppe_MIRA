"use client";

import { motion, useReducedMotion } from "motion/react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

type AnimatedCodeProps = {
  code: string;
  language?: string;
  duration?: number;
  delay?: number;
  className?: string;
  showCursor?: boolean;
};

export function AnimatedCode({
  code,
  language = "typescript",
  duration = 3000,
  delay = 0,
  className,
  showCursor = true,
}: AnimatedCodeProps) {
  const [displayed, setDisplayed] = useState("");
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      const id = setTimeout(() => setDisplayed(code), 0);
      return () => clearTimeout(id);
    }
    const timeout = setTimeout(() => {
      const chars = code.split("");
      let i = 0;
      const step = Math.max(1, Math.floor(chars.length / (duration / 16)));
      const interval = setInterval(() => {
        i = Math.min(i + step, chars.length);
        setDisplayed(chars.slice(0, i).join(""));
        if (i >= chars.length) clearInterval(interval);
      }, 16);
      return () => clearInterval(interval);
    }, delay);
    return () => clearTimeout(timeout);
  }, [code, duration, delay, reduceMotion]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn(
        "overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--navy)] p-4 font-mono text-sm",
        className
      )}
    >
      <div className="mb-2 flex items-center gap-2 border-b border-[var(--border)] pb-2">
        <span className="h-2 w-2 rounded-full bg-red-500/80" />
        <span className="h-2 w-2 rounded-full bg-amber-500/80" />
        <span className="h-2 w-2 rounded-full bg-[var(--jeece-green)]/80" />
        <span className="ml-2 text-xs text-[var(--text-muted)]">{language}</span>
      </div>
      <pre className="overflow-x-auto text-[var(--text-muted)]">
        <code>
          {displayed}
          {showCursor && !reduceMotion && (
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block w-2 bg-[var(--jeece-green)]"
            />
          )}
        </code>
      </pre>
    </motion.div>
  );
}
