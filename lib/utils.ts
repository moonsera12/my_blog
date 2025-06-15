import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
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
