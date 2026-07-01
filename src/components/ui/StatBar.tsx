import { motion } from "framer-motion";
import { stats } from "../../data/portfolio";

export function StatBar() {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 + index * 0.08, ease: "easeOut" }}
          className="bg-canvas px-5 py-5 sm:px-6"
        >
          <div className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            {stat.value}
            <span className="text-accent">{stat.suffix}</span>
          </div>
          <div className="mt-1 font-mono text-xs text-muted">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
