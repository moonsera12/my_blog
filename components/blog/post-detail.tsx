'use client';

import Image from 'next/image';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { MarkdownContent } from '@/components/blog/markdown-content';
import { RelatedPosts } from '@/components/blog/related-posts';
import { CommentSection } from '@/components/blog/comment-section';
import { LikeButton } from '@/components/blog/like-button';
import type { BlogPost } from '@/types/blog';
import { blogPosts } from '@/data/mockData';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface PostDetailProps {
  post: BlogPost;
}

export function PostDetail({ post }: PostDetailProps) {
  return (
    <article className="flex-1">
      {/* 커버 이미지 */}
      <div className="w-full h-[60vh] relative bg-neutral-950">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-background/20" />
        
        {/* 포스트 헤더 정보 */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container px-4 md:px-6 py-12">
            {/* 카테고리와 예상 학습 시간 */}
            <TooltipProvider>
              <div className="flex items-center gap-3 mb-6 text-primary-100">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="bg-primary-500/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium inline-flex items-center cursor-help">
                      <span className="mr-1">📚</span> {post.category.name}
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>이 포스트의 주제 분야예요</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span className="bg-primary-500/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium inline-flex items-center cursor-help">
                      <span className="mr-1">⏱️</span> {post.readingTime || '약 20분'} 학습
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>여유롭게 학습하실 수 있는 시간이에요</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
            
            {/* 태그 목록 */}
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <Badge 
                  key={tag.id} 
                  variant="outline" 
                  className="bg-background/30 backdrop-blur-sm border-primary-300/50 text-primary-100 hover:bg-primary-500/30 transition-colors"
                >
                  {tag.name}
                </Badge>
              ))}
            </div>

            {/* 제목과 간단한 설명 */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-lg md:text-xl text-primary-100/90 mb-6 max-w-3xl">
              {post.description}
            </p>

            {/* 작성자 정보와 날짜 */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={post.author.avatar_url} alt={post.author.name} />
                  <AvatarFallback>{post.author.name[0]}</AvatarFallback>
                </Avatar>
                <div className="text-white/90">
                  <div className="font-semibold">{post.author.name}</div>
                  <div className="text-sm text-white/70">
                    작성일: {format(new Date(post.createdAt), 'PPP', { locale: ko })}
                  </div>
                </div>
              </div>
              <div className="h-10 w-px bg-white/20" />
              <div className="text-white/70">
                <div className="text-sm">마지막 업데이트</div>
                <div className="text-sm font-medium">
                  {format(new Date(post.updatedAt), 'PPP', { locale: ko })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 포스트 본문 */}
      <div className="container px-4 md:px-6 py-12">
        <div className="prose prose-lg prose-neutral dark:prose-invert mx-auto">
          <MarkdownContent content={post.content} />
        </div>
        
        {/* 좋아요 버튼 */}
        <div className="flex justify-center my-8">
          <LikeButton postId={post.id} initialLikes={0} />
        </div>

        {/* 댓글 섹션 */}
        <div className="max-w-3xl mx-auto mt-16">
          <CommentSection postId={post.id} />
        </div>

        {/* 관련 포스트 */}
        <div className="mt-16">
          <RelatedPosts currentPostId={post.id} posts={blogPosts} />
        </div>
      </div>
    </article>
  );
}
