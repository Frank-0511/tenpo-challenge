export enum Theme {
  EMERALD = "emerald",
  DARK = "dark",
}

export type ThemeState = {
  theme: Theme;
  toggleTheme: () => void;
};
