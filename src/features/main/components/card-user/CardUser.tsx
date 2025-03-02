import { Avatar, Badge } from "@/shared/components";

import { FaPhone } from "react-icons/fa";
import { User } from "@/core/types";

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
    <div className="card card-custom !shadow-xl hover:shadow-2xl transition-shadow duration-300">
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
            <FaPhone className="text-base-content" aria-hidden="true" />{" "}
            {userPhone}
          </p>
        </div>
        {userGender && (
          <Badge
            text={userGender === "male" ? "Hombre" : "Mujer"}
            color={userGender === "male" ? "badge-neutral" : "badge-primary"}
          />
        )}
      </div>
    </div>
  );
};
