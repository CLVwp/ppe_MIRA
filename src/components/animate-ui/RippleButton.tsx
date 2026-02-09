"use client";

import { motion } from "motion/react";
import { useRef, useState, type ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/utils";

type RippleButtonProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "outline";
};

export function RippleButton({
  className,
  variant = "primary",
  children,
  ...props
}: RippleButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    setRipples((prev) => [...prev, { x, y, id }]);
    setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 600);
  };

  return (
    <a
      ref={ref}
      onClick={handleClick}
      className={cn(
        "relative overflow-hidden rounded-full px-5 py-2.5 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--jeece-green)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--navy)]",
        variant === "primary" &&
          "bg-[var(--jeece-green)] text-white hover:bg-[var(--jeece-green-hover)]",
        variant === "outline" &&
          "border border-[var(--border)] bg-white/5 text-white hover:bg-white/10",
        className
      )}
      {...props}
    >
      {ripples.map(({ x, y, id }) => (
        <motion.span
          key={id}
          className="absolute rounded-full bg-white/30"
          initial={{ width: 0, height: 0, x, y, left: 0, top: 0 }}
          animate={{
            width: 400,
            height: 400,
            x: x - 200,
            y: y - 200,
            opacity: [0.4, 0],
          }}
          transition={{ duration: 0.6 }}
          style={{ left: 0, top: 0 }}
        />
      ))}
      <span className="relative z-10">{children}</span>
    </a>
  );
}
