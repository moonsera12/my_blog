import { NextRequest } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

type Context = {
  params: {
    path: string[];
  };
};

export async function GET(
  request: NextRequest,
  context: Context
) {
  const filePath = path.join(process.cwd(), 'posts', ...context.params.path);
  
  try {
    const content = await fs.readFile(filePath, 'utf8');
    return new Response(content, {
      headers: {
        'Content-Type': 'text/markdown',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400'
      }
    });
  } catch (error) {
    return new Response('Not Found', { status: 404 });
  }
}
