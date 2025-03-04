import { Skeleton } from "@/shared/components";

interface UserListSkeletonProps {
  count?: number;
}

export const UserListSkeleton = ({ count = 5 }: UserListSkeletonProps) => {
  // Usar las mismas dimensiones que en UserList
  const itemHeight = 308;
  const cardWidth = 220;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-6">
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className="card shadow-xl border-primary"
            style={{ width: `${cardWidth}px`, height: `${itemHeight}px` }}
          >
            {/* Avatar skeleton */}
            <div className="flex justify-center pt-6">
              <Skeleton width="80px" height="80px" className="rounded-full" />
            </div>

            <div className="card-body items-center text-center">
              {/* Nombre skeleton */}
              <Skeleton width="80%" height="1.25rem" className="mt-2" />

              {/* Email skeleton */}
              <Skeleton width="90%" height="0.875rem" className="mt-2" />

              {/* Teléfono skeleton */}
              <div className="w-full flex items-center justify-center gap-2 mt-2">
                <Skeleton width="14px" height="14px" className="rounded-full" />
                <Skeleton width="70%" height="0.875rem" />
              </div>

              {/* Badge skeleton */}
              <div className="mt-4">
                <Skeleton
                  width="60px"
                  height="1.5rem"
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
