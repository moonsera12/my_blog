'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { blogPosts, categories } from '@/data/mockData';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { shuffleArray } from '@/lib/utils';
import type { BlogPost } from '@/types/blog';

const learningPaths = [
  {
    id: 'beginner',
    title: '코딩 첫걸음',
    description: '처음 시작하는 친구들을 위한 기초 코딩 수업이에요!',
    icon: '🌱',
    color: 'from-green-500 to-emerald-600',
    posts: ['chatgpt-langchain-guide', 'pytorch-deep-learning-basics']
  },
  {
    id: 'intermediate',
    title: '실력 쑥쑥',
    description: '기초를 배운 친구들을 위한 재미있는 프로젝트예요!',
    icon: '🚀',
    color: 'from-blue-500 to-indigo-600',
    posts: ['transformer-architecture', 'chatgpt-langchain-guide']
  },
  {
    id: 'advanced',
    title: '코딩 마법사',
    description: '나만의 멋진 프로그램을 만들어볼까요?',
    icon: '✨',
    color: 'from-purple-500 to-pink-600',
    posts: ['transformer-architecture-guide', 'pytorch-deep-learning-basics']
  }
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = selectedCategory
    ? blogPosts.filter(post => post.category.id === selectedCategory)
    : blogPosts;

  // 랜덤하게 또다른 수업 3개 선택
  const otherPosts = shuffleArray<BlogPost>([...blogPosts]).slice(0, 3);

  // 추천 카테고리 (featured가 true인 카테고리)
  const featuredCategories = categories.filter(cat => cat.featured);

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero 섹션 */}
      <section className="relative flex flex-col items-center justify-center py-16 bg-gradient-to-b from-pink-100 via-purple-100 to-blue-50">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
        <div className="container px-4 space-y-6 text-center relative">
          <span className="inline-flex items-center rounded-full bg-white/80 backdrop-blur-sm px-4 py-2 text-base font-medium text-primary shadow-lg">
            ✏️ 오늘의 코딩 수업 준비됐어요! 🎨
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              나만의 코딩 교실
            </span>
          </h1>
          <p className="max-w-[600px] mx-auto text-lg text-gray-600">
            어떤 재미있는 코딩을 배워볼까요? 🤔<br />
            내가 좋아하는 주제를 골라보세요! ⭐️
          </p>
        </div>
      </section>

      {/* 포스트 목록 섹션 */}
      <section className="py-16 bg-gradient-to-b from-white to-blue-50/50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="group h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/90 backdrop-blur-sm border-2 border-transparent hover:border-primary/20">
                  <div className="aspect-video relative">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge className="bg-primary/10 text-primary hover:bg-primary/20">{post.category.name}</Badge>
                      <span className="text-sm text-muted-foreground">
                        {format(new Date(post.date), 'PPP', { locale: ko })}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
                    <p className="text-muted-foreground line-clamp-2">{post.description}</p>
                    <div className="mt-4 flex items-center text-primary font-medium">
                      수업 들으러 가기
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 또다른 수업 섹션 */}
      <section className="py-16 bg-gradient-to-b from-blue-50/50 to-purple-100/30">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                또다른 재미있는 수업이에요! 🎯
              </span>
            </h2>
            <p className="text-gray-600">이런 수업은 어때요? 같이 배워볼까요? 🌟</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="group h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/90 backdrop-blur-sm border border-transparent hover:border-primary/20">
                  <div className="aspect-video relative">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <Badge className="mb-2 bg-primary/10 text-primary hover:bg-primary/20">
                      {post.category.name}
                    </Badge>
                    <h3 className="font-medium group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 추천 카테고리 섹션 */}
      <section className="py-16 bg-gradient-to-b from-blue-50/50 to-purple-100/30">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                이런 수업은 어때요? ✨
              </span>
            </h2>
            <p className="text-gray-600">우리 친구들이 좋아하는 재미있는 수업을 모아봤어요! 🌟</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCategories.map((category) => (
              <Link
                key={category.id}
                href={`/categories/${category.id}`}
                className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm shadow-lg transition-all hover:scale-105 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="relative aspect-[4/3] w-full">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-10" />
                  <Image
                    src={category.image || '/images/categories/default.png'}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    {category.id === '1' && <span className="animate-pulse">💻</span>}
                    {category.id === '2' && <span className="animate-bounce">🎮</span>}
                    {category.id === '3' && <span className="animate-spin">🚀</span>}
                    {category.id === '4' && <span className="animate-pulse">🧩</span>}
                    {category.id === '5' && <span className="animate-bounce">✨</span>}
                  </div>
                </div>
                <div className="relative z-10 p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-primary-100 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-white/90 mb-4 line-clamp-2">
                    {category.description}
                  </p>
                  <span className="inline-flex items-center text-white font-medium bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full group-hover:bg-primary/30 transition-all">
                    함께 놀러가기
                    <span className="ml-2 transform transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 학습 경로 섹션 */}
      <section className="py-16 bg-gradient-to-b from-blue-50/50 to-purple-100/30">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
                나의 코딩 모험 🗺️
              </span>
            </h2>
            <p className="text-gray-600">어디서부터 시작하면 좋을지 고민된다면? 이렇게 시작해보세요! 🎯</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {learningPaths.map((path) => (
              <div key={path.id} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity" />
                <div className="relative p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-primary/10 hover:border-primary/20 transition-all">
                  <div className="text-4xl mb-4">{path.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{path.title}</h3>
                  <p className="text-gray-600 mb-4">{path.description}</p>
                  
                  <div className="space-y-3">
                    {path.posts.map((slug) => {
                      const post = blogPosts.find(p => p.slug === slug);
                      if (!post) return null;
                      return (
                        <Link 
                          key={slug} 
                          href={`/blog/${slug}`}
                          className="block p-3 rounded-lg bg-white/50 hover:bg-white hover:shadow-md transition-all"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-12 h-12 rounded-lg overflow-hidden relative flex-shrink-0">
                              <Image
                                src={post.thumbnail}
                                alt=""
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
                                {post.title}
                              </h4>
                              <p className="text-xs text-gray-500 mt-1">
                                {post.category.name}
                              </p>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                    
                    <div className="pt-2">
                      <Link 
                        href={`/categories?path=${path.id}`}
                        className="inline-flex items-center text-sm text-primary hover:underline"
                      >
                        더 많은 수업 보기
                        <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
