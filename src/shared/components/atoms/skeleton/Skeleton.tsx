import { CSSProperties } from "react";

interface SkeletonProps {
  height?: string | number;
  width?: string | number;
  className?: string;
}

export const Skeleton = ({
  height = "1rem",
  width = "100%",
  className = "",
}: SkeletonProps) => {
  const styles: CSSProperties = {
    height,
    width,
  };

  return <div className={`skeleton ${className}`} style={styles} />;
};
