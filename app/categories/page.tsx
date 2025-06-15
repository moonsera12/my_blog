import Image from 'next/image';
import Link from 'next/link';

const categories = [
  {
    title: '딥러닝',
    description: '딥러닝의 기초부터 고급 주제까지',
    image: '/images/categories/deep-learning.png',
    href: '/blog?category=딥러닝'
  },
  {
    title: '자연어처리',
    description: 'NLP와 트랜스포머 아키텍처',
    image: '/images/categories/nlp.png',
    href: '/blog?category=자연어처리'
  },
  {
    title: '인공지능',
    description: 'ChatGPT와 최신 AI 기술',
    image: '/images/categories/ai.png',
    href: '/blog?category=인공지능'
  },
  {
    title: '웹개발',
    description: '현대적인 웹 개발 기술',
    image: '/images/categories/web-dev.png',
    href: '/blog?category=웹개발'
  }
];

export default function CategoriesPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">장난감 상자 🧸</h1>
      <p className="text-lg text-muted-foreground mb-8">
        관심 있는 주제를 선택하고 재미있게 학습해보세요!
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.title}
            href={category.href}
            className="group relative rounded-lg border p-6 hover:border-foreground/20 hover:bg-muted/50 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 relative">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div>
                <h2 className="font-semibold text-xl group-hover:text-primary transition-colors">
                  {category.title}
                </h2>
                <p className="text-muted-foreground text-sm">
                  {category.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
