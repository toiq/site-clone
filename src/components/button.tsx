import React from "react";
import { cn } from "@/utils/cn";

type ButtonProps = {
  className?: string;
  variant?: "default" | "ghost";
  size?: "small" | "medium" | "large";
  asChild?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const buttonVariants = {
  default: "bg-blue-600 text-white hover:bg-blue-700",
  ghost: "bg-transparent text-blue-600 hover:bg-blue-100",
};

const buttonSizes = {
  small: "px-2 py-1 text-sm",
  medium: "px-4 py-2 text-base",
  large: "py-[22px] w-[240px]",
};

export const Button: React.FC<ButtonProps> = ({
  className,
  variant = "default",
  size = "medium",
  asChild = false,
  children,
  ...props
}) => {
  const Component = asChild ? ("span" as React.ElementType) : "button";

  return (
    <Component
      className={cn(
        "rounded-[800px] bg-[#005ed4] text-center font-bold hover:cursor-pointer",
        buttonVariants[variant],
        buttonSizes[size],
        className,
      )}
      {...props}
    >
      <div>{children}</div>
    </Component>
  );
};
