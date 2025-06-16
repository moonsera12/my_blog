import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import { blogPosts } from '@/data/mockData';

export async function GET(
  request: Request,
  { params }: { params: { path: string[] } }
) {
  try {
    // 파일 경로 생성
    const filePath = path.join(process.cwd(), 'posts', ...params.path);
    
    // 파일이 존재하는지 확인
    try {
      await fs.access(filePath);
    } catch {
      // 파일이 없을 경우 사용자 친화적인 404 응답
      return NextResponse.json(
        { 
          error: '찾으시는 페이지가 없어요! 🙈',
          message: '다른 재미있는 수업을 찾아볼까요?',
          availablePosts: blogPosts.map(post => ({
            title: post.title,
            slug: post.slug
          }))
        }, 
        { status: 404 }
      );
    }

    // 파일 내용 읽기
    const content = await fs.readFile(filePath, 'utf8');

    // 메타데이터와 내용 분리
    const [, frontMatter = '', markdownContent = ''] = content.split('---\n');
    
    let metadata = {};
    if (frontMatter) {
      // YAML 형식의 frontMatter 파싱
      metadata = frontMatter.split('\n').reduce((acc, line) => {
        const [key, ...values] = line.split(':');
        if (key && values.length) {
          acc[key.trim()] = values.join(':').trim();
        }
        return acc;
      }, {} as Record<string, string>);
    }

    // 응답 반환
    return NextResponse.json({
      metadata,
      content: markdownContent.trim(),
    }, {
      headers: {
        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400'
      }
    });
    
  } catch (error) {
    console.error('마크다운 처리 중 오류:', error);
    return NextResponse.json(
      { 
        error: '무언가 잘못됐어요! 😅',
        message: '잠시 후 다시 시도해주세요.'
      }, 
      { status: 500 }
    );
  }
}
