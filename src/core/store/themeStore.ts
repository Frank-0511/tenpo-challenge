import { Theme, ThemeState } from "../types";
import { createJSONStorage, persist } from "zustand/middleware";

import { create } from "zustand";

export const useThemeStore = create(
  persist<ThemeState>(
    (set) => ({
      theme: Theme.EMERALD,
      toggleTheme: () => {
        set((state) => {
          const newTheme =
            state.theme === Theme.EMERALD ? Theme.DARK : Theme.EMERALD;
          document.documentElement.setAttribute("data-theme", newTheme);
          return { theme: newTheme };
        });
      },
    }),
    {
      name: "theme-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
