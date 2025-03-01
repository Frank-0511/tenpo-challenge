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
      <figure className="px-4 pt-4">
        <div className="avatar">
          <div className="w-20 h-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img
              src={user.picture?.thumbnail || ""}
              alt={`${user.name?.first} ${user.name?.last}`}
              className="rounded-full"
            />
          </div>
        </div>
      </figure>
      <div className="card-body items-center text-center max-w-full w-full">
        {/* Contenedor para el nombre */}
        <div className="w-full text-center">
          <h2
            className="card-title text-xl whitespace-nowrap overflow-hidden text-ellipsis inline-block max-w-full"
            title={`${user.name?.first} ${user.name?.last}`} // Muestra el nombre completo al hacer hover
          >
            {user.name?.first} {user.name?.last}
          </h2>
        </div>
        {/* Contenedor para el correo */}
        <div className="w-full text-center">
          <p
            className="text-sm text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis inline-block max-w-full"
            title={user.email} // Muestra el correo completo al hacer hover
          >
            {user.email}
          </p>
        </div>
        <p className="text-sm w-full break-words">{user.phone}</p>
        <div className="card-actions mt-2">
          <span
            className={`badge ${
              user.gender === "male" ? "badge-primary" : "badge-secondary"
            }`}
          >
            {user.gender === "male" ? "Hombre" : "Mujer"}
          </span>
        </div>
      </div>
    </div>
  );
};
