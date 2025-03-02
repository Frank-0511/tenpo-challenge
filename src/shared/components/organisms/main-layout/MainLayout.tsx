import { Header } from "../header";
import { Outlet } from "react-router-dom";
import { useRef } from "react";
import { useScrollPosition } from "@/shared/hooks";

export const MainLayout = () => {
  const mainRef = useRef<HTMLElement>(null);
  const isScrolled = useScrollPosition(mainRef);

  return (
    <div className="min-h-screen flex flex-col max-w-7xl justify-center mx-auto">
      <Header isScrolled={isScrolled} />
      <main ref={mainRef} className="pt-6 flex-grow min-h-0 flex">
        <Outlet />
      </main>
    </div>
  );
};
