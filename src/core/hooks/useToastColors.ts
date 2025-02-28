import { TOAST_COLORS } from "@/core/constants/toastColors";
import { Theme } from "../types";
import { useCallback } from "react";
import { useThemeStore } from "@/core/store";

export const useToastColors = () => {
  const { theme } = useThemeStore();

  const getToastForType = useCallback(
    (type: keyof (typeof TOAST_COLORS)[Theme.EMERALD]) => {
      return (
        TOAST_COLORS[theme as keyof typeof TOAST_COLORS]?.[type] ||
        TOAST_COLORS[Theme.EMERALD][type]
      );
    },
    [theme]
  );

  return { getToastForType };
};
