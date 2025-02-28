import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const FallbackPage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-base-100">
      <div className="flex flex-col items-center gap-4">
        <AiOutlineLoading3Quarters className="h-12 w-12 animate-spin fill-current text-base-content" />
        <p className="text-lg text-base-content">Cargando contenido...</p>
      </div>
    </div>
  );
};
