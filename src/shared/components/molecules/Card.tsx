import { ReactNode } from "react";

interface CardProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export const Card = ({ title, children, className = "" }: CardProps) => {
  return (
    <div className={`card card-custom w-full max-w-md ${className}`}>
      <div className="card-body">
        {title && (
          <h2 className="card-title text-2xl font-bold mb-4">{title}</h2>
        )}
        {children}
      </div>
    </div>
  );
};
