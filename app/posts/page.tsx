'use client';

import React from 'react';
import { PostCard } from '@/components/blog/post-card';
import { SearchBar } from '@/components/blog/search-bar';
import type { BlogPost } from '@/types/blog';
import { blogPosts } from '@/data/mockData';

export default function PostsPage() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filteredPosts, setFilteredPosts] = React.useState<BlogPost[]>(blogPosts);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (!query) {
      setFilteredPosts(blogPosts);
      return;
    }

    const filtered = blogPosts.filter(post => 
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
      post.description.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">블로그 포스트</h1>
        <SearchBar 
          value={searchQuery}
          onChange={handleSearch}
          placeholder="포스트 검색하기..."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
        {filteredPosts.length === 0 && (
          <div className="col-span-full text-center py-12">
            <p className="text-xl text-muted-foreground">검색 결과가 없습니다.</p>
          </div>
        )}
      </div>
    </main>
  );
}