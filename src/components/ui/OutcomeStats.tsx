"use client";

import { motion } from "framer-motion";

type OutcomeStat = { value: string; label: string };

export function OutcomeStats({
  stats,
  className = "",
}: {
  stats: readonly OutcomeStat[];
  className?: string;
}) {
  return (
    <motion.div
      className={`outcome-stats ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {stats.map((s) => (
        <div key={s.label} className="outcome-stat">
          <p className="outcome-stat-value">{s.value}</p>
          <p className="outcome-stat-label">{s.label}</p>
        </div>
      ))}
    </motion.div>
  );
}
