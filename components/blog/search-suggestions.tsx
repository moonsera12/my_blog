'use client';

import { Button } from '@/components/ui/button';
import type { BlogPost } from '@/data/mockData';

interface SearchSuggestionsProps {
  query: string;
  posts: BlogPost[];
  onSelect: (term: string) => void;
}

export function SearchSuggestions({ query, posts, onSelect }: SearchSuggestionsProps) {
  if (!query) return null;

  // 검색어에 매칭되는 태그들 수집
  const matchingTags = new Set<string>();
  posts.forEach(post => {
    post.tags.forEach(tag => {
      if (tag.name.toLowerCase().includes(query.toLowerCase())) {
        matchingTags.add(tag.name);
      }
    });
  });

  // 검색어와 관련된 제목 수집
  const matchingTitles = posts
    .filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
    .map(post => post.title)
    .slice(0, 3);

  if (matchingTags.size === 0 && matchingTitles.length === 0) return null;

  return (
    <div className="absolute top-full left-0 right-0 mt-2 p-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border animate-in fade-in slide-in-from-top-2">
      {matchingTags.size > 0 && (
        <div className="mb-2">
          <p className="text-xs text-muted-foreground mb-1 px-2">추천 태그 ✨</p>
          <div className="flex flex-wrap gap-1 px-1">
            {Array.from(matchingTags).map(tag => (
              <Button
                key={tag}
                variant="ghost"
                size="sm"
                className="h-7 rounded-full text-xs hover:bg-primary/10 hover:text-primary"
                onClick={() => onSelect(tag)}
              >
                #{tag}
              </Button>
            ))}
          </div>
        </div>
      )}
      {matchingTitles.length > 0 && (
        <div>
          <p className="text-xs text-muted-foreground mb-1 px-2">관련 수업 📚</p>
          <div className="space-y-1">
            {matchingTitles.map(title => (
              <Button
                key={title}
                variant="ghost"
                size="sm"
                className="w-full justify-start text-left font-normal hover:bg-primary/5"
                onClick={() => onSelect(title)}
              >
                {title}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
