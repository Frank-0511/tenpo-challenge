import { Navigate, Outlet } from "react-router-dom";

import { ROUTES } from "./routes";
import { useAuthStore } from "../store";

export const PublicRoute = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  console.log("🚀 ~ PublicRoute ~ isAuthenticated:", isAuthenticated);

  return isAuthenticated ? <Navigate to={ROUTES.HOME} replace /> : <Outlet />;
};
