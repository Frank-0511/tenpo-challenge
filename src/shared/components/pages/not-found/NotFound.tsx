import { motion } from "framer-motion";
import { useAuthStore } from "@/core/store/authStore";
import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuthStore();

  const handleRedirect = () => {
    navigate(isAuthenticated ? "/" : "/login");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-base-200 p-6">
      <motion.div
        className="prose text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
          className="text-9xl font-bold text-error mb-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          404
        </motion.h1>
        <p className="text-xl text-base-content">
          Lo sentimos, la página que buscas no existe.
        </p>
      </motion.div>
      <motion.button
        className="btn btn-primary mt-8"
        onClick={handleRedirect}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isAuthenticated ? "Ir al inicio" : "Ir al Login"}
      </motion.button>
    </div>
  );
};
