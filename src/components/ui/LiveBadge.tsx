type LiveBadgeProps = {
  children: React.ReactNode;
};

export function LiveBadge({ children }: LiveBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-3 py-1.5 font-mono text-xs text-muted">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-live" />
      </span>
      {children}
    </div>
  );
}
