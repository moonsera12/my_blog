import { NextRequest, NextResponse } from 'next/server';
import { commentService } from '@/lib/db/file-db';

interface RequestParams {
  postId: string;
  commentId?: string;
}

export async function GET(
  request: NextRequest,
  { params }: { params: RequestParams }
): Promise<NextResponse> {
  const postId = params.postId;
  
  try {
    const comments = await commentService.getPostComments(postId);
    return NextResponse.json({ comments });
  } catch (error) {
    console.error('댓글을 가져오는 중 오류 발생:', error);
    return NextResponse.json(
      { error: '댓글을 가져오는데 실패했습니다.' },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: RequestParams }
): Promise<NextResponse> {
  try {
    const postId = params.postId;
    const body = await request.json();
    const comment = await commentService.createComment({ postId, ...body });
    return NextResponse.json(comment, { status: 201 });
  } catch (error) {
    console.error('댓글 작성 중 오류 발생:', error);
    return NextResponse.json(
      { error: '댓글 작성에 실패했습니다.' },
      { status: 500 }
    );
  }
}
