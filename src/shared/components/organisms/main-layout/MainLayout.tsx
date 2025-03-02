import { Header } from "../header";
import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col max-w-7xl justify-center mx-auto">
      <Header />
      <main className="pt-6 flex-grow min-h-0 flex -webkit-flex-frow">
        <Outlet />
      </main>
    </div>
  );
};
