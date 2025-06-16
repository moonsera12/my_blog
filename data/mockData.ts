import type { Author } from '@/types/index';
import type { BlogPost, Tag, Category } from '@/types/blog';

export const author: Author = {
  id: '1',
  name: 'AI 전문가',
  avatar_url: '/images/authors/kim-ai.jpg',
};

export const tags: Tag[] = [
  { id: '1', name: 'PyTorch' },
  { id: '2', name: '딥러닝' },
  { id: '3', name: '머신러닝' },
  { id: '4', name: '신경망' },
  { id: '5', name: '자연어처리' },
  { id: '6', name: 'AI' },
  { id: '7', name: '트랜스포머' },
  { id: '8', name: 'ChatGPT' },
  { id: '9', name: 'LangChain' },
];

export const categories: Category[] = [
  {
    id: '1',
    name: '블록 코딩 놀이터',
    description: '스크래치로 시작하는 즐거운 코딩 여행! 블록을 조립하며 나만의 게임을 만들어보세요.',
    image: '/images/categories/blocks.png',
    featured: true
  },
  {
    id: '2',
    name: '게임 만들기 교실',
    description: '파이게임으로 만드는 신나는 미니게임! 직접 만든 게임으로 친구들과 함께 놀아요.',
    image: '/images/categories/game-dev.png',
    featured: true
  },
  {
    id: '3',
    name: '웹 디자인 스튜디오',
    description: 'HTML과 CSS로 꾸미는 나만의 홈페이지! 예쁜 웹사이트를 만들어 자랑해보세요.',
    image: '/images/categories/web-design.png',
    featured: true
  },
  {
    id: '4',
    name: '파이썬 탐험대',
    description: '파이썬으로 떠나는 신기한 모험! 터틀 그래픽으로 그림도 그리고 계산도 해봐요.',
    image: '/images/categories/default.png',
    featured: true
  },
  {
    id: '5',
    name: '미니 프로젝트',
    description: '배운 내용으로 직접 만들어보는 재미있는 프로젝트! 나만의 작품을 만들어보세요.',
    image: '/images/categories/projects.png',
    featured: true
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'scratch-game-basics',
    title: '스크래치로 만드는 첫 번째 게임',
    excerpt: '블록을 조립하며 배우는 게임 만들기의 기초',
    description: '스크래치의 기본 기능부터 시작해서 간단한 게임을 만들어보는 재미있는 수업입니다!',
    content: '', // 마크다운 파일에서 로드
    thumbnail: '/images/categories/blocks.png',
    coverImage: '/images/categories/blocks.png',
    date: '2025-06-14',
    createdAt: '2025-06-14',
    updatedAt: '2025-06-14',
    category: categories[0],
    readingTime: '30',
    author,
    tags: [{ id: 'scratch', name: '스크래치' }, { id: 'game', name: '게임' }],
    featured: true,
    highlights: [
      '스크래치 기본 블록 이해하기',
      '캐릭터 움직이기',
      '점수 시스템 만들기',
      '나만의 게임 완성하기'
    ]
  },
  {
    id: '2',
    slug: 'python-turtle-art',
    title: '파이썬 거북이와 그림 그리기',
    excerpt: '거북이와 함께하는 코딩 미술 시간',
    description: '파이썬의 터틀 그래픽으로 다양한 모양과 패턴을 그려보는 창의적인 코딩 수업입니다.',
    content: '', // 마크다운 파일에서 로드
    thumbnail: '/images/categories/default.png',
    coverImage: '/images/categories/default.png',
    date: '2025-06-15',
    createdAt: '2025-06-15',
    updatedAt: '2025-06-15',
    category: categories[3],
    readingTime: '25',
    author,
    tags: [{ id: 'python', name: '파이썬' }, { id: 'art', name: '미술' }],
    featured: true,
    highlights: [
      '터틀 그래픽스 시작하기',
      '다각형 그리기',
      '반복문으로 패턴 만들기',
      '나만의 그림 완성하기'
    ]
  },
  {
    id: '3',
    slug: 'html-character-card',
    title: 'HTML로 캐릭터 카드 만들기',
    excerpt: 'HTML과 CSS로 꾸미는 나만의 캐릭터',
    description: 'HTML과 CSS를 사용해서 좋아하는 캐릭터를 소개하는 예쁜 카드를 만들어봐요!',
    content: '', // 마크다운 파일에서 로드
    thumbnail: '/images/categories/web-design.png',
    coverImage: '/images/categories/web-design.png',
    date: '2025-06-16',
    createdAt: '2025-06-16',
    updatedAt: '2025-06-16',
    category: categories[2],
    readingTime: '20',
    author,
    tags: [{ id: 'html', name: 'HTML' }, { id: 'css', name: 'CSS' }],
    featured: true,
    highlights: [
      'HTML 태그 배우기',
      'CSS로 예쁘게 꾸미기',
      '이미지 넣기',
      '애니메이션 효과 주기'
    ]
  },
  {
    id: '4',
    slug: 'pytorch-deep-learning-basics',
    title: 'PyTorch로 시작하는 딥러닝의 기초',
    excerpt: '딥러닝의 핵심 개념부터 PyTorch를 활용한 실전 예제까지',
    description: '딥러닝을 처음 시작하는 분들을 위한 종합 가이드입니다. PyTorch의 기본 개념부터 신경망 구현까지 모든 것을 담았습니다.',
    content: '', // 마크다운 파일에서 로드
    thumbnail: '/images/posts/pytorch-basics.png',
    coverImage: '/images/posts/pytorch-basics.png',
    date: '2025-06-13',
    createdAt: '2025-06-13',
    updatedAt: '2025-06-13',
    category: categories[4], // 미니 프로젝트 카테고리로 이동
    readingTime: '15',
    author,
    tags: [tags[0], tags[1], tags[2]],
    featured: false,
    highlights: [
      '텐서(Tensor)의 기초와 연산',
      '자동 미분(Autograd)의 원리',
      '신경망 구현과 학습',
      '실전 프로젝트: 이미지 분류기 만들기'
    ]
  },
  {
    id: '5',
    slug: 'transformer-architecture',
    title: '트랜스포머 아키텍처 완벽 가이드',
    excerpt: '자연어 처리의 혁신, 트랜스포머의 모든 것',
    description: '트랜스포머 아키텍처를 상세히 분석하고 구현하는 방법을 배웁니다. Attention is All You Need 논문의 핵심 내용부터 최신 발전까지 다룹니다.',
    content: '', // 마크다운 파일에서 로드
    thumbnail: '/images/posts/transformer-architecture.png',
    coverImage: '/images/posts/transformer-architecture.png',
    date: '2025-06-12',
    createdAt: '2025-06-12',
    updatedAt: '2025-06-12',
    category: categories[4], // 미니 프로젝트 카테고리로 이동
    readingTime: '20',
    author,
    tags: [tags[6], tags[4], tags[5]],
    featured: false,
    highlights: [
      '셀프 어텐션의 원리',
      '인코더-디코더 구조 이해하기',
      '포지셔널 인코딩의 비밀',
      '파이썬으로 구현하는 트랜스포머'
    ]
  },
  {
    id: '6',
    slug: 'chatgpt-langchain-guide',
    title: 'LangChain으로 만드는 ChatGPT 애플리케이션',
    excerpt: 'ChatGPT API와 LangChain을 활용한 실전 프로젝트',
    description: 'ChatGPT API와 LangChain 프레임워크를 사용하여 실용적인 AI 애플리케이션을 만드는 방법을 배웁니다.',
    content: '', // 마크다운 파일에서 로드
    thumbnail: '/images/posts/chatgpt-langchain.png',
    coverImage: '/images/posts/chatgpt-langchain.png',
    date: '2025-06-11',
    createdAt: '2025-06-11',
    updatedAt: '2025-06-11',
    category: categories[4], // 미니 프로젝트 카테고리로 이동
    readingTime: '25',
    author,
    tags: [tags[7], tags[8], tags[5]],
    featured: false,
    highlights: [
      'ChatGPT API 완벽 활용법',
      'LangChain의 핵심 컴포넌트',
      '프롬프트 엔지니어링 기법',
      'RAG 시스템 구현하기'
    ]
  }
];
