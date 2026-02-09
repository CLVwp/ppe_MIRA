"use client";

import Image from "next/image";
import { User } from "lucide-react";
import { motion } from "motion/react";
import { SectionReveal, StaggerChildren, StaggerItem } from "@/components/animate-ui/SectionReveal";

const MEMBERS = [
  { name: "Clément Viellard", role: "Chef de projet", majeure: "Informatique", photo: "/team/1.png" },
  { name: "Shaïma", role: "IA System", majeure: "Intelligence artificielle", photo: "/team/2.png" },
  { name: "Alexandre", role: "IA System", majeure: "Intelligence artificielle", photo: "/team/3.png" },
  { name: "Enguerrand", role: "Embedded System", majeure: "Systèmes embarqués", photo: "/team/4.png" },
  { name: "Clément", role: "Embedded System", majeure: "Systèmes embarqués", photo: "/team/5.png" },
] as const;

export default function TeamSection() {
  return (
    <SectionReveal id="equipe" className="scroll-mt-20 py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
            L&apos;équipe
          </h2>
          <p className="mt-2 text-[var(--text-muted)]">
            Les 5 membres du projet MIRA.
          </p>
        </motion.div>
        <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {MEMBERS.map((member) => (
            <StaggerItem key={member.name}>
              <motion.li
                className="group flex flex-col rounded-2xl border border-[var(--border)] bg-[var(--navy-card)] p-6 transition hover:border-[var(--jeece-green)]/30 hover:bg-[var(--surface)]"
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              >
                <div className="relative mx-auto mb-5 flex h-28 w-28 items-center justify-center overflow-hidden rounded-2xl bg-slate-600/80 ring-2 ring-[var(--jeece-green)]/20 transition group-hover:ring-[var(--jeece-green)]/50">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    width={112}
                    height={112}
                    className="object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  <span
                    className="absolute inset-0 hidden items-center justify-center bg-slate-600/80"
                    aria-hidden
                  >
                    <User className="h-12 w-12 text-[var(--jeece-green)]" strokeWidth={1.5} />
                  </span>
                </div>
                <h3 className="text-center font-semibold text-white">
                  {member.name}
                </h3>
                <p className="mt-1 text-center text-sm font-medium text-[var(--jeece-green)]">
                  {member.role}
                </p>
                <p className="mt-2 text-center text-xs text-[var(--text-muted)]">
                  {member.majeure}
                </p>
              </motion.li>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </SectionReveal>
  );
}
