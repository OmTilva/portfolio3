import { motion } from "framer-motion";
import { PageHeader } from "../components/ui/PageHeader";
import { SectionHeader } from "../components/ui/SectionHeader";
import { Tag } from "../components/ui/Tag";
import { Timeline, TimelineItem } from "../components/ui/Timeline";
import { experience, skills } from "../data/portfolio";

export function Experience() {
  return (
    <div className="pb-28">
      <PageHeader
        eyebrow="experience"
        title="Where I've worked"
        description="Production engineering, technical leadership, and the roles in between."
      />

      <Timeline>
        {experience.map((entry, index) => (
          <TimelineItem
            key={entry.id}
            index={index}
            isLast={index === experience.length - 1}
            featured={entry.featured}
          >
            <div
              className={`rounded-2xl border p-6 sm:p-7 ${
                entry.featured
                  ? "border-accent/25 bg-surface shadow-[0_0_0_1px_var(--accent-dim)]"
                  : "border-hairline bg-surface"
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">
                    {entry.role}
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    {entry.org}
                    {entry.orgNote && <span className="text-faint"> · {entry.orgNote}</span>}
                  </p>
                </div>
                <span className="whitespace-nowrap rounded-full border border-hairline px-3 py-1 font-mono text-xs text-muted">
                  {entry.duration}
                </span>
              </div>

              <ul className="mt-5 flex flex-col gap-2.5">
                {entry.points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </TimelineItem>
        ))}
      </Timeline>

      <div className="mt-28">
        <SectionHeader eyebrow="toolbox" title="Technical Skills" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (index % 3) * 0.06, ease: "easeOut" }}
            >
              <h3 className="font-mono text-xs uppercase tracking-wider text-faint">
                {group.category}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
