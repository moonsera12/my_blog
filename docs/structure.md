# Next.js 블로그 프로젝트 구조

```
📦 my_blog
├── 📂 app                      # App Router 메인 디렉토리
│   ├── 📂 (auth)              # 인증 관련 라우트 그룹
│   │   ├── login/page.tsx     # 로그인 페이지
│   │   ├── register/page.tsx  # 회원가입 페이지
│   │   └── layout.tsx         # 인증 페이지 레이아웃
│   │
│   ├── 📂 blog               # 블로그 관련 라우트
│   │   ├── page.tsx          # 블로그 메인 (포스트 목록)
│   │   ├── loading.tsx       # 로딩 UI
│   │   ├── error.tsx         # 에러 UI
│   │   ├── 📂 [slug]        # 동적 라우트 (포스트 상세)
│   │   │   ├── page.tsx     # 포스트 상세 페이지
│   │   │   └── loading.tsx  # 포스트 로딩 UI
│   │   └── 📂 category      # 카테고리별 보기
│   │       └── [category]/page.tsx
│   │
│   ├── 📂 search            # 검색 기능
│   │   └── page.tsx         # 검색 결과 페이지
│   │
│   ├── 📂 dashboard         # 사용자 대시보드
│   │   ├── page.tsx         # 대시보드 메인
│   │   ├── profile/page.tsx # 프로필 관리
│   │   └── posts/page.tsx   # 내 게시글 관리
│   │
│   ├── layout.tsx           # 루트 레이아웃
│   ├── page.tsx             # 홈페이지
│   └── globals.css          # 전역 스타일
│
├── 📂 components            # 재사용 가능한 컴포넌트
│   ├── 📂 blog             # 블로그 관련 컴포넌트
│   │   ├── post-card.tsx   # 포스트 카드
│   │   ├── post-list.tsx   # 포스트 목록
│   │   └── post-content.tsx # 포스트 내용 표시
│   │
│   ├── 📂 common           # 공통 컴포넌트
│   │   ├── header.tsx      # 헤더
│   │   ├── footer.tsx      # 푸터
│   │   └── navigation.tsx  # 네비게이션
│   │
│   ├── 📂 ui               # UI 컴포넌트
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── avatar.tsx
│   │
│   └── 📂 forms            # 폼 관련 컴포넌트
│       ├── login-form.tsx
│       └── post-form.tsx
│
├── 📂 lib                   # 유틸리티 및 설정
│   ├── 📂 auth             # 인증 관련
│   │   └── auth-options.ts # NextAuth 설정
│   │
│   ├── 📂 db               # 데이터베이스 관련
│   │   ├── prisma.ts      # Prisma 클라이언트
│   │   └── schema.prisma  # Prisma 스키마
│   │
│   └── utils.ts            # 유틸리티 함수
│
├── 📂 public               # 정적 파일
│   ├── images/            # 이미지 파일
│   └── icons/             # 아이콘 파일
│
└── 📂 types               # TypeScript 타입 정의
    ├── post.ts           # 포스트 관련 타입
    └── user.ts           # 사용자 관련 타입

```

## 주요 디렉토리 설명

### 📂 app
- Next.js 13+ App Router 구조 채택
- 라우트 그룹을 사용하여 관련 기능끼리 구분 (`(auth)`, `blog` 등)
- 각 라우트에 대한 로딩/에러 UI 포함

### 📂 components
- 재사용성과 유지보수를 고려한 컴포넌트 구조
- 기능별로 분리된 하위 폴더 구조
- atomic design 패턴을 부분적으로 적용

### 📂 lib
- 프로젝트의 핵심 기능 모음
- 데이터베이스, 인증 등 주요 설정 관리
- 재사용 가능한 유틸리티 함수 모음

### 📂 public
- 정적 자산 파일 관리
- 이미지, 아이콘 등 구분된 하위 폴더

### 📂 types
- TypeScript 타입 정의 파일
- 도메인별로 분리된 타입 정의

## 주요 특징

1. **모듈성**
   - 기능별로 명확히 분리된 구조
   - 컴포넌트의 재사용성 극대화

2. **확장성**
   - 새로운 기능 추가가 용이한 구조
   - 라우트 그룹을 통한 효율적인 페이지 관리

3. **유지보수성**
   - 관련 코드들의 논리적 그룹화
   - 명확한 네이밍과 일관된 구조

4. **성능**
   - App Router의 서버 컴포넌트 활용
   - 효율적인 코드 분할
