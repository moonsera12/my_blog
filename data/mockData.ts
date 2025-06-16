import type { Author } from '@/types/index';
import type { BlogPost, Tag, Category } from '@/types/blog';

export const author: Author = {
  id: '1',
  name: 'AI 전문가',
  avatar_url: '/images/authors/kim-ai.jpg',
};

export const tags: Tag[] = [
  { id: '1', name: '스크래치' },
  { id: '2', name: '파이썬' },
  { id: '3', name: '웹' },
  { id: '4', name: '게임' },
  { id: '5', name: '미술' },
  { id: '6', name: '프로젝트' },
];

export const categories: Category[] = [
  {
    id: '1',
    name: '🎮 블록 코딩 놀이터',
    description: '스크래치로 시작하는 즐거운 코딩 여행! 블록을 조립하며 나만의 게임을 만들어보세요.',
    image: '/images/categories/blocks.png',
    featured: true
  },
  {
    id: '2',
    name: '🎲 게임 만들기 교실',
    description: '파이게임으로 만드는 신나는 미니게임! 직접 만든 게임으로 친구들과 함께 놀아요.',
    image: '/images/categories/game-dev.png',
    featured: true
  },
  {
    id: '3',
    name: '🎨 웹 디자인 스튜디오',
    description: 'HTML과 CSS로 꾸미는 나만의 홈페이지! 예쁜 웹사이트를 만들어 자랑해보세요.',
    image: '/images/categories/web-design.png',
    featured: true
  },
  {
    id: '4',
    name: '🐍 파이썬 탐험대',
    description: '파이썬으로 떠나는 신기한 모험! 터틀 그래픽으로 그림도 그리고 계산도 해봐요.',
    image: '/images/categories/default.png',
    featured: true
  },
  {
    id: '5',
    name: '✨ 미니 프로젝트',
    description: '배운 내용으로 직접 만들어보는 재미있는 프로젝트! 나만의 작품을 만들어보세요.',
    image: '/images/categories/projects.png',
    featured: true
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'pytorch-basics',
    title: 'PyTorch로 시작하는 딥러닝의 기초',
    excerpt: '딥러닝을 처음 시작하는 분들을 위한 폭넓은 가이드라인입니다. PyTorch의 기본 개념부터 실전까지...',
    description: 'PyTorch의 기본 구조와 텐서 연산부터 시작하여 실제 모델 구현까지 배워봅니다.',
    content: '# PyTorch로 시작하는 딥러닝의 기초\n\n딥러닝을 처음 시작하는 분들을 위한 가이드입니다...', // 기본 마크다운 내용 추가
    coverImage: '/images/posts/pytorch-basics.png',
    date: '2025-06-13',
    createdAt: '2025-06-13',
    updatedAt: '2025-06-13',
    category: categories[4],
    readingTime: '35',
    author,
    tags: [tags[1], tags[5]],
    featured: true,
    highlights: [
      'PyTorch 기본 구조 이해하기',
      '텐서 연산 마스터하기',
      '간단한 신경망 구현',
      '모델 학습 및 평가'
    ]
  },
  {
    id: '2',
    slug: 'transformer-architecture',
    title: '트랜스포머 아키텍처 완벽 가이드',
    excerpt: '트랜스포머 아키텍처의 상세한 분석부터 구현까지 한 번에 배웁니다. Attention is All You...',
    description: '트랜스포머의 구조를 상세히 분석하고, Attention 메커니즘의 작동 원리를 이해합니다.',
    content: '# 트랜스포머 아키텍처 완벽 가이드\n\n트랜스포머는 현대 자연어 처리의 핵심 모델입니다...', // 기본 마크다운 내용 추가
    coverImage: '/images/posts/transformer-architecture.png',
    date: '2025-06-12',
    createdAt: '2025-06-12',
    updatedAt: '2025-06-12',
    category: categories[4],
    readingTime: '40',
    author,
    tags: [tags[1], tags[5]],
    featured: true,
    highlights: [
      'Attention 메커니즘 이해',
      '인코더-디코더 구조',
      '포지셔널 인코딩',
      '실제 구현 예제'
    ]
  },
  {
    id: '3',
    slug: 'langchain-chatgpt',
    title: 'LangChain으로 만드는 ChatGPT 애플리케이션',
    excerpt: 'ChatGPT API와 LangChain 프레임워크를 사용하여 놀라운 자연어 애플리케이션을 만드는 방법',
    description: 'LangChain을 활용하여 ChatGPT API 기반의 강력한 애플리케이션을 구축하는 방법을 배웁니다.',
    content: '# LangChain으로 만드는 ChatGPT 애플리케이션\n\nLangChain은 LLM 애플리케이션 개발을 위한 강력한 프레임워크입니다...', // 기본 마크다운 내용 추가
    coverImage: '/images/posts/chatgpt-langchain.png',
    date: '2025-06-11',
    createdAt: '2025-06-11',
    updatedAt: '2025-06-11',
    category: categories[4],
    readingTime: '35',
    author,
    tags: [tags[1], tags[5]],
    featured: true,
    highlights: [
      'LangChain 기초',
      'Chain과 Agent 활용',
      'ChatGPT API 통합',
      '실전 애플리케이션 개발'
    ]
  }
];
