import { Avatar, Badge } from "@/shared/components";
import { Gender, User } from "@/core/types";

import { FaPhone } from "react-icons/fa";

interface CardUserProps {
  user: User;
}

export const CardUser = ({ user }: CardUserProps) => {
  const fullName = user?.name
    ? `${user.name.first || ""} ${user.name.last || ""}`.trim()
    : "Usuario";
  const userEmail = user?.email || "Sin correo";
  const userPhone = user?.phone || "Sin teléfono";
  const userGender = user?.gender || "";
  const avatarSrc = user?.picture?.thumbnail || "";

  return (
    <div className="card card-user shadow-xl hover:shadow-2xl hover:scale-[1.05] border-primary hover:border transition-all duration-300 ease-in-out">
      <Avatar src={avatarSrc} alt={fullName} />
      <div className="card-body items-center text-center max-w-full w-full">
        <div className="w-full text-center">
          <h2
            className="card-title text-xl whitespace-nowrap overflow-hidden text-ellipsis inline-block max-w-full"
            title={fullName}
          >
            {fullName}
          </h2>
        </div>
        <div className="w-full text-center">
          <p
            className="text-sm text-base-content whitespace-nowrap overflow-hidden text-ellipsis inline-block max-w-full"
            title={userEmail}
          >
            {userEmail}
          </p>
        </div>
        <div className="w-full text-center">
          <p className="text-sm w-full break-words flex items-center justify-center gap-2">
            <FaPhone className="fill-base-content" aria-hidden="true" />{" "}
            {userPhone}
          </p>
        </div>
        {userGender && (
          <Badge
            text={userGender === Gender.MALE ? "Hombre" : "Mujer"}
            color={
              userGender === Gender.MALE ? "badge-primary" : "badge-secondary"
            }
          />
        )}
      </div>
    </div>
  );
};
