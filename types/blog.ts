import type { Author } from './index';

export interface Tag {
  id: string;
  name: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  featured?: boolean;
  image?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  description: string;
  content: string;
  thumbnail: string;
  coverImage: string;
  date: string;
  createdAt: string;
  updatedAt: string;
  category: Category;
  readingTime: string;
  author: Author;
  tags: Tag[];
  featured?: boolean;
  highlights?: string[];
}
