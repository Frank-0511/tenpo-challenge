import { FaMoon, FaSun } from "react-icons/fa";

import { Theme } from "@/core/types";
import { useThemeStore } from "@/core/store";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-ghost"
      aria-label={`Cambiar a tema ${
        theme === Theme.EMERALD ? "oscuro" : "claro"
      }`}
    >
      {theme === Theme.EMERALD ? <FaMoon size={20} /> : <FaSun size={20} />}
    </button>
  );
};
