import React from "react";
import { cn } from "@/utils/cn";

type ButtonProps = {
  className?: string;
  variant?: "default" | "outline";
  size?: "small" | "medium" | "large";
  asChild?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const buttonVariants = {
  default: "bg-accent hover:bg-blue-700 text-white",
  outline:
    "bg-transparent border border-[#e8eef7] hover:border-accent text-accent",
};

const buttonSizes = {
  small: "px-[35px] py-[15px] text-sm",
  medium: "px-10 py-[19px]",
  large: "py-[21px] w-[240px]",
};

export const Button: React.FC<ButtonProps> = ({
  className,
  variant = "default",
  size = "medium",
  asChild = false,
  children,
  ...props
}) => {
  // Combine all class names
  const combinedClassName = cn(
    "rounded-[800px] border border-[#006ff9] bg-[#005ed4] text-center font-bold hover:cursor-pointer whitespace-nowrap",
    buttonVariants[variant],
    buttonSizes[size],
    className,
  );

  if (asChild && React.isValidElement(children)) {
    // Narrow the type of children to ensure it supports className
    const child = children as React.ReactElement<{ className?: string }>;

    // Clone the child element and pass the combined class names and props
    return React.cloneElement(child, {
      className: cn(child.props.className, combinedClassName),
      ...props,
    });
  }

  // Default behavior: render a button element
  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};
