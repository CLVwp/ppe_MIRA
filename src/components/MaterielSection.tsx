"use client";

import { useState } from "react";
import { Check, Package, Truck, Box, Clock, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import {
  TimelineSteps,
  TimelineStepsConnector,
  TimelineStepsContent,
  TimelineStepsDescription,
  TimelineStepsHeader,
  TimelineStepsIcon,
  TimelineStepsItem,
  TimelineStepsTime,
  TimelineStepsTitle,
} from "@/components/ui/timeline-steps";
import { SectionReveal } from "@/components/animate-ui/SectionReveal";
import { cn } from "@/lib/utils";

const DELIVERED_ITEMS = [
  { id: "rp5", name: "Raspberry Pi 5 16 GO" },
  { id: "ups", name: "UPS Battery Hat" },
  { id: "bat15550", name: "4 batteries 15550 lithium" },
  { id: "cam", name: "Raspberry AI Camera" },
  { id: "gps", name: "Module GPS" },
];

const PENDING_ITEMS = [
  { id: "m2hat", name: "M2 Compact Hat for SSD" },
  { id: "ssd", name: "SSD NVME Kingston 250 Go" },
  { id: "lidar", name: "Lidar" },
  { id: "imu", name: "IMU (magnéto, baro, accélo, gyro)" },
  { id: "lipo", name: "2 batteries Lipo" },
  { id: "reg", name: "2 régulateur de tension + buzzer de safety + 8 servo moteur renforcé en métal" },
];

function DeliveryTimeline({
  isDelivered,
  itemName,
}: {
  isDelivered: boolean;
  itemName: string;
}) {
  if (isDelivered) {
    return (
      <TimelineSteps>
        <TimelineStepsItem status="completed">
          <TimelineStepsConnector status="completed" />
          <TimelineStepsHeader>
            <TimelineStepsIcon variant="primary">
              <Check className="size-4" />
            </TimelineStepsIcon>
            <TimelineStepsTitle className="text-white">
              Commande validée
            </TimelineStepsTitle>
          </TimelineStepsHeader>
          <TimelineStepsContent>
            <TimelineStepsTime className="text-[var(--text-muted)]">
              Passé
            </TimelineStepsTime>
          </TimelineStepsContent>
        </TimelineStepsItem>
        <TimelineStepsItem status="completed">
          <TimelineStepsConnector status="completed" />
          <TimelineStepsHeader>
            <TimelineStepsIcon variant="primary">
              <Package className="size-4" />
            </TimelineStepsIcon>
            <TimelineStepsTitle className="text-white">
              Expédié
            </TimelineStepsTitle>
          </TimelineStepsHeader>
          <TimelineStepsContent>
            <TimelineStepsTime className="text-[var(--text-muted)]">
              Passé
            </TimelineStepsTime>
          </TimelineStepsContent>
        </TimelineStepsItem>
        <TimelineStepsItem status="completed">
          <TimelineStepsHeader>
            <TimelineStepsIcon variant="primary">
              <Box className="size-4" />
            </TimelineStepsIcon>
            <TimelineStepsTitle className="text-white">
              Livré
            </TimelineStepsTitle>
          </TimelineStepsHeader>
          <TimelineStepsContent>
            <TimelineStepsDescription className="text-[var(--text-muted)]">
              {itemName} — réceptionnée.
            </TimelineStepsDescription>
          </TimelineStepsContent>
        </TimelineStepsItem>
      </TimelineSteps>
    );
  }

  return (
    <TimelineSteps>
      <TimelineStepsItem status="current">
        <TimelineStepsConnector status="current" />
        <TimelineStepsHeader>
          <TimelineStepsIcon variant="outline">
            <Clock className="size-4" />
          </TimelineStepsIcon>
          <TimelineStepsTitle className="text-white">
            En attente de validation
          </TimelineStepsTitle>
        </TimelineStepsHeader>
        <TimelineStepsContent>
          <TimelineStepsDescription className="text-[var(--text-muted)]">
            {itemName} — en cours de validation commande / devis.
          </TimelineStepsDescription>
        </TimelineStepsContent>
      </TimelineStepsItem>
      <TimelineStepsItem status="upcoming">
        <TimelineStepsConnector status="upcoming" />
        <TimelineStepsHeader>
          <TimelineStepsIcon variant="outline">
            <Package className="size-4" />
          </TimelineStepsIcon>
          <TimelineStepsTitle className="text-white opacity-70">
            Préparation
          </TimelineStepsTitle>
        </TimelineStepsHeader>
      </TimelineStepsItem>
      <TimelineStepsItem status="upcoming">
        <TimelineStepsConnector status="upcoming" />
        <TimelineStepsHeader>
          <TimelineStepsIcon variant="outline">
            <Truck className="size-4" />
          </TimelineStepsIcon>
          <TimelineStepsTitle className="text-white opacity-70">
            Expédition
          </TimelineStepsTitle>
        </TimelineStepsHeader>
      </TimelineStepsItem>
      <TimelineStepsItem status="upcoming">
        <TimelineStepsHeader>
          <TimelineStepsIcon variant="outline">
            <Box className="size-4" />
          </TimelineStepsIcon>
          <TimelineStepsTitle className="text-white opacity-70">
            Livraison
          </TimelineStepsTitle>
        </TimelineStepsHeader>
      </TimelineStepsItem>
    </TimelineSteps>
  );
}

export default function MaterielSection() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedDelivered = DELIVERED_ITEMS.find((i) => i.id === selectedId);
  const selectedPending = PENDING_ITEMS.find((i) => i.id === selectedId);
  const selectedItem = selectedDelivered ?? selectedPending;

  return (
    <SectionReveal id="materiel" className="scroll-mt-20 py-20 px-4">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
            Matériel commandé
          </h2>
          <p className="mt-2 text-[var(--text-muted)]">
            Cliquez sur un article pour afficher la timeline de livraison.
          </p>
        </motion.div>

        {/* 2 colonnes : Livrée | En attente de validation */}
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[var(--jeece-green)]">
              <Check className="size-4" /> Livrée
            </h3>
            <ul className="space-y-2">
              {DELIVERED_ITEMS.map((item) => (
                <li key={item.id}>
                  <motion.button
                    type="button"
                    onClick={() => setSelectedId(selectedId === item.id ? null : item.id)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--jeece-green)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--navy-card)]",
                      selectedId === item.id
                        ? "border-[var(--jeece-green)] bg-[var(--jeece-green)]/10 text-white"
                        : "border-[var(--border)] bg-[var(--navy-card)] text-white hover:border-[var(--jeece-green)]/30 hover:bg-[var(--surface)]"
                    )}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <span className="font-medium">{item.name}</span>
                    <ChevronRight
                      className={cn(
                        "size-5 shrink-0 text-[var(--text-muted)] transition",
                        selectedId === item.id && "rotate-90 text-[var(--jeece-green)]"
                      )}
                    />
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-amber-400/90">
              <Clock className="size-4" /> En attente de validation
            </h3>
            <ul className="space-y-2">
              {PENDING_ITEMS.map((item) => (
                <li key={item.id}>
                  <motion.button
                    type="button"
                    onClick={() => setSelectedId(selectedId === item.id ? null : item.id)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-xl border px-4 py-3 text-left transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--jeece-green)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--navy-card)]",
                      selectedId === item.id
                        ? "border-[var(--jeece-green)] bg-[var(--jeece-green)]/10 text-white"
                        : "border-[var(--border)] bg-[var(--navy-card)] text-white hover:border-amber-400/30 hover:bg-[var(--surface)]"
                    )}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <span className="font-medium">{item.name}</span>
                    <ChevronRight
                      className={cn(
                        "size-5 shrink-0 text-[var(--text-muted)] transition",
                        selectedId === item.id && "rotate-90 text-[var(--jeece-green)]"
                      )}
                    />
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Panel timeline de livraison (pleine largeur en dessous) */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <AnimatePresence mode="wait">
            {selectedItem ? (
              <motion.div
                key={selectedItem.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl border border-[var(--border)] bg-[var(--navy-card)] p-6"
              >
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-lg font-bold text-white"
                >
                  {selectedItem.name}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.05 }}
                  className="mt-1 text-sm text-[var(--text-muted)]"
                >
                  Timeline de livraison
                </motion.p>
                <div className="mt-6">
                  <DeliveryTimeline
                    isDelivered={!!selectedDelivered}
                    itemName={selectedItem.name}
                  />
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-[var(--border)] bg-[var(--navy-card)]/50 py-12 text-center"
              >
                <Box className="mb-3 size-12 text-[var(--text-muted)]/50" />
                <p className="text-sm text-[var(--text-muted)]">
                  Cliquez sur un article pour afficher sa timeline de livraison.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </SectionReveal>
  );
}
