/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import themes from "daisyui/src/theming/themes";
import typography from "@tailwindcss/typography";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: [
      {
        emerald: {
          ...themes.emerald,
          "base-100": "#d1d5db",
        },
      },
      "dark",
    ],
    darkTheme: "dark",
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
};
