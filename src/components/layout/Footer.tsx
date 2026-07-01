import { Mail } from "lucide-react";
import { Eyebrow } from "../ui/Eyebrow";
import { profile } from "../../data/portfolio";

const socials = [
  { label: "GitHub", short: "GH", href: profile.github },
  { label: "LinkedIn", short: "in", href: profile.linkedin },
  { label: "Instagram", short: "IG", href: profile.instagram },
];

export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-20">
        <Eyebrow>get-in-touch</Eyebrow>
        <h2 className="mt-3 font-display text-3xl font-semibold text-ink sm:text-4xl">
          Let's build something.
        </h2>
        <a
          href={`mailto:${profile.email}`}
          className="mt-4 inline-flex items-center gap-2 font-mono text-lg text-accent hover:underline"
        >
          <Mail className="h-4 w-4" />
          {profile.email}
        </a>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-hairline pt-8">
          <div className="flex items-center gap-3">
            {socials.map(({ label, short, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline font-mono text-xs text-muted transition-colors hover:border-accent/40 hover:text-accent"
              >
                {short}
              </a>
            ))}
          </div>
          <p className="font-mono text-xs text-faint">
            Om Tilva · {profile.location} · Built with React &amp; Three.js
          </p>
        </div>
      </div>
    </footer>
  );
}
