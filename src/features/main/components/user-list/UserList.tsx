import AutoSizer from "react-virtualized-auto-sizer";
import { CardUser } from "../card-user";
import { FixedSizeList } from "react-window";
import { useMemo } from "react";

interface User {
  id: { value: string } | null;
  name: { first: string; last: string };
  email: string;
  picture: { thumbnail: string };
  gender: string;
  phone: string;
  cell: string;
}

interface UserListProps {
  users: User[];
}

export const UserList = ({ users }: UserListProps) => {
  const itemHeight = useMemo(() => 324, []);
  const cardWidth = 220;

  return (
    <div
      className="w-[100vw] mt-6 overflow-hidden"
      style={{
        height: "calc(100vh - 220px)",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}
    >
      <AutoSizer>
        {({ height, width }) => {
          const safeHeight = height && height > 0 ? height : 400;
          const safeWidth = width && width > 0 ? width - 48 : 300;

          const columns = Math.max(1, Math.floor(safeWidth / cardWidth));
          const rowCount = Math.ceil(users.length / columns);

          return (
            <FixedSizeList
              height={safeHeight}
              width={safeWidth}
              itemSize={itemHeight}
              itemCount={rowCount}
              style={{
                overflowX: "hidden",
                overflowY: "scroll",
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {({ index, style }) => {
                const startIdx = index * columns;
                const usersInRow = users.slice(startIdx, startIdx + columns);

                return (
                  <div
                    style={{
                      ...style,
                      marginBottom: "16px",
                    }}
                    className="p-2 w-full"
                  >
                    <div
                      className="grid gap-6"
                      style={{
                        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
                      }}
                    >
                      {usersInRow.map((user) => (
                        <CardUser
                          key={user.id?.value || user.email}
                          user={user}
                        />
                      ))}
                    </div>
                  </div>
                );
              }}
            </FixedSizeList>
          );
        }}
      </AutoSizer>
    </div>
  );
};
