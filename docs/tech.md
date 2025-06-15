# 블로그 웹사이트 기술 아키텍처

## 1. 프로젝트 구조 및 파일 조직

```
src/
├── app/                      # App Router 구조
│   ├── (auth)/              # 인증 관련 라우트 그룹
│   │   ├── login/
│   │   ├── register/
│   │   └── layout.tsx
│   ├── blog/               # 블로그 관련 라우트
│   │   ├── [slug]/        # 동적 라우트 (포스트 상세)
│   │   └── category/[slug]
│   ├── api/                # API 라우트
│   │   ├── auth/
│   │   ├── posts/
│   │   ├── comments/
│   │   └── search/
│   └── layout.tsx
├── components/             # 컴포넌트
│   ├── blog/              # 블로그 관련 컴포넌트
│   ├── common/            # 공통 컴포넌트
│   ├── forms/             # 폼 컴포넌트
│   └── ui/                # UI 기본 컴포넌트
├── lib/                   # 유틸리티 및 설정
│   ├── db/               # 데이터베이스
│   ├── auth/             # 인증
│   └── utils/            # 유틸리티
└── types/                # TypeScript 타입 정의

```

## 2. 컴포넌트 계층 구조

### 2.1 레이아웃 컴포넌트
```tsx
RootLayout
├── Header
│   ├── Navigation
│   ├── SearchBar
│   └── ThemeToggle
├── MainContent
└── Footer
```

### 2.2 페이지별 컴포넌트
```tsx
// 블로그 목록
BlogListPage
├── CategoryFilter
├── PostGrid
│   └── PostCard
└── Pagination

// 블로그 상세
BlogPostPage
├── PostHeader
├── TableOfContents
├── PostContent
├── PostActions
└── CommentSection
```

### 2.3 재사용 가능한 컴포넌트
```tsx
components/
├── ui/                    # shadcn/ui 기반 컴포넌트
│   ├── Button
│   ├── Card
│   ├── Input
│   └── Avatar
├── common/               # 공통 컴포넌트
│   ├── Markdown
│   ├── ImageUpload
│   └── LoadingSpinner
└── forms/               # 폼 컴포넌트
    ├── PostForm
    └── CommentForm
```

## 3. 데이터 모델 및 상태 관리

### 3.1 Prisma 스키마
```prisma
model User {
  id            String    @id @default(cuid())
  email         String    @unique
  name          String?
  image         String?
  posts         Post[]
  comments      Comment[]
  likes         Like[]
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

model Post {
  id          String    @id @default(cuid())
  title       String
  slug        String    @unique
  content     String
  excerpt     String?
  published   Boolean   @default(false)
  author      User      @relation(fields: [authorId], references: [id])
  authorId    String
  category    Category  @relation(fields: [categoryId], references: [id])
  categoryId  String
  tags        Tag[]
  comments    Comment[]
  likes       Like[]
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}

model Category {
  id          String    @id @default(cuid())
  name        String
  slug        String    @unique
  posts       Post[]
}

model Tag {
  id          String    @id @default(cuid())
  name        String
  slug        String    @unique
  posts       Post[]
}

model Comment {
  id          String    @id @default(cuid())
  content     String
  author      User      @relation(fields: [authorId], references: [id])
  authorId    String
  post        Post      @relation(fields: [postId], references: [id])
  postId      String
  parent      Comment?  @relation("CommentToComment", fields: [parentId], references: [id])
  parentId    String?
  replies     Comment[] @relation("CommentToComment")
  createdAt   DateTime  @default(now())
  updatedAt   DateTime  @updatedAt
}

model Like {
  id        String    @id @default(cuid())
  user      User      @relation(fields: [userId], references: [id])
  userId    String
  post      Post      @relation(fields: [postId], references: [id])
  postId    String
  createdAt DateTime  @default(now())

  @@unique([userId, postId])
}
```

### 3.2 상태 관리
- 서버 상태: React Query (TanStack Query) 사용
- 클라이언트 상태: React Context API + Zustand 조합
- 폼 상태: React Hook Form

```tsx
// 상태 관리 예시
interface AppState {
  theme: 'light' | 'dark';
  searchQuery: string;
  filters: CategoryFilters;
}

interface CategoryFilters {
  selectedCategories: string[];
  sortBy: 'recent' | 'popular';
}
```

## 4. API 설계 (Next.js Route Handler)

### 4.1 Posts API
```typescript
// app/api/posts/route.ts
GET /api/posts
GET /api/posts/[slug]
POST /api/posts
PUT /api/posts/[slug]
DELETE /api/posts/[slug]

// Query Parameters
?page=1
?limit=10
?category=ai-learning
?search=machine-learning
```

### 4.2 Comments API
```typescript
// app/api/comments/route.ts
GET /api/posts/[slug]/comments
POST /api/comments
PUT /api/comments/[id]
DELETE /api/comments/[id]
```

### 4.3 Authentication API
```typescript
// app/api/auth/[...nextauth]/route.ts
POST /api/auth/signin
POST /api/auth/signout
GET /api/auth/session
```

### 4.4 Search API
```typescript
// app/api/search/route.ts
GET /api/search?q=query
GET /api/search/suggestions?q=query
```

## 5. 성능 최적화 전략

### 5.1 빌드 시 최적화
- 정적 페이지 생성 (Static Site Generation)
```typescript
// 블로그 포스트 페이지
export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}
```

### 5.2 이미지 최적화
- Next.js Image 컴포넌트 사용
- Cloudinary 이미지 최적화
```tsx
import Image from 'next/image'

export function OptimizedImage({ src, alt }) {
  return (
    <Image
      src={src}
      alt={alt}
      width={720}
      height={400}
      placeholder="blur"
      loading="lazy"
    />
  )
}
```

### 5.3 데이터 로딩 최적화
- React Query를 사용한 캐싱
```typescript
const { data, isLoading } = useQuery({
  queryKey: ['posts', category],
  queryFn: () => fetchPosts(category),
  staleTime: 1000 * 60 * 5, // 5분
})
```

### 5.4 코드 분할
- 동적 임포트
```typescript
const MarkdownEditor = dynamic(() => import('@/components/MarkdownEditor'), {
  loading: () => <LoadingSpinner />,
  ssr: false
})
```

### 5.5 캐싱 전략
```typescript
// 서버 응답 캐싱
export async function GET() {
  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
    },
  })
}
```

### 5.6 SEO 최적화
```typescript
// app/blog/[slug]/page.tsx
export function generateMetadata({ params }: Props): Metadata {
  return {
    title: `${post.title} | AI Learning Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage],
    },
  }
}
```
