import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { formatDistance } from 'date-fns';
import { ko } from 'date-fns/locale';
import type { Comment } from '@/types';

interface CommentListProps {
  comments: Comment[];
  onCommentDelete?: (commentId: string) => Promise<void>;
}

export function CommentList({ comments, onCommentDelete }: CommentListProps) {
  if (comments.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        아직 의견이 없어요! 여러분의 생각을 처음으로 공유해보세요! 🎉
        PyTorch로 만들어보고 싶은 프로젝트나 궁금한 점을 자유롭게 이야기해주세요 ✨
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {comments.map((comment) => (
        <div key={comment.id} className="flex gap-4">
          <Avatar className="h-10 w-10">            <AvatarImage src={comment.author.avatar_url} alt={comment.author.name} />
            <AvatarFallback>{comment.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <h4 className="font-medium">{comment.author.name}</h4>
              <span className="text-sm text-gray-500">
                {formatDistance(new Date(comment.created_at), new Date(), {
                  addSuffix: true,
                  locale: ko,
                })}
              </span>
            </div>            <p className="text-gray-700 whitespace-pre-line">{comment.content}</p>
            {onCommentDelete && (
              <button
                onClick={() => onCommentDelete(comment.id)}
                className="text-sm text-gray-500 hover:text-red-500 mt-2"
              >
                삭제
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
