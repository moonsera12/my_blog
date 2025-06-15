# 블로그 웹사이트 디자인 가이드

## 1. 디자인 컨셉 및 원칙

- **심플 & 클린(Simple & Clean)**: 불필요한 장식 없이 콘텐츠 중심의 레이아웃을 지향합니다.
- **가독성 우선**: 텍스트와 콘텐츠의 가독성을 최우선으로 고려합니다.
- **일관성(Consistency)**: 색상, 타이포그래피, 컴포넌트 스타일을 일관되게 유지합니다.
- **접근성(Accessibility)**: 명확한 대비, 충분한 크기, 키보드 네비게이션 등 접근성을 고려합니다.
- **모던 & 트렌디**: 최신 UI 트렌드와 ShadCN UI의 미니멀리즘을 반영합니다.

## 2. 색상 팔레트 및 타이포그래피

### 색상 팔레트 (TailwindCSS 기준)
- **Primary**: `#2563eb` (blue-600)
- **Secondary**: `#64748b` (slate-500)
- **Accent**: `#f59e42` (orange-400)
- **Background (Light)**: `#f8fafc` (slate-50)
- **Background (Dark)**: `#0f172a` (slate-900)
- **Surface**: `#ffffff` (white)
- **Border**: `#e2e8f0` (slate-200)
- **Text Primary**: `#0f172a` (slate-900)
- **Text Secondary**: `#64748b` (slate-500)
- **Error**: `#ef4444` (red-500)

### 다크모드 지원
- TailwindCSS의 `dark:` 유틸리티를 적극 활용
- 배경, 텍스트, 버튼 등 주요 요소에 다크모드 색상 적용

### 타이포그래피
- **기본 폰트**: `Inter`, `Pretendard`, `system-ui`, `sans-serif`
- **제목**: `font-bold`, `tracking-tight`
- **본문**: `font-normal`, `leading-relaxed`
- **글자 크기**: Tailwind의 `text-base`, `text-lg`, `text-xl`, `text-2xl` 등 단계별 사용

## 3. 주요 페이지 레이아웃 및 와이어프레임

### 3.1 메인(포스트 목록) 페이지
- 상단: 헤더(로고, 네비게이션, 다크모드 토글)
- 본문: 카테고리 필터, 검색바, 포스트 카드 목록(그리드/리스트)
- 하단: 푸터(저작권, 소셜 링크)

### 3.2 포스트 상세 페이지
- 상단: 헤더
- 본문: 제목, 작성자/날짜, 본문(마크다운 렌더링), 이미지, 태그
- 하단: 댓글 영역, 좋아요 버튼

### 3.3 레이아웃 예시 (와이어프레임)

```
+------------------------------------------------+
| Header (로고, 메뉴, 다크모드)                  |
+------------------------------------------------+
| 카테고리 |  검색바                             |
+------------------------------------------------+
| [포스트 카드] [포스트 카드] [포스트 카드] ...  |
| [포스트 카드] [포스트 카드] [포스트 카드] ...  |
+------------------------------------------------+
| Footer (저작권, 소셜)                          |
+------------------------------------------------+
```

## 4. UI 컴포넌트 스타일 가이드

### 버튼 (Button)
- ShadCN UI의 Button 컴포넌트 활용
- Primary: `bg-blue-600 text-white hover:bg-blue-700`
- Secondary: `bg-slate-100 text-slate-900 hover:bg-slate-200`
- Disabled: `opacity-50 cursor-not-allowed`
- 라운드: `rounded-md`
- 크기: `h-10 px-4 py-2 text-base`

### 카드 (Card)
- ShadCN UI의 Card 컴포넌트 활용
- 배경: `bg-white dark:bg-slate-800`
- 그림자: `shadow-md`
- 라운드: `rounded-lg`
- 내부 여백: `p-6`

### 입력(Input)
- ShadCN UI의 Input 컴포넌트 활용
- 테두리: `border border-slate-200 dark:border-slate-700`
- 포커스: `focus:ring-2 focus:ring-blue-500`
- 라운드: `rounded-md`
- 내부 여백: `px-3 py-2`

### 아바타(Avatar)
- ShadCN UI의 Avatar 컴포넌트 활용
- 크기: `w-10 h-10`
- 라운드: `rounded-full`

### 배지(Badge)
- ShadCN UI의 Badge 컴포넌트 활용
- 색상: 카테고리/상태에 따라 Tailwind 색상 사용
- 크기: `text-xs px-2 py-1 rounded`

### 기타
- 마크다운 렌더링: 코드블록, 인용구, 리스트 등 Tailwind Typography 플러그인 활용
- 아이콘: Lucide, Heroicons 등 일관된 스타일의 아이콘 사용

## 5. 반응형 디자인 지침

- TailwindCSS의 반응형 유틸리티(`sm:`, `md:`, `lg:`, `xl:`) 적극 활용
- 모바일(최소 360px) ~ 데스크탑(최대 1440px)까지 자연스러운 레이아웃
- 네비게이션: 모바일에서는 햄버거 메뉴, 데스크탑에서는 풀 네비게이션
- 포스트 목록: 모바일은 1열, 태블릿은 2열, 데스크탑은 3~4열 그리드
- 이미지: `object-cover`, `w-full`, `h-auto`로 반응형 처리
- 폰트 크기, 여백 등도 뷰포트에 따라 유동적으로 조정

---

이 가이드는 TailwindCSS와 ShadCN UI의 기본 컴포넌트 스타일을 적극 활용하며, 일관성 있고 현대적인 블로그 UI/UX를 구현하는 데 목적이 있습니다.
