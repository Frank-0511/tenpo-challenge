import { CardUser } from "../card-user";
import { User } from "@/core/types";
import { VirtualizedList } from "@/shared/components";

interface UserListProps {
  users: User[];
}

export const UserList = ({ users }: UserListProps) => {
  const itemHeight = 324; // Altura de cada tarjeta
  const cardWidth = 220; // Ancho de cada tarjeta

  return (
    <VirtualizedList
      items={users}
      renderItem={(user) => <CardUser user={user} />}
      itemHeight={itemHeight}
      itemWidth={cardWidth}
      rowGap={16}
      columnGap={16}
      className="flex-grow"
      styles={{
        paddingLeft: "24px",
        paddingRight: "24px",
      }}
    />
  );
};
