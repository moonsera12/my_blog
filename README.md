# Next.js 블로그 애플리케이션

이 프로젝트는 Next.js로 구축된 기능이 풍부한 블로그 애플리케이션입니다.

## 주요 기능

- 블로그 게시물 목록 및 상세 보기
- 로딩 상태 (스켈레톤 UI)
- 오류 처리 및 404 페이지
- 댓글 시스템
- 좋아요 기능
- 사용자 인증 (Clerk)
- 반응형 디자인

## 시작하기

### 필수 조건

- Node.js 18.x 이상
- MongoDB 계정 (옵션)
- Clerk 계정 (인증 기능 사용 시 필요)

### 환경 설정

1. `.env.local.example`을 `.env.local`로 복사합니다.
2. `.env.local` 파일의 환경 변수를 실제 값으로 업데이트합니다.

```bash
# Clerk 인증 관련 설정
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_your_publishable_key_here
CLERK_SECRET_KEY=sk_your_secret_key_here

# MongoDB 설정
MONGODB_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/blog?retryWrites=true&w=majority
```

### 개발 서버 실행

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)를 열어 결과를 확인하세요.

## 데이터베이스 설정

MongoDB를 사용하지 않는 경우에도 애플리케이션은 작동합니다. 이 경우 메모리 기반 저장소를 사용하지만, 서버가 재시작될 때마다 데이터가 초기화됩니다.

실제 운영 환경에서는 MongoDB 설정을 권장합니다:

1. [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)에서 계정을 생성합니다.
2. 새 클러스터를 생성하고 연결 문자열을 복사합니다.
3. `.env.local` 파일의 `MONGODB_URI` 값을 업데이트합니다.

## 인증 시스템 설정

이 애플리케이션은 [Clerk](https://clerk.com/)을 사용하여 인증을 처리합니다:

1. [Clerk 웹사이트](https://clerk.com/)에서 계정을 생성합니다.
2. 새 애플리케이션을 생성하고 API 키를 복사합니다.
3. `.env.local` 파일의 Clerk 관련 환경 변수를 업데이트합니다.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
