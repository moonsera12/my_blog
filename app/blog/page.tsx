'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MarkdownContent } from '@/components/blog/markdown-content';
import { blogPosts } from '@/data/mockData';
import Image from 'next/image';
import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState(blogPosts[0].slug);

  return (
    <div className="container py-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">기술 블로그</h1>
      
      <Tabs defaultValue={selectedPost} onValueChange={setSelectedPost} className="w-full">
        <TabsList className="w-full justify-start mb-8 overflow-x-auto">
          {blogPosts.map((post) => (
            <TabsTrigger 
              key={post.slug} 
              value={post.slug}
              className="min-w-[150px] data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 relative rounded overflow-hidden">
                  <Image
                    src={post.thumbnail}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="24px"
                  />
                </div>
                <span>{post.title}</span>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>

        {blogPosts.map((post) => (
          <TabsContent key={post.slug} value={post.slug}>
            <Card className="p-6">
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <Badge variant="outline" className="bg-primary/5">
                    {post.category.name}
                  </Badge>
                  <time className="text-sm text-muted-foreground" dateTime={post.date}>
                    {format(new Date(post.date), 'PPP', { locale: ko })}
                  </time>
                </div>
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </div>
              
              <div className="prose prose-sm sm:prose-base lg:prose-lg dark:prose-invert max-w-none">
                <MarkdownContent slug={post.slug} />
              </div>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
