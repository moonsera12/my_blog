'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { blogPosts } from '@/data/mockData';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import type { BlogPost } from '@/types/blog';

// 인기 수업 (조회수가 가장 높은 수업들)
const popularPosts = [
	{
		title: '블록 코딩으로 게임 만들기',
		views: 2341,
		duration: '30분',
		level: '초급',
		thumbnail: '/images/categories/game-dev.png',
		description: '스크래치로 나만의 캐릭터 움직이기',
		link: '/blog/scratch-game',
	},
	{
		title: '파이썬으로 그림 그리기',
		views: 1982,
		duration: '20분',
		level: '초급',
		thumbnail: '/images/categories/blocks.png',
		description: '거북이와 함께하는 파이썬 아트',
		link: '/blog/python-turtle',
	},
	{
		title: 'HTML로 캐릭터 카드 만들기',
		views: 1756,
		duration: '25분',
		level: '초급',
		thumbnail: '/images/categories/web-design.png',
		description: '나만의 멋진 캐릭터 소개 페이지',
		link: '/blog/html-character-card',
	},
] as const;

export default function BlogPage() {
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

	const filteredPosts = selectedCategory
		? blogPosts.filter((post) => post.category.id === selectedCategory)
		: blogPosts;

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
										<div className="flex items-center gap-2 mb-2">
											<Badge className="bg-primary/10 text-primary hover:bg-primary/20">
												{post.category.name}
											</Badge>
											<span className="text-sm text-muted-foreground">
												{format(new Date(post.date), 'PPP', { locale: ko })}
											</span>
										</div>
										<h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
											{post.title}
										</h2>
										<p className="text-muted-foreground line-clamp-2">
											{post.description}
										</p>
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

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{popularPosts.map((post) => (
							<Link
								key={post.title}
								href={post.link}
								className="group block"
							>
								<Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white/90 backdrop-blur-sm border-2 border-transparent hover:border-primary/20">
									<div className="aspect-video relative">
										<Image
											src={post.thumbnail}
											alt={post.title}
											fill
											className="object-cover transform group-hover:scale-105 transition-transform duration-300"
										/>
										<div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-primary">
											👀 {post.views.toLocaleString()}
										</div>
									</div>
									<div className="p-4">
										<div className="flex items-center gap-2 mb-3">
											<Badge variant="outline" className="bg-primary/5">
												⏰ {post.duration}
											</Badge>
											<Badge variant="outline" className="bg-primary/5">
												{post.level === '초급'
													? '🌱'
													: post.level === '중급'
													? '🚀'
													: '✨'}{' '}
												{post.level}
											</Badge>
										</div>
										<h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
											{post.title}
										</h3>
										<p className="text-sm text-muted-foreground">
											{post.description}
										</p>
									</div>
								</Card>
							</Link>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
