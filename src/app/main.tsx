import "@/core/styles/index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import App from "./App.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useThemeStore } from "@/core/store/themeStore";

const queryClient = new QueryClient();

const { theme } = useThemeStore.getState();
document.documentElement.setAttribute("data-theme", theme);

async function enableMocking() {
  if (process.env.NODE_ENV !== "development") {
    return;
  }
  const { worker } = await import("@/mocks");
  return worker.start();
}

enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </StrictMode>
  );
});
