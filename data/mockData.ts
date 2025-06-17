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
    slug: 'chatgpt-langchain-guide',
    title: '🤖 ChatGPT와 LangChain으로 AI 챗봇 만들기',
    excerpt: 'ChatGPT API와 LangChain을 활용하여 나만의 지능적인 챗봇을 만드는 방법을 알아봅니다.',
    description: 'ChatGPT API와 LangChain을 활용하여 나만의 지능적인 챗봇을 만드는 방법을 알아봅니다.',
    content: '# ChatGPT와 LangChain으로 AI 챗봇 만들기\n\n안녕하세요! 오늘은 ChatGPT API와 LangChain을 사용해서 똑똑한 AI 챗봇을 만드는 방법을 배워볼 거예요. 🤖\n\n## 1. 준비하기\n\n- Python 설치하기\n- OpenAI API 키 준비하기\n- LangChain 라이브러리 설치하기\n\n## 2. 기본 설정\n```python\nfrom langchain.llms import OpenAI\nfrom langchain.chains.conversation import ConversationChain\n\nllm = OpenAI(temperature=0.7)\nconversation = ConversationChain(llm=llm)\n```\n\n## 3. 대화하기\n- 챗봇과 대화하는 방법\n- 대화 기록 관리하기\n- 응답 생성 조절하기\n\n## 4. 고급 기능\n- 메모리 기능 추가\n- 성격 설정하기\n- 에러 처리하기\n\n이제 여러분만의 AI 친구를 만들어보세요! 🌟',
    coverImage: '/images/posts/chatgpt-langchain.png',
    date: '2025-06-16',
    createdAt: '2025-06-16',
    updatedAt: '2025-06-16',
    category: categories[3],
    readingTime: '25',
    author,
    tags: [tags[1], tags[5]],
    featured: true,
    highlights: [
      'ChatGPT API 사용법',
      'LangChain 기초',
      '대화형 AI 만들기',
      '챗봇 성능 최적화'
    ]
  },  {
    id: '2',
    slug: 'pytorch-deep-learning-basics',
    title: '🧠 PyTorch로 시작하는 딥러닝 기초',
    excerpt: 'PyTorch를 사용하여 첫 번째 신경망을 만들고 학습시키는 방법을 알아봅니다.',
    description: 'PyTorch를 사용하여 첫 번째 신경망을 만들고 학습시키는 방법을 알아봅니다.',
    content: '# PyTorch로 시작하는 딥러닝 기초\n\n안녕하세요! 오늘은 PyTorch를 사용해서 첫 번째 신경망을 만들어볼 거예요. 🧠\n\n## 1. PyTorch 소개\n\n- PyTorch란 무엇인가\n- 텐서(Tensor) 이해하기\n- 자동미분(Autograd) 개념\n\n## 2. 첫 번째 신경망\n```python\nimport torch\nimport torch.nn as nn\n\nclass SimpleNet(nn.Module):\n    def __init__(self):\n        super().__init__()\n        self.fc = nn.Linear(784, 10)\n\n    def forward(self, x):\n        return self.fc(x)\n```\n\n## 3. 모델 학습하기\n- 데이터 준비\n- 손실 함수 설정\n- 옵티마이저 선택\n- 학습 루프 구현\n\n## 4. 모델 평가\n- 테스트 데이터로 평가\n- 성능 측정\n- 결과 시각화\n\n이제 여러분도 AI 모델을 만들 수 있어요! �',
    coverImage: '/images/posts/pytorch-basics.png',
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
  },  {
    id: '3',
    slug: 'transformer-architecture-guide',
    title: '🤖 트랜스포머 아키텍처 완벽 가이드',
    excerpt: '자연어 처리의 혁명, 트랜스포머 아키텍처의 동작 원리와 구현 방법을 상세히 알아봅니다.',
    description: '자연어 처리의 혁명, 트랜스포머 아키텍처의 동작 원리와 구현 방법을 상세히 알아봅니다.',
    content: '# 트랜스포머 아키텍처 완벽 가이드\n\n안녕하세요! 오늘은 현대 AI의 핵심 기술인, 트랜스포머 아키텍처에 대해 자세히 알아볼 거예요. 🤖\n\n## 1. 트랜스포머란?\n\n- Attention is All You Need 논문 소개\n- RNN과의 비교\n- 트랜스포머의 장점\n\n## 2. 주요 구성 요소\n\n### Self-Attention\n```python\ndef self_attention(Q, K, V):\n    scores = torch.matmul(Q, K.transpose(-2, -1))\n    attention = torch.softmax(scores, dim=-1)\n    return torch.matmul(attention, V)\n```\n\n### Position Encoding\n- 위치 정보 인코딩\n- 상대적 위치 표현\n\n## 3. 인코더와 디코더\n- 인코더 구조\n- 디코더 구조\n- Cross-Attention\n\n## 4. 실전 응용\n- BERT 이해하기\n- GPT 시리즈 살펴보기\n- 실제 구현 예제\n\n이제 여러분도 트랜스포머를 이해했어요! �',
    coverImage: '/images/posts/transformer-architecture.png',
    date: '2025-06-14',
    createdAt: '2025-06-14',
    updatedAt: '2025-06-14',
    category: categories[3],
    readingTime: '30',
    author,
    tags: [tags[1], tags[5]],
    featured: true,
    highlights: [
      '트랜스포머 기본 구조',
      'Self-Attention 메커니즘',
      '위치 인코딩의 원리',
      'BERT와 GPT 이해하기'
    ]
  }
];
