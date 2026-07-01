type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

export function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <div
      className={`flex items-center gap-2 font-mono text-xs tracking-wide text-accent ${className}`}
    >
      <span className="text-faint select-none">//</span>
      <span>{children}</span>
    </div>
  );
}
