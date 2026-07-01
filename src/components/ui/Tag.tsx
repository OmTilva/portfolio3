type TagProps = {
  children: React.ReactNode;
};

export function Tag({ children }: TagProps) {
  return (
    <span className="rounded-full border border-hairline bg-surface px-3 py-1 font-mono text-xs text-muted transition-colors hover:border-accent/40 hover:text-accent">
      {children}
    </span>
  );
}
