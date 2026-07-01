import { PageHeader } from "../components/ui/PageHeader";
import { ProjectCard } from "../components/ui/ProjectCard";
import { projects } from "../data/portfolio";

export function Projects() {
  return (
    <div className="pb-28">
      <PageHeader
        eyebrow="projects"
        title="Things I've built"
        description="Production systems and platforms shipped end-to-end — architecture, backend, and interface."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
