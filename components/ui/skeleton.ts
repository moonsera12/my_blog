// Direct implementation to avoid circular references
import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Copy of cn function from lib/utils to avoid circular imports
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

export const Skeleton: React.FC<SkeletonProps> = ({ className, ...props }) => {
  return React.createElement("div", {
    className: cn("animate-pulse rounded-md bg-muted", className),
    ...props
  });
};
