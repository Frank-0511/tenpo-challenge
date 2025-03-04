import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList } from "react-window";

interface VirtualizedListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  itemHeight: number;
  itemWidth: number;
  rowGap?: number;
  columnGap?: number;
  className?: string;
  styles?: React.CSSProperties;
}

export const VirtualizedList = <T,>({
  items,
  renderItem,
  itemHeight,
  itemWidth,
  rowGap = 16,
  columnGap = 16,
  className = "",
  styles = {},
}: VirtualizedListProps<T>) => {
  return (
    <div
      className={`w-full overflow-hidden ${className}`}
      style={{ ...styles }}
    >
      <AutoSizer>
        {({ height, width }) => {
          const safeHeight = height && height > 0 ? height : 400;
          const safeWidth = width && width > 0 ? width : 300;

          const columns = Math.max(1, Math.floor(safeWidth / itemWidth));
          const rowCount = Math.ceil(items.length / columns);

          return (
            <FixedSizeList
              height={safeHeight}
              width={safeWidth}
              itemSize={itemHeight + rowGap}
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
                const itemsInRow = items.slice(startIdx, startIdx + columns);

                return (
                  <div
                    style={{
                      ...style,
                      marginBottom: `${rowGap}px`,
                      padding: "24px",
                    }}
                    className="w-full"
                  >
                    <div
                      className="grid gap-6"
                      style={{
                        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
                        gap: `${columnGap}px`,
                      }}
                    >
                      {itemsInRow.map((item, idx) => (
                        <div key={idx}>{renderItem(item)}</div>
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
