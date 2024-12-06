import { FC } from "react";

interface LoaderProps {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "white";
  isLoading?: boolean;
}

const Loader: FC<LoaderProps> = ({
  size = "md",
  color = "primary",
  isLoading = true,
}) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  };

  const colorClasses = {
    primary: "border-primary-500 border-t-primary-900",
    white: "border-white/30 border-t-white",
  };

  return (
    <div
      className={`
        fixed inset-0 
        flex items-center justify-center
        bg-black/50
        transition-opacity duration-300
        ${isLoading ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      <div
        className={`
          ${sizeClasses[size]}
          ${colorClasses[color]}
          animate-spin
          rounded-full
          border-2
          border-solid
        `}
        role="status"
        aria-label="Loading"
      />
    </div>
  );
};

export default Loader;
