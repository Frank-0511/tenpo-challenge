import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout, NotFoundPage } from "@/shared/components";

import { HomePage } from "@/features/main";
import { LoginPage } from "@/features/auth";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { ROUTES } from "./routes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas */}
        <Route element={<PublicRoute />}>
          <Route element={<MainLayout />}>
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          </Route>
        </Route>

        {/* Rutas privadas */}
        <Route element={<PrivateRoute />}>
          <Route element={<MainLayout />}>
            <Route path={ROUTES.HOME} element={<HomePage />} />
          </Route>
        </Route>

        {/* Ruta Not Found */}
        <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
