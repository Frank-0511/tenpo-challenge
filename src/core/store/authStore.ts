import { createJSONStorage, persist } from "zustand/middleware";

import { AuthState } from "../types";
import { create } from "zustand";

export const useAuthStore = create(
  persist<AuthState>(
    (set) => ({
      isAuthenticated: false,
      user: null,
      token: null,
      login: (userData) =>
        set({
          isAuthenticated: true,
          user: userData.user,
          token: userData.token,
        }),
      logout: () => set({ isAuthenticated: false, user: null, token: null }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
