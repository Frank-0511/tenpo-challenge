import { Header } from "../header";
import { Outlet } from "react-router-dom";
import { useRef } from "react";
import { useScrollPosition } from "@/shared/hooks";

export const MainLayout = () => {
  const mainRef = useRef<HTMLElement>(null);
  const isScrolled = useScrollPosition(mainRef);

  return (
    <div className="min-h-screen flex flex-col">
      <Header isScrolled={isScrolled} />
      <main ref={mainRef} className="py-6 h-[calc(100vh-80px)] overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};
