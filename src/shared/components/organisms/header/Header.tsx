import { FaSignOutAlt } from "react-icons/fa";
import { ThemeToggle } from "../../atoms";
import { useAuthStore } from "@/core/store/authStore";

export const Header = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const logout = useAuthStore((state) => state.logout);

  return (
    <header className="p-4 flex justify-between items-center">
      <img
        src="https://cdn.prod.website-files.com/647f4d1c528358bdb9d8ef3e/64e3a0a372c75160c61be423_tenpo.svg"
        alt="Logo"
        className="w-24 h-10"
      />
      <div className="flex items-center gap-4">
        <ThemeToggle />
        {isAuthenticated && (
          <button
            onClick={logout}
            className="btn btn-ghost"
            aria-label="Cerrar sesión"
          >
            <FaSignOutAlt size={20} />
          </button>
        )}
      </div>
    </header>
  );
};
