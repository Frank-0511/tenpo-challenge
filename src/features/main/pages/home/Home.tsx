import { UserList } from "../../components";
import { useUsers } from "../../../../core/hooks/useUser";
const HomePage = () => {
  const { listUsers } = useUsers();

  return (
    <section className="flex flex-col w-full gap-6">
      <div className="px-6 flex w-full justify-between">
        <article className="prose">
          <h1 className="text-2xl md:text-4xl">Lista de usuarios</h1>
        </article>
      </div>
      <UserList users={listUsers} />
    </section>
  );
};

export default HomePage;
