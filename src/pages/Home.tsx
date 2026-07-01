import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { Eyebrow } from "../components/ui/Eyebrow";
import { LiveBadge } from "../components/ui/LiveBadge";
import { ProjectCard } from "../components/ui/ProjectCard";
import { StatBar } from "../components/ui/StatBar";
import { profile, projects } from "../data/portfolio";

const HeroShape = lazy(() =>
  import("../components/three/HeroShape").then((m) => ({
    default: m.HeroShape,
  })),
);

const facts = [
  { key: "role", value: "Software Engineer (intern-track)" },
  { key: "based", value: profile.location },
  { key: "focus", value: "distributed systems, real-time infra" },
  { key: "status", value: profile.availability },
];

const featuredProjects = projects.filter((p) => p.featured);

export function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative grid gap-12 pt-28 pb-20 sm:pt-36 sm:pb-28 md:grid-cols-[1.15fr_1fr] md:items-center md:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Eyebrow>whoami</Eyebrow>
          <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 font-mono text-lg text-accent">{profile.role}</p>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
            {profile.tagline}
          </p>

          <div className="mt-7">
            <LiveBadge>{profile.availability}</LiveBadge>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/projects"
              className="flex items-center gap-2 rounded-full bg-accent px-5 py-3 font-mono text-sm font-medium text-canvas transition-transform hover:scale-[1.03]"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={profile.resumeFile}
              download
              className="flex items-center gap-2 rounded-full border border-hairline px-5 py-3 font-mono text-sm text-ink transition-colors hover:border-accent/40 hover:text-accent"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email Om"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline text-muted transition-colors hover:border-accent/40 hover:text-accent"
            >
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto aspect-square w-full max-w-xs md:max-w-sm"
        >
          <div className="absolute inset-[-35%]">
            <Suspense fallback={null}>
              <HeroShape />
            </Suspense>
          </div>
          <img
            src="/profile.png"
            alt="Om Tilva"
            className="relative h-full w-full rounded-[2rem] border border-hairline object-cover shadow-2xl"
          />
        </motion.div>
      </section>

      <StatBar />

      {/* About */}
      <section className="grid gap-10 py-24 sm:py-28 md:grid-cols-2 md:gap-16">
        <div>
          <Eyebrow>about</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
            Building things that hold up under real users.
          </h2>
          <p className="mt-5 leading-relaxed text-muted">{profile.summary}</p>
        </div>
        <div className="flex flex-col justify-center gap-4 rounded-2xl border border-hairline bg-surface p-6 sm:p-8">
          {facts.map((fact) => (
            <div
              key={fact.key}
              className="flex items-baseline justify-between gap-4 font-mono text-sm"
            >
              <span className="text-faint">{fact.key}</span>
              <span className="text-right text-ink">{fact.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="py-24 sm:py-28">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow>selected-work</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Featured Projects
            </h2>
          </div>
          <Link
            to="/projects"
            className="flex items-center gap-1.5 font-mono text-sm text-accent hover:underline"
          >
            View all
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
