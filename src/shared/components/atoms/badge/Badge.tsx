interface BadgeProps {
  text: string;
  color?: string;
  className?: string;
}

export const Badge = ({
  text,
  color = "badge-primary",
  className = "",
}: BadgeProps) => {
  return (
    <div className="card-actions mt-2">
      <span className={`badge ${color} ${className}`}>{text}</span>
    </div>
  );
};
