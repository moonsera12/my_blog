import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FileQuestion } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <FileQuestion className="h-20 w-20 text-purple-500 mb-6" />
      <h1 className="text-4xl font-bold mb-3">404</h1>
      <h2 className="text-2xl font-semibold mb-6">페이지를 찾을 수 없습니다</h2>
      <p className="text-lg text-gray-600 mb-8 max-w-md">
        찾으시는 페이지가 존재하지 않거나 이동되었을 수 있습니다. 
        블로그 홈으로 돌아가시거나 다른 페이지를 둘러보세요.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <Button asChild>
          <Link href="/blog">
            블로그 홈으로
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/">
            메인 페이지로
          </Link>
        </Button>
      </div>
    </div>
  );
}
