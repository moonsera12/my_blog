'use client';

import { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  value: string;
  onChange: (query: string) => void;
  placeholder?: string;
  className?: string;
}

export function SearchBar({ value, onChange, placeholder = '검색...', className }: SearchBarProps) {
  const searchRef = useRef<HTMLFormElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      ref={searchRef}
      onSubmit={handleSubmit}
      className={cn(
        "relative flex items-center w-full max-w-md",
        className
      )}
    >
      <div className="relative w-full">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder={placeholder}
          className="w-full h-10 pl-4 pr-12 rounded-lg border border-input bg-background text-sm ring-offset-background 
            placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
        <Button
          type="submit"
          size="icon"
          variant="ghost"
          className="absolute right-0 top-0 h-full px-3 text-muted-foreground hover:text-foreground"
        >
          <Search className="h-4 w-4" />
          <span className="sr-only">검색</span>
        </Button>
      </div>
    </form>
  );
}
