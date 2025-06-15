'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import rehypeHighlight from 'rehype-highlight';
import { cn } from '@/lib/utils';
import 'highlight.js/styles/github-dark.css';

interface MarkdownContentProps {
  content?: string;
  slug?: string;
  className?: string;
}

export function MarkdownContent({ content: initialContent, slug, className }: MarkdownContentProps) {
  const [content, setContent] = useState(initialContent || '');

  useEffect(() => {
    if (slug && !initialContent) {
      async function loadContent() {
        try {
          const response = await fetch(`/api/markdown/${slug}.md`);
          const text = await response.text();
          setContent(text);
        } catch (error) {
          console.error('마크다운 컨텐츠를 불러오는데 실패했습니다:', error);
          setContent('## 컨텐츠를 불러오는데 실패했습니다.');
        }
      }
      loadContent();
    }
  }, [slug, initialContent]);

  return (
    <div
      className={cn(
        'prose dark:prose-invert max-w-none',
        // 기본 스타일 오버라이드
        'prose-headings:scroll-mt-20',
        'prose-h1:text-3xl prose-h1:font-bold',
        'prose-h2:text-2xl prose-h2:font-semibold',
        'prose-h3:text-xl prose-h3:font-semibold',
        'prose-p:text-base prose-p:leading-7',
        'prose-li:text-base prose-li:leading-7',
        'prose-code:text-sm',
        // 링크 스타일
        'prose-a:text-primary hover:prose-a:text-primary/80',
        // 인라인 코드 스타일
        'prose-code:rounded-md prose-code:bg-muted prose-code:px-1 prose-code:py-0.5',
        // 코드 블록 스타일
        'prose-pre:rounded-lg prose-pre:bg-neutral-950',
        'prose-pre:grid prose-pre:p-4',
        className
      )}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSanitize, rehypeHighlight]}
        components={{
          img: ({ src, alt }) => {
            // 외부 이미지인 경우
            if (typeof src === 'string' && (src.startsWith('http') || src.startsWith('//'))) {
              return (
                <span className="block relative w-full h-auto min-h-[200px] my-6">
                  <Image
                    src={src}
                    alt={alt || ''}
                    width={800}
                    height={400}
                    className="rounded-lg"
                    style={{ objectFit: 'cover' }}
                    unoptimized // 외부 이미지는 최적화하지 않음
                  />
                </span>
              );
            }

            // 내부 이미지인 경우
            const imagePath = src?.toString() || '';
            return (
              <span className="block relative w-full h-auto min-h-[200px] my-6">
                <Image
                  src={imagePath}
                  alt={alt || ''}
                  width={800}
                  height={400}
                  className="rounded-lg"
                  style={{ objectFit: 'cover' }}
                />
              </span>
            );
          },
          pre: ({ children }) => (
            <pre className="overflow-x-auto p-4 rounded-lg bg-neutral-950">
              {children}
            </pre>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}