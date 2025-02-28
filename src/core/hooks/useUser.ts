import { fetchUsers } from "../api/users";
import { toast } from "sonner";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { useToastColors } from "./useToastColors";

export const useUsers = () => {
  const { getToastForType } = useToastColors();

  const usersQuery = useQuery({
    queryKey: ["users"],
    queryFn: () => fetchUsers(),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
    retry: false,
    enabled: false,
  });

  useEffect(() => {
    if (usersQuery.isError) {
      toast.error("Error al cargar los usuarios", {
        description: (usersQuery.error as Error).message,
        style: getToastForType("error"),
      });
    }
  }, [usersQuery.isError, usersQuery.error, getToastForType]);

  return { usersQuery };
};
