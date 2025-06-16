'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { blogPosts } from '@/data/mockData';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { CalendarIcon } from 'lucide-react';
import type { BlogPost } from '@/types/blog';

// 인기 수업 (조회수가 가장 높은 수업들)
const popularPosts = [
	{
		title: '스크래치로 만드는 첫 번째 게임',
		views: 2341,
		duration: '30분',
		level: '초급',
		thumbnail: '/images/categories/blocks.png',
		description: '블록을 조립하며 배우는 게임 만들기의 기초',
		link: '/blog/scratch-first-game',
	},
	{
		title: '파이썬 거북이와 그림 그리기',
		views: 1982,
		duration: '25분',
		level: '초급',
		thumbnail: '/images/categories/default.png',
		description: '파이썬의 터틀 그래픽으로 다양한 모양과 패턴 그리기',
		link: '/blog/python-turtle-drawing',
	},
	{
		title: 'HTML로 캐릭터 카드 만들기',
		views: 1756,
		duration: '20분',
		level: '초급',
		thumbnail: '/images/categories/web-design.png',
		description: 'HTML과 CSS로 만드는 예쁜 캐릭터 소개 카드',
		link: '/blog/html-character-card',
	},
] as const;

export default function BlogPage() {
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

	const filteredPosts = selectedCategory
		? blogPosts.filter((post) => post.category.id === selectedCategory)
		: blogPosts;

	return (
		<div className="min-h-screen">
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
						어떤 재미있는 코딩을 배워볼까요? 🤔
						<br />
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
								<Card className="group h-full overflow-hidden bg-white shadow-sm hover:shadow-md transition-all">
									<div className="aspect-[4/3] relative overflow-hidden">
										<Image
											src={post.coverImage}
											alt={post.title}
											fill
											className="object-cover"
										/>
									</div>
									<div className="p-5">
										<h3 className="text-xl font-semibold mb-3">
											{post.title}
										</h3>
										<p className="text-muted-foreground text-sm mb-4">
											{post.excerpt}
										</p>
										<div className="text-sm text-slate-600">
											<time>{format(new Date(post.date), 'yyyy년 M월 d일', { locale: ko })}</time>
										</div>
									</div>
								</Card>
							</Link>
						))}
					</div>
				</div>
			</section>

			{/* 인기 수업 섹션 */}
			<section className="py-16 bg-gradient-to-b from-white to-blue-50/50">
				<div className="container max-w-6xl mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-2xl font-bold mb-4">
							<span className="bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent">
								우리 친구들이 가장 많이 본 수업 🌟
							</span>
						</h2>
						<p className="text-gray-600">
							다른 친구들은 어떤 수업을 좋아할까요? 같이 배워볼까요? 🤗
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{popularPosts.map((post, i) => (
							<div key={i} className="cursor-default">
								<Card className="h-full overflow-hidden bg-white shadow-sm transition-all">
									<div className="aspect-[4/3] relative overflow-hidden">
										<Image
											src={post.thumbnail}
											alt={post.title}
											fill
											className="object-cover"
										/>
										<div className="absolute inset-0 bg-black/10" />
										<div className="absolute top-3 right-3">
											<Badge variant="secondary" className="bg-white/90 backdrop-blur-sm">
												{post.level}
											</Badge>
										</div>
									</div>
									<div className="p-5">
										<h3 className="text-xl font-semibold mb-3">{post.title}</h3>
										<p className="text-muted-foreground text-sm mb-4">{post.description}</p>
										<div className="flex items-center gap-4 text-sm text-slate-600">
											<div className="flex items-center gap-1">
												<CalendarIcon className="w-4 h-4" />
												<span>{post.duration}</span>
											</div>
											<div>👀 {post.views.toLocaleString()}회</div>
										</div>
									</div>
								</Card>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* 메인 블로그 섹션 */}
			<section className="py-16">
				<div className="container max-w-6xl mx-auto px-4">
					<div className="text-center mb-12">
						<h2 className="text-2xl font-bold mb-4">
							<span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
								심화 코딩 수업 💫
							</span>
						</h2>
						<p className="text-gray-600">
							코딩을 좀 더 깊이 있게 배우고 싶은 친구들을 위한 특별한 수업이에요! 💻
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
						{filteredPosts.map((post) => (
							<Link key={post.id} href={`/blog/${post.slug}`}>
								<Card className="group h-full overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
									<div className="aspect-[4/3] relative overflow-hidden">
										<Image
											src={post.coverImage}
											alt={post.title}
											fill
											className="object-cover transform transition-transform duration-300 group-hover:scale-105"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
										{post.featured && (
											<Badge 
												variant="secondary" 
												className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-primary shadow-lg"
											>
												✨ 추천
											</Badge>
										)}
									</div>
									<div className="p-5">
										<div className="flex items-center gap-2 mb-3">
											<Badge variant="outline" className="bg-primary/5">
												{post.category.name}
											</Badge>
											<time className="text-sm text-muted-foreground">
												{format(new Date(post.date), 'PPP', { locale: ko })}
											</time>
										</div>
										<h3 className="text-xl font-semibold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
											{post.title}
										</h3>
										<p className="text-muted-foreground text-sm mb-4 line-clamp-2">
											{post.excerpt}
										</p>
									</div>
								</Card>
							</Link>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
