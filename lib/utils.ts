import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function paginate<T>(items: T[], pageSize: number, pageNumber: number) {
  const startIndex = (pageNumber - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const totalPages = Math.ceil(items.length / pageSize);

  return {
    items: items.slice(startIndex, endIndex),
    currentPage: pageNumber,
    totalPages,
    hasNextPage: endIndex < items.length,
    hasPrevPage: startIndex > 0,
  };
}
