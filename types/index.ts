export interface Author {
  id: string;
  name: string;
  avatar_url?: string;
}

export interface Comment {
  id: string;
  content: string;
  created_at: string;
  author: Author;
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  description: string;
  content: string;
  created_at: string;
  updated_at: string;
  author: Author;
  category: string;
  tags: string[];
  highlights?: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  slug: string;
  image: string;
}
