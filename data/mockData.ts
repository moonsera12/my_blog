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
    slug: 'html-character-card',
    title: '🌈 HTML로 캐릭터 카드 만들기',
    excerpt: 'HTML과 CSS를 사용하여 좋아하는 캐릭터를 소개하는 예쁜 카드 만들어보기!',
    description: 'HTML과 CSS를 사용하여 좋아하는 캐릭터를 소개하는 예쁜 카드 만들어보기!',
    content: '# HTML로 캐릭터 카드 만들기\n\nHTML과 CSS를 사용해서 내가 좋아하는 캐릭터를 소개하는 예쁜 카드를 만들어봐요!\n\n## 배울 내용\n\n- HTML 기본 태그 사용하기\n- CSS로 예쁘게 꾸미기\n- 이미지 넣기\n- 마우스를 올렸을 때 효과 주기',
    coverImage: '/images/categories/web-design.png',
    date: '2025-06-16',
    createdAt: '2025-06-16',
    updatedAt: '2025-06-16',
    category: categories[2],
    readingTime: '20',
    author,
    tags: [tags[2], tags[5]],
    featured: true,
    highlights: [
      'HTML 태그 배우기',
      'CSS로 예쁘게 꾸미기',
      '이미지 넣기',
      '애니메이션 효과 주기'
    ]
  },
  {
    id: '2',
    slug: 'python-turtle-drawing',
    title: '🎨 파이썬 거북이와 그림 그리기',
    excerpt: '파이썬의 터틀 그래픽으로 다양한 문양과 패턴 만들기 구현하기',
    description: '파이썬의 터틀 그래픽으로 다양한 문양과 패턴 만들기 구현하기',
    content: '# 파이썬 거북이와 그림 그리기\n\n파이썬의 터틀 그래픽으로 다양한 모양과 패턴을 그려보는 창의적인 코딩 수업입니다!\n\n## 배울 내용\n\n- 터틀 그래픽스 기본 사용법\n- 다각형 그리기\n- 반복문으로 패턴 만들기\n- 나만의 예술 작품 완성하기',
    coverImage: '/images/categories/default.png',
    date: '2025-06-15',
    createdAt: '2025-06-15',
    updatedAt: '2025-06-15',
    category: categories[3],
    readingTime: '25',
    author,
    tags: [tags[1], tags[4]],
    featured: true,
    highlights: [
      '터틀 그래픽스 시작하기',
      '다각형 그리기',
      '반복문으로 패턴 만들기',
      '나만의 작품 완성하기'
    ]
  },
  {
    id: '3',
    slug: 'scratch-first-game',
    title: '🎮 스크래치로 만드는 첫 번째 게임',
    excerpt: '블록을 조립하며 배우는 게임 만들기의 기초',
    description: '스크래치의 기본 기능부터 시작해서 간단한 게임을 만들어보는 재미있는 수업입니다!',
    content: '# 스크래치로 만드는 첫 번째 게임\n\n스크래치로 시작하는 즐거운 게임 만들기! 블록을 조립하며 나만의 게임을 만들어보세요.\n\n## 배울 내용\n\n- 스크래치 기본 블록 이해하기\n- 캐릭터 움직이기\n- 점수 시스템 만들기\n- 나만의 게임 완성하기',
    coverImage: '/images/categories/blocks.png',
    date: '2025-06-14',
    createdAt: '2025-06-14',
    updatedAt: '2025-06-14',
    category: categories[0],
    readingTime: '30',
    author,
    tags: [tags[0], tags[3]],
    featured: true,
    highlights: [
      '스크래치 기본 블록 이해하기',
      '캐릭터 움직이기',
      '점수 시스템 만들기',
      '나만의 게임 완성하기'
    ]
  }
];
