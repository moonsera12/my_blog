import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import type { BlogPost } from '@/types/blog';

interface PostCardProps {
  post: BlogPost;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
        <div className="relative aspect-[4/3]">
          <Image
            src={post.coverImage || '/images/posts/default.png'}
            alt={post.title}
            fill
            className="object-cover transform transition-transform duration-300 group-hover:scale-105"
            sizes="(min-width: 1024px) 320px, (min-width: 768px) 50vw, 100vw"
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
        <CardContent className="p-6">          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-primary/5">{post.category.name}</Badge>
              <time className="text-sm text-muted-foreground" dateTime={post.date}>
                {format(new Date(post.date), 'PPP', { locale: ko })}
              </time>
            </div>
            <h3 className="text-xl font-bold tracking-tight line-clamp-2 group-hover:text-primary transition-colors">
              {post.title}
            </h3>
            <p className="text-muted-foreground line-clamp-2">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between pt-2 border-t text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="relative w-6 h-6 rounded-full overflow-hidden bg-primary/5">
                  <Image
                    src={post.author.avatar_url || '/images/authors/default.jpg'}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <span>{post.author.name}</span>
              </div>
              <span>⏱️ {post.readingTime}분</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
