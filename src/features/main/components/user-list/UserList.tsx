import { CARD_USER } from "@/core/constants";
import { CardUser } from "../card-user";
import { User } from "@/core/types";
import { VirtualizedList } from "@/shared/components";

interface UserListProps {
  users: User[];
}

export const UserList = ({ users }: UserListProps) => {
  return (
    <VirtualizedList
      items={users}
      renderItem={(user) => <CardUser user={user} />}
      itemHeight={CARD_USER.height}
      itemWidth={CARD_USER.width}
      rowGap={24}
      columnGap={24}
      className="flex-grow"
    />
  );
};
