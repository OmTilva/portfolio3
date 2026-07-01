import { motion } from "framer-motion";
import type { ReactNode } from "react";

type TimelineProps = {
  children: ReactNode;
};

export function Timeline({ children }: TimelineProps) {
  return <div className="relative flex flex-col gap-10">{children}</div>;
}

type TimelineItemProps = {
  index: number;
  isLast: boolean;
  featured?: boolean;
  children: ReactNode;
};

export function TimelineItem({ index, isLast, featured = false, children }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: "easeOut" }}
      className="relative flex gap-6"
    >
      <div className="flex flex-col items-center">
        <span
          className={
            featured
              ? "mt-1.5 h-3 w-3 shrink-0 rounded-full bg-accent shadow-[0_0_0_4px_var(--accent-dim)]"
              : "mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full border-2 border-accent bg-canvas"
          }
        />
        {!isLast && <span className="mt-2 w-px flex-1 bg-hairline" />}
      </div>
      <div className={isLast ? "flex-1" : "flex-1 pb-2"}>{children}</div>
    </motion.div>
  );
}
