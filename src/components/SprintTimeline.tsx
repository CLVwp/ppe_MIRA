"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SectionReveal } from "@/components/animate-ui/SectionReveal";
import { cn } from "@/lib/utils";

const SPRINTS = [
  {
    id: "s1",
    title: "Sprint 1",
    weekLabel: "Semaine du 1er sept. 2025",
    shortLabel: "1er sept.",
    content:
      "Cadrage du projet, spécifications fonctionnelles et techniques. Mise en place de l'équipe et des outils (repo, CI, conventions).",
  },
  {
    id: "s2",
    title: "Sprint 2",
    weekLabel: "Semaine du 6 oct. 2025",
    shortLabel: "6 oct.",
    content:
      "Design de l'architecture et des interfaces. Premiers prototypes et validation des choix techniques avec le client.",
  },
  {
    id: "s3",
    title: "Sprint 3",
    weekLabel: "Semaine du 1er déc. 2025",
    shortLabel: "1er déc.",
    content:
      "Développement des briques principales : backend, API, frontend. Intégration des modules IA et systèmes embarqués.",
  },
  {
    id: "s4",
    title: "Sprint 4",
    weekLabel: "Semaine du 2 fév. 2026",
    shortLabel: "2 fév.",
    content:
      "Tests d'intégration et de non-régression. Corrections et optimisations. Préparation de la démo et de la livraison.",
  },
  {
    id: "s5",
    title: "Sprint 5",
    weekLabel: "Semaine du 6 avr. 2026",
    shortLabel: "6 avr.",
    content:
      "Déploiement, documentation utilisateur et technique. Rétrospective et livraison finale du projet MIRA.",
  },
];

export default function SprintTimeline() {
  const [selectedId, setSelectedId] = useState<string | null>(SPRINTS[0].id);
  const selected = SPRINTS.find((s) => s.id === selectedId) ?? SPRINTS[0];

  return (
    <SectionReveal id="sprints" className="scroll-mt-20 py-20 px-4">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
            Sprints
          </h2>
          <p className="mt-2 text-[var(--text-muted)]">
            Timeline sept. 2025 → avr. 2026. Cliquez sur un sprint pour afficher le détail.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-[var(--border)] bg-[var(--navy-card)] p-6 md:p-8"
        >
          {/* Timeline : 5 cercles régulièrement espacés */}
          <div className="relative">
            <div className="flex justify-between px-2">
              {SPRINTS.map((sprint, index) => (
                <motion.button
                  key={sprint.id}
                  type="button"
                  onClick={() => setSelectedId(sprint.id)}
                  className="relative z-10 flex flex-col items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--jeece-green)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--navy-card)]"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 bg-[var(--navy-card)] text-sm font-semibold transition",
                      selectedId === sprint.id
                        ? "border-[var(--jeece-green)] text-[var(--jeece-green)] shadow-lg shadow-[var(--jeece-green)]/20"
                        : "border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--jeece-green)]/50 hover:text-white"
                    )}
                  >
                    {index + 1}
                  </span>
                  <span className="max-w-[4.5rem] text-center text-xs font-medium text-[var(--text-muted)]">
                    {sprint.shortLabel}
                  </span>
                </motion.button>
              ))}
            </div>
            {/* Ligne de connexion entre les cercles */}
            <div className="absolute left-6 right-6 top-5 z-0 h-0.5 rounded-full bg-[var(--navy-light)]" />
            <div className="mt-2 flex justify-between px-2 text-xs text-[var(--text-muted)]">
              <span>Sept. 2025</span>
              <span>Avr. 2026</span>
            </div>
          </div>

          {/* Panel du sprint sélectionné avec animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="mt-8 rounded-xl border border-[var(--border)] bg-[var(--navy)]/60 p-6"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-xs font-medium uppercase tracking-wider text-[var(--jeece-green)]"
              >
                {selected.weekLabel}
              </motion.span>
              <motion.h3
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                className="mt-1 text-xl font-bold text-white"
              >
                {selected.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-3 text-[var(--text-muted)] leading-relaxed"
              >
                {selected.content}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </SectionReveal>
  );
}
