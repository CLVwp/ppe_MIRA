"use client";

import { motion } from "motion/react";
import { RippleButton } from "@/components/animate-ui/RippleButton";
import { AnimatedCode } from "@/components/animate-ui/AnimatedCode";

const CODE_SNIPPET = `const MIRA = {
  stack: ["Next.js", "Motion", "JEECE"],
  team: 5,
  sprints: 5,
};`;

export function HeroSection() {
  return (
    <section
      id="presentation"
      className="relative scroll-mt-20 px-4 pt-20 pb-28 md:pt-28 md:pb-36"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-3 text-sm font-medium uppercase tracking-widest text-[var(--jeece-green)]"
          >
            Projet MIRA
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-6 text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            Bienvenue
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-lg leading-relaxed text-[var(--text-muted)] md:text-xl"
          >
            Présentation du projet, de l&apos;équipe, du planning et des
            sprints.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mb-10"
        >
          <AnimatedCode
            code={CODE_SNIPPET}
            duration={2500}
            delay={400}
            className="mx-auto max-w-md"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3"
        >
          <RippleButton href="#equipe" variant="primary">
            Voir l&apos;équipe
          </RippleButton>
          <RippleButton href="#sprints" variant="outline">
            Sprints
          </RippleButton>
          <RippleButton href="#materiel" variant="outline">
            Matériel
          </RippleButton>
          <RippleButton href="#gantt" variant="outline">
            Planning
          </RippleButton>
        </motion.div>
      </div>
    </section>
  );
}
