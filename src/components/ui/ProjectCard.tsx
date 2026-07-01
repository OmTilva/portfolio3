import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../data/portfolio";
import { Card } from "./Card";
import { Tag } from "./Tag";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.08, ease: "easeOut" }}
    >
      <Card featured={project.featured} className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-xl font-semibold text-ink">{project.name}</h3>
            <p className="mt-1 text-sm text-muted">{project.tagline}</p>
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            aria-label={`View ${project.name} on GitHub`}
            className="shrink-0 rounded-full border border-hairline p-2 text-faint transition-colors hover:border-accent/40 hover:text-accent"
          >
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <ul className="mt-5 flex flex-1 flex-col gap-2.5">
          {project.points.map((point) => (
            <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}
