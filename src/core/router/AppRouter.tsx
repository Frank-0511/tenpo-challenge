import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FallbackPage, MainLayout, NotFoundPage } from "@/shared/components";
import { Suspense, lazy } from "react";

import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { ROUTES } from "./routes";

const LoginPage = lazy(() => import("@/features/auth/pages/login"));
const HomePage = lazy(() => import("@/features/main/pages/home"));

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<FallbackPage />}>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route element={<MainLayout />}>
              <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            </Route>
          </Route>

          <Route element={<PrivateRoute />}>
            <Route element={<MainLayout />}>
              <Route path={ROUTES.HOME} element={<HomePage />} />
            </Route>
          </Route>

          <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
