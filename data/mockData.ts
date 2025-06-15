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
    id: 'pytorch',
    name: 'PyTorch',
    description: '딥러닝의 핵심, PyTorch의 모든 것'
  },
  {
    id: 'transformer',
    name: '트랜스포머',
    description: 'AI 혁신의 중심, 트랜스포머 아키텍처'
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'LangChain으로 만드는 강력한 AI 애플리케이션'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'pytorch-deep-learning-basics',
    title: 'PyTorch로 시작하는 딥러닝의 기초',
    excerpt: '딥러닝의 핵심 개념부터 PyTorch를 활용한 실전 예제까지',
    description: '딥러닝을 처음 시작하는 분들을 위한 종합 가이드. PyTorch의 기본 개념부터 신경망 구현까지 모든 것을 담았습니다.',
    content: '', // 마크다운 파일에서 로드
    thumbnail: '/images/posts/pytorch-basics.png',
    coverImage: '/images/posts/pytorch-basics.png',
    date: '2024-01-15',
    createdAt: '2024-01-15',
    updatedAt: '2024-01-15',
    category: categories[0],
    readingTime: '15',
    author,
    tags: [tags[0], tags[1], tags[2]],
    featured: true,
    highlights: [
      '텐서(Tensor)의 기초와 연산',
      '자동 미분(Autograd)의 원리',
      '신경망 구현과 학습',
      '실전 프로젝트: 이미지 분류기 만들기'
    ]
  },
  {
    id: '2',
    slug: 'transformer-architecture',
    title: '트랜스포머 아키텍처 완벽 가이드',
    excerpt: '자연어 처리의 혁신, 트랜스포머의 모든 것',
    description: '트랜스포머 아키텍처를 상세히 분석하고 구현하는 방법을 배웁니다. Attention is All You Need 논문의 핵심 내용부터 최신 발전까지 다룹니다.',
    content: '', // 마크다운 파일에서 로드
    thumbnail: '/images/posts/transformer-architecture.png',
    coverImage: '/images/posts/transformer-architecture.png',
    date: '2024-02-01',
    createdAt: '2024-02-01',
    updatedAt: '2024-02-01',
    category: categories[1],
    readingTime: '20',
    author,
    tags: [tags[6], tags[4], tags[5]],
    featured: true,
    highlights: [
      '셀프 어텐션의 원리',
      '인코더-디코더 구조 이해하기',
      '포지셔널 인코딩의 비밀',
      '파이썬으로 구현하는 트랜스포머'
    ]
  },
  {
    id: '3',
    slug: 'chatgpt-langchain-guide',
    title: 'LangChain으로 만드는 ChatGPT 애플리케이션',
    excerpt: 'ChatGPT API와 LangChain을 활용한 실전 프로젝트',
    description: 'ChatGPT API와 LangChain 프레임워크를 사용하여 실용적인 AI 애플리케이션을 만드는 방법을 배웁니다.',
    content: '', // 마크다운 파일에서 로드
    thumbnail: '/images/posts/chatgpt-langchain.png',
    coverImage: '/images/posts/chatgpt-langchain.png',
    date: '2024-02-15',
    createdAt: '2024-02-15',
    updatedAt: '2024-02-15',
    category: categories[2],
    readingTime: '25',
    author,
    tags: [tags[7], tags[8], tags[5]],
    featured: true,
    highlights: [
      'ChatGPT API 완벽 활용법',
      'LangChain의 핵심 컴포넌트',
      '프롬프트 엔지니어링 기법',
      'RAG 시스템 구현하기'
    ]
  }
];
