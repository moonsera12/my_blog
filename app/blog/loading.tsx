import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div className="flex flex-col gap-8 px-4 md:px-6 py-8">
      {/* 헤더 스켈레톤 */}
      <div className="space-y-4">
        <Skeleton className="h-10 w-64 md:w-96" />
        <Skeleton className="h-4 w-full max-w-md" />
      </div>

      {/* 검색 바 스켈레톤 */}
      <Skeleton className="h-12 w-full max-w-lg" />

      {/* 카테고리 필터 스켈레톤 */}
      <div className="flex flex-wrap gap-2">
        <Skeleton className="h-10 w-20" />
        <Skeleton className="h-10 w-24" />
        <Skeleton className="h-10 w-16" />
        <Skeleton className="h-10 w-28" />
      </div>

      {/* 포스트 카드 그리드 스켈레톤 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array(6).fill(0).map((_, index) => (
          <div key={index} className="flex flex-col space-y-3 bg-white p-4 rounded-xl shadow-sm">
            <Skeleton className="h-48 w-full rounded-md" />
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-11/12" />
            <div className="flex gap-2">
              <Skeleton className="h-6 w-16" />
              <Skeleton className="h-6 w-16" />
            </div>
          </div>
        ))}
      </div>
      
      {/* 페이지네이션 스켈레톤 */}
      <div className="flex justify-center mt-8 gap-2">
        <Skeleton className="h-10 w-10" />
        <Skeleton className="h-10 w-10" />
        <Skeleton className="h-10 w-10" />
      </div>
    </div>
  );
}
