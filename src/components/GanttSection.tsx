"use client";

import { motion } from "motion/react";
import { SectionReveal, StaggerChildren, StaggerItem } from "@/components/animate-ui/SectionReveal";

/* Période du Gantt : septembre 2025 → avril 2026 */
const GANTT_START = "Septembre 2025";
const GANTT_END = "Avril 2026";

const MONTHS = [
  "Sept. 2025",
  "Oct.",
  "Nov.",
  "Déc.",
  "Jan. 2026",
  "Fév.",
  "Mar.",
  "Avr. 2026",
];

/** Nombre de semaines du 1er sept. 2025 à la fin avr. 2026 (≈ 35 semaines) */
const TOTAL_WEEKS = 35;

const TASKS = [
  { id: "1", name: "Spécifications", startWeek: 0, durationWeeks: 4 },
  { id: "2", name: "Design", startWeek: 4, durationWeeks: 6 },
  { id: "3", name: "Développement", startWeek: 11, durationWeeks: 14 },
  { id: "4", name: "Tests", startWeek: 24, durationWeeks: 6 },
  { id: "5", name: "Déploiement", startWeek: 30, durationWeeks: 5 },
];

const DOC_TASK = {
  id: "doc",
  name: "Travail documentaire",
  startWeek: 4,
  durationWeeks: 30,
};

function GanttBar({
  label,
  startWeek,
  durationWeeks,
  index,
  variant = "default",
}: {
  label: string;
  startWeek: number;
  durationWeeks: number;
  index: number;
  variant?: "default" | "doc";
}) {
  const left = (startWeek / TOTAL_WEEKS) * 100;
  const width = (durationWeeks / TOTAL_WEEKS) * 100;

  return (
    <StaggerItem>
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.35, delay: 0.05 * index }}
        className="flex flex-col gap-2 sm:flex-row sm:items-center"
      >
        <div className="flex shrink-0 items-center justify-between gap-4 sm:w-44 sm:justify-start">
          <span className="text-sm font-medium text-white">{label}</span>
          <span className="text-xs text-[var(--text-muted)] sm:hidden">
            S{startWeek}–{startWeek + durationWeeks}
          </span>
        </div>
        <div className="relative h-9 flex-1 rounded-lg bg-[var(--navy-light)]">
          <motion.div
            className={variant === "doc"
              ? "absolute inset-1 rounded-md bg-amber-500/80"
              : "absolute inset-1 rounded-md bg-[var(--jeece-green)]"}
            initial={{ width: 0 }}
            whileInView={{ width: `${width}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 + index * 0.05 }}
            style={{ left: `${left}%` }}
            title={`Sem. ${startWeek} → ${startWeek + durationWeeks}`}
          />
        </div>
        <span className="hidden w-20 shrink-0 text-right text-xs text-[var(--text-muted)] sm:block">
          S{startWeek}–{startWeek + durationWeeks}
        </span>
      </motion.div>
    </StaggerItem>
  );
}

export default function GanttSection() {
  return (
    <SectionReveal id="gantt" className="scroll-mt-20 py-20 px-4">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
            Planning
          </h2>
          <p className="mt-2 text-[var(--text-muted)]">
            Vue d&apos;ensemble des jalons (Gantt) — {GANTT_START} à {GANTT_END}.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--navy-card)]"
        >
          <div className="min-w-0 p-6">
            {/* Timeline horizontale (comme Sprints) */}
            <div className="mb-6">
              <div className="flex justify-between text-xs font-medium text-[var(--text-muted)]">
                {MONTHS.map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </div>
              <div className="relative mt-2 h-1.5 w-full rounded-full bg-[var(--navy-light)]" />
              <div className="mt-2 flex justify-between text-xs text-[var(--text-muted)]">
                <span>{GANTT_START}</span>
                <span>{GANTT_END}</span>
              </div>
            </div>

            <StaggerChildren className="space-y-5" staggerDelay={0.06}>
              {TASKS.map((task, i) => (
                <GanttBar
                  key={task.id}
                  label={task.name}
                  startWeek={task.startWeek}
                  durationWeeks={task.durationWeeks}
                  index={i}
                />
              ))}
              <GanttBar
                label={DOC_TASK.name}
                startWeek={DOC_TASK.startWeek}
                durationWeeks={DOC_TASK.durationWeeks}
                index={TASKS.length}
                variant="doc"
              />
            </StaggerChildren>
          </div>
        </motion.div>
      </div>
    </SectionReveal>
  );
}
