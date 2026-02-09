"use client";

import { motion } from "motion/react";

const links = [
  { href: "#presentation", label: "Accueil" },
  { href: "#equipe", label: "Équipe" },
  { href: "#sprints", label: "Sprints" },
  { href: "#materiel", label: "Matériel" },
  { href: "#gantt", label: "Planning" },
];

export default function Nav() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--navy)]/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-center gap-1 px-4 py-4 sm:gap-0 sm:px-6">
        <motion.a
          href="#presentation"
          className="mr-auto text-lg font-bold tracking-tight text-white"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          MIRA
        </motion.a>
        <div className="flex gap-1 rounded-full border border-[var(--border)] bg-white/5 p-1">
          {links.map(({ href, label }, i) => (
            <motion.a
              key={href}
              href={href}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 * i }}
              className="rounded-full px-4 py-2 text-sm font-medium text-[var(--text-muted)] transition hover:bg-white/10 hover:text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {label}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
