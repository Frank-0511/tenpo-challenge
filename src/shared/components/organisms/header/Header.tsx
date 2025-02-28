import { FaSignOutAlt } from "react-icons/fa";
import { ThemeToggle } from "../../atoms";
import { useAuthStore } from "@/core/store/authStore";

export const Header = ({ isScrolled }: { isScrolled: boolean }) => {
  const { isAuthenticated, logout } = useAuthStore();

  return (
    <header
      className={`p-4 flex justify-end items-center transition-colors ${
        isScrolled ? "bg-base-200 shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center gap-4">
        <ThemeToggle />
        {isAuthenticated && (
          <button onClick={logout} className="btn btn-ghost">
            <FaSignOutAlt size={20} />
          </button>
        )}
      </div>
    </header>
  );
};
