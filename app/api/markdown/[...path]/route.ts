import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
): Promise<NextResponse> {
  try {
    const filePath = path.join(process.cwd(), 'posts', ...params.path);
    const content = await fs.readFile(filePath, 'utf8');
    
    return new NextResponse(content, {
      headers: {
        'Content-Type': 'text/markdown',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error('마크다운 파일을 읽는 중 오류 발생:', error);
    return new NextResponse('Not Found', { status: 404 });
  }
}
