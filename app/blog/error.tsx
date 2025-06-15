'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // 에러 로깅
    console.error(error);
  }, [error]);
  return (
    <div className="min-h-[80vh] px-4 py-16 sm:py-24 flex items-center justify-center bg-gray-50/50">
      <div className="relative max-w-2xl w-full mx-auto p-6 bg-white rounded-2xl shadow-xl border border-gray-100">
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
          <div className="w-32 h-32 bg-red-50 rounded-full flex items-center justify-center">
            <AlertCircle className="h-16 w-16 text-red-500" />
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h1 className="text-3xl font-bold mb-3 bg-gradient-to-r from-red-500 to-pink-500 text-transparent bg-clip-text">
            이런! 문제가 발생했습니다
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
            페이지를 불러오는 도중 오류가 발생했습니다. 
            <br/>
            다시 시도하시거나 블로그 홈으로 돌아가세요.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              onClick={reset}
              variant="default"
              className="bg-gradient-to-r from-red-500 to-pink-500 hover:opacity-90 text-white border-0"
            >
              다시 시도하기
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 hover:bg-gray-50"
              asChild
            >
              <Link href="/blog">
                블로그 홈으로 돌아가기
              </Link>
            </Button>
          </div>

          {error.digest && (
            <div className="text-sm text-gray-500 border-t border-gray-100 pt-4 mt-4">
              <p className="flex items-center justify-center gap-2">
                <span>에러 코드:</span>
                <code className="px-2 py-1 bg-gray-100 rounded-md font-mono">
                  {error.digest}
                </code>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
