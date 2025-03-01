import { UserList } from "../../components";
import { useUsers } from "../../../../core/hooks/useUser";
const HomePage = () => {
  const { listUsers } = useUsers();
  console.log("🚀 ~ HomePage ~ listUsers:", listUsers);

  return (
    <section>
      <article className="prose px-6">
        <h1>Bienvenido al Home</h1>
      </article>
      <UserList users={listUsers} />
    </section>
  );
};

export default HomePage;
