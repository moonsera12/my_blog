'use client';

import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useToast } from '@/lib/use-toast';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

interface LikeButtonProps {
  postId: string;
  initialLikes?: number;
}

export function LikeButton({ postId, initialLikes = 0 }: LikeButtonProps) {
  const [likes, setLikes] = useState(initialLikes);
  const [hasLiked, setHasLiked] = useState(false);
  const { toast } = useToast();  // 세션 스토리지에서 userId를 가져오거나 생성
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    // 브라우저의 세션 스토리지에서 userId를 가져옴
    let storedUserId = sessionStorage.getItem('userId');
    if (!storedUserId) {
      // userId가 없으면 새로 생성하고 저장
      storedUserId = `user-${Math.random().toString(36).substring(2)}`;
      sessionStorage.setItem('userId', storedUserId);
    }
    setUserId(storedUserId);
  }, []);

  useEffect(() => {
    const fetchLikes = async () => {
      if (!userId) return;
      try {
        // userId를 쿼리 파라미터로 전달
        const response = await fetch(`/api/posts/${postId}/likes?userId=${encodeURIComponent(userId)}`, {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });
        const data = await response.json();
        if (response.ok) {
          setLikes(data.likes);
          setHasLiked(data.hasLiked);
        }
      } catch (error) {
        console.error('좋아요 정보를 가져오는데 실패했습니다:', error);
      }
    };
    fetchLikes();
  }, [postId, userId]);
  const handleLike = async () => {
    // userId가 없으면 로그인 안내
    if (!userId) {
      toast({
        title: '로그인이 필요합니다',
        description: '좋아요 기능을 사용하려면 로그인이 필요합니다.',
        variant: 'default',
      });
      return;
    }

    try {
      const response = await fetch(`/api/posts/${postId}/likes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId }),
      });
      const data = await response.json();

      if (response.ok) {
        setLikes(data.likes);
        setHasLiked(data.hasLiked);
        toast({
          title: data.hasLiked ? '좋아요!' : '좋아요 취소',
          description: data.hasLiked ? '이 글을 좋아합니다.' : '좋아요를 취소했습니다.',
          variant: 'default',
        });
      } else {
        throw new Error(data.error || '알 수 없는 오류가 발생했습니다');
      }
    } catch (error) {
      console.error('좋아요 처리 중 오류가 발생했습니다:', error);
      toast({
        title: '오류',
        description: '좋아요 처리 중 문제가 발생했습니다.',
        variant: 'destructive',
      });
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="flex gap-1 items-center hover:bg-pink-50"
            onClick={handleLike}
          >
            <Heart
              className={cn(
                'h-4 w-4',
                hasLiked ? 'fill-pink-500 stroke-pink-500' : 'stroke-gray-500'
              )}
            />
            <span
              className={cn(
                'text-sm',
                hasLiked ? 'text-pink-500' : 'text-gray-500'
              )}
            >
              {likes}
            </span>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{hasLiked ? '좋아요 취소하기' : '좋아요'}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
