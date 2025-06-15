

import Link from 'next/link';
import Image from 'next/image';
import { PostCard } from '@/components/blog/post-card';
import { blogPosts, categories } from '@/data/mockData';
import type { Category } from '@/types/blog';

export default function Home() {

  
  // 최신 포스트 3개 추출
  const recentPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  // 주요 카테고리
  const featuredCategories = categories.filter((cat: Category) => cat.featured);
  

  
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero 섹션 */}
      <section className="relative flex flex-col items-center justify-center py-24 bg-gradient-to-b from-pink-100 via-purple-100 to-blue-50">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10"></div>
        <div className="container px-4 space-y-8 text-center relative">
          <span className="inline-flex items-center rounded-full bg-white/80 backdrop-blur-sm px-4 py-2 text-base font-medium text-primary shadow-lg">
            🌈 오늘도 즐거운 코딩 시간! ⭐️
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
              코딩유치원에 오신 것을<br />환영합니다!
            </span>
          </h1>
          <p className="max-w-[700px] mx-auto text-xl text-gray-600">
            여기는 코딩을 처음 시작하는 친구들을 위한 특별한 공간이에요. ✨<br/>
            블록 쌓기처럼 재미있게 코딩을 배워볼까요? 🎨
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <Link 
              href="/blog"
              className="inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-primary to-purple-500 px-8 text-lg font-medium text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl hover:-translate-y-1"
            >
              코딩교실 입장하기 🎮
            </Link>
            <Link 
              href="/docs"
              className="inline-flex h-14 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm px-8 text-lg font-medium text-primary shadow-lg transition-all hover:scale-105 hover:shadow-xl hover:-translate-y-1"
            >
              도움말 보기 📚
            </Link>
          </div>
        </div>
      </section>

      {/* 최근 포스트 섹션 */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              오늘의 수업 📝
            </h2>
            <Link 
              href="/blog"
              className="inline-flex items-center text-primary hover:translate-x-1 transition-transform"
            >
              모든 수업 보기 →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* 카테고리 섹션 */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-purple-50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent inline-flex items-center gap-2">
              <span className="animate-bounce">✨</span>
              놀면서 배우는 코딩
              <span className="animate-bounce delay-100">🎯</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              우리 친구들이 좋아하는 재미있는 코딩 수업을 준비했어요! 🌈
            </p>
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
    </main>
  );
}
