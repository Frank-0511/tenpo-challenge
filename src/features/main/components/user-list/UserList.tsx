import { CardUser } from "../card-user";
import { User } from "@/core/types";
import { VirtualizedList } from "@/shared/components";

interface UserListProps {
  users: User[];
}

export const UserList = ({ users }: UserListProps) => {
  const itemHeight = 308;
  const cardWidth = 220;

  return (
    <VirtualizedList
      items={users}
      renderItem={(user) => <CardUser user={user} />}
      itemHeight={itemHeight}
      itemWidth={cardWidth}
      rowGap={24}
      columnGap={24}
      className="flex-grow"
    />
  );
};
