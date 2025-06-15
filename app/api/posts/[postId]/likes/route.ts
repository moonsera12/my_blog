import { NextRequest, NextResponse } from 'next/server';
import { likeService } from '@/lib/db/file-db';

interface RequestParams {
  postId: string;
}

export async function GET(
  request: NextRequest,
  { params }: { params: RequestParams }
): Promise<NextResponse> {
  const postId = params.postId;
  
  try {
    const url = new URL(request.url);
    const userId = url.searchParams.get('userId');
    const likeCount = await likeService.getPostLikes(postId);
    let hasLiked = false;
    
    if (userId) {
      hasLiked = await likeService.hasUserLiked(postId, userId);
    }
    
    return NextResponse.json({
      likes: likeCount,
      hasLiked
    });
  } catch (error) {
    console.error('좋아요 정보를 가져오는 중 오류 발생:', error);
    return NextResponse.json(
      { error: '좋아요 정보를 가져오는데 실패했습니다.' },
      { status: 500 }
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: RequestParams }
): Promise<NextResponse> {
  const postId = params.postId;
  
  try {
    const { userId } = await request.json();
    const result = await likeService.toggleLike(postId, userId);
    return NextResponse.json(result);
  } catch (error) {
    console.error('좋아요 토글 중 오류 발생:', error);
    return NextResponse.json(
      { error: '좋아요 처리에 실패했습니다.' },
      { status: 500 }
    );
  }
}
