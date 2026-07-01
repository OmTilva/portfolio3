import { Moon, Sun } from "lucide-react";
import { useThemeContext } from "../../context/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-hairline text-muted transition-colors hover:border-accent/40 hover:text-accent"
    >
      {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
