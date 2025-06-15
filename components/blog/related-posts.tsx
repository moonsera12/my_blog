import Link from 'next/link';
import Image from 'next/image';
import type { BlogPost } from '@/types/blog';
import { Card, CardContent } from '@/components/ui/card';

interface RelatedPostsProps {
  currentPostId: string;
  posts: BlogPost[];
}

export function RelatedPosts({ currentPostId, posts }: RelatedPostsProps) {
  // 현재 포스트 찾기
  const postData = posts.find(post => post.id === currentPostId);
  if (!postData) return null;

  // 같은 카테고리의 포스트 중 현재 포스트를 제외하고 최대 3개 선택
  const relatedPosts = posts
    .filter((post) =>
      post.category.id === postData.category.id &&
      post.id !== currentPostId
    )
    .slice(0, 3);

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <div className="py-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold tracking-tight mb-6">관련 포스트</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`}>
              <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative aspect-video">
                  <Image
                    src={post.thumbnail}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 320px, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold line-clamp-2 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
