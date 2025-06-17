import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { blogPosts } from '@/data/mockData';
import { PostDetail } from '@/components/blog/post-detail';

interface PostPageProps {
  params: {
    slug: string;
  };
}

// 동적 메타데이터 생성
export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: '게시물을 찾을 수 없습니다',
      description: '요청하신 게시물을 찾을 수 없습니다.',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      url: `https://yourblog.com/blog/${post.slug}`,
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [post.author.name],
      tags: post.tags.map(tag => tag.name),
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
      creator: '@yourtwitterhandle',
    },
  };
}

// 정적 페이지 생성을 위한 매개변수 생성
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function PostPage({ params }: PostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return <PostDetail post={post} />;
}
