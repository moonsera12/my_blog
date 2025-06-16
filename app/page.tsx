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
      <section className="relative py-24 bg-gradient-to-b from-pink-100 via-purple-100 to-blue-50">
        <div className="container px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              코딩유치원에 오신 것을<br />환영합니다!
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            여기는 코딩을 처음 시작하는 친구들을 위한 특별한 공간이에요. ✨
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/blog" 
              className="inline-flex h-14 items-center justify-center rounded-full bg-gradient-to-r from-primary to-purple-500 px-8 text-lg font-medium text-white shadow-lg transition-all hover:scale-105"
            >
              수업 보러가기 🎮
            </Link>
          </div>
        </div>
      </section>

      {/* 최근 포스트 섹션 */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-primary">
              오늘의 수업 📝
            </h2>
            <Link 
              href="/blog" 
              className="text-primary hover:translate-x-1 transition-transform"
            >
              모든 수업 보기 →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* 놀면서 배우는 코딩 섹션 */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            ✨ 놀면서 배우는 코딩 ✨
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredCategories.map((category) => (
              <Link
                key={category.id}
                href={`/categories/${category.id}`}
                className="group block bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl group-hover:scale-110 transition-transform">
                    {category.id === '1' && "💻"}
                    {category.id === '2' && "🎮"}
                    {category.id === '3' && "🎨"}
                    {category.id === '4' && "🐍"}
                    {category.id === '5' && "🚀"}
                  </span>
                  <h3 className="text-xl font-bold text-primary">{category.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <span className="inline-flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform">
                  함께 배우러 가기
                  <span className="ml-2">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
