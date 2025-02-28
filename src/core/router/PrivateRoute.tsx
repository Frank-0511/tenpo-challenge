import { Navigate, Outlet } from "react-router-dom";

import { ROUTES } from "./routes";
import { useAuthStore } from "../store";

export const PrivateRoute = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return isAuthenticated ? <Outlet /> : <Navigate to={ROUTES.LOGIN} replace />;
};
