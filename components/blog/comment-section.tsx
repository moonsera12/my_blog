'use client';

import { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { CommentList } from '@/components/blog/comment-list';
import { useToast } from '@/lib/use-toast';
import { Loader2 } from 'lucide-react';

import type { Comment } from '@/types';

interface CommentSectionProps {
  postId: string;
}

export function CommentSection({ postId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const fetchComments = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/posts/${postId}/comments`);
      const data = await response.json();
      setComments(data.comments);
    } catch (error) {
      console.error('댓글을 가져오는 중 오류 발생:', error);
      toast({
        title: '오류',
        description: '댓글을 가져오는데 실패했습니다.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }, [postId, toast]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!content.trim()) {
      toast({
        title: '알림',
        description: '댓글 내용을 입력해주세요.',
        variant: 'destructive',
      });
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await fetch(`/api/posts/${postId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
      });

      if (!response.ok) {
        throw new Error('댓글 작성에 실패했습니다');
      }

      const { comment } = await response.json();
      setComments(prev => [comment, ...prev]);
      setContent('');
      toast({
        title: '성공',
        description: '댓글이 작성되었습니다.',
      });
    } catch (error) {
      console.error('댓글 작성 중 오류 발생:', error);
      toast({
        title: '오류',
        description: '댓글 작성에 실패했습니다.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">함께 이야기해요! 💬</h2>
      
      {/* 댓글 작성 폼 */}
      <form onSubmit={handleSubmit} className="space-y-4">          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="PyTorch로 무엇을 만들어보고 싶으신가요? 여러분의 아이디어를 공유해주세요! 😊"
            className="min-h-[100px] text-base placeholder:text-gray-500 placeholder:text-base"
          />
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full sm:w-auto"          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                의견 남기는 중...
              </>
            ) : (
              '의견 공유하기 ✨'
            )}
          </Button>
      </form>

      {/* 댓글 목록 */}
      {isLoading ? (
        <div className="flex justify-center py-8">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      ) : (
        <CommentList 
          comments={comments} 
          onCommentDelete={async (commentId: string) => {
            try {
              const response = await fetch(`/api/posts/${postId}/comments/${commentId}`, {
                method: 'DELETE',
              });

              if (!response.ok) throw new Error('댓글 삭제에 실패했습니다');

              setComments(prev => prev.filter(comment => comment.id !== commentId));
              toast({
                title: '성공',
                description: '댓글이 삭제되었습니다.',
              });
            } catch (error) {
              console.error('댓글 삭제 중 오류 발생:', error);
              toast({
                title: '오류',
                description: '댓글 삭제에 실패했습니다.',
                variant: 'destructive',
              });
            }
          }}
        />
      )}
    </div>
  );
}
