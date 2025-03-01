import { Avatar, Badge } from "@/shared/components";

interface User {
  id: { value: string } | null;
  name: { first: string; last: string };
  email: string;
  picture: { thumbnail: string };
  gender: string;
  phone: string;
  cell: string;
}

interface CardUserProps {
  user: User;
}

export const CardUser = ({ user }: CardUserProps) => {
  return (
    <div className="card card-custom !shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <Avatar
        src={user.picture?.thumbnail}
        alt={`${user.name?.first} ${user.name?.last}`}
      />
      <div className="card-body items-center text-center max-w-full w-full">
        <div className="w-full text-center">
          <h2
            className="card-title text-xl whitespace-nowrap overflow-hidden text-ellipsis inline-block max-w-full"
            title={`${user.name?.first} ${user.name?.last}`}
          >
            {user.name?.first} {user.name?.last}
          </h2>
        </div>
        <div className="w-full text-center">
          <p
            className="text-sm text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis inline-block max-w-full"
            title={user.email}
          >
            {user.email}
          </p>
        </div>
        <p className="text-sm w-full break-words">{user.phone}</p>
        <Badge
          text={user.gender === "male" ? "Hombre" : "Mujer"}
          color={user.gender === "male" ? "badge-primary" : "badge-secondary"}
        />
      </div>
    </div>
  );
};
