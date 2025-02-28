import { useEffect } from "react";
import { useUsers } from "../../../../core/hooks/useUser";
const HomePage = () => {
  const { usersQuery } = useUsers();

  useEffect(() => {
    usersQuery.refetch();
  }, [usersQuery]);

  return (
    <article className="prose">
      <h1>Bienvenido al Home</h1>
    </article>
  );
};

export default HomePage;
