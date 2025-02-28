import { LoginResponse } from "./login";

export type AuthState = {
  isAuthenticated: boolean;
  user: LoginResponse["user"] | null;
  token: string | null;
  login: (userData: LoginResponse) => void;
  logout: () => void;
};
