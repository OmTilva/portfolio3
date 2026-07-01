import { PageHeader } from "../components/ui/PageHeader";
import { Timeline, TimelineItem } from "../components/ui/Timeline";
import { education } from "../data/portfolio";

export function Education() {
  return (
    <div className="pb-28">
      <PageHeader
        eyebrow="education"
        title="Academic journey"
        description="From secondary school to a CS degree in progress."
      />

      <Timeline>
        {education.map((entry, index) => (
          <TimelineItem
            key={entry.id}
            index={index}
            isLast={index === education.length - 1}
            featured={index === 0}
          >
            <div
              className={`rounded-2xl border p-6 sm:p-7 ${
                index === 0
                  ? "border-accent/25 bg-surface shadow-[0_0_0_1px_var(--accent-dim)]"
                  : "border-hairline bg-surface"
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">
                    {entry.degree}
                  </h3>
                  <p className="mt-1 text-sm text-muted">{entry.school}</p>
                </div>
                <span className="whitespace-nowrap rounded-full border border-hairline px-3 py-1 font-mono text-xs text-muted">
                  {entry.duration}
                </span>
              </div>

              {entry.detail && (
                <p className="mt-3 font-mono text-sm text-accent">{entry.detail}</p>
              )}

              {entry.points.length > 0 && (
                <ul className="mt-4 flex flex-col gap-2.5">
                  {entry.points.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
