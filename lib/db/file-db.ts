import { promises as fs } from 'fs';
import path from 'path';

const DB_DIR = path.join(process.cwd(), 'data', 'db');

// 데이터베이스 파일 경로
const FILES = {
  comments: path.join(DB_DIR, 'comments.json'),
  likes: path.join(DB_DIR, 'likes.json'),
};

// 데이터베이스 초기화
async function initializeDB() {
  try {
    // DB 디렉토리 생성
    await fs.mkdir(DB_DIR, { recursive: true });

    // 파일 존재 여부 확인 및 생성
    for (const filePath of Object.values(FILES)) {
      try {
        await fs.access(filePath);
      } catch {
        await fs.writeFile(filePath, '[]');
      }
    }
  } catch (error) {
    console.error('데이터베이스 초기화 중 오류:', error);
  }
}

// 파일에서 데이터 읽기
async function readData<T>(file: string): Promise<T[]> {
  try {
    await initializeDB();
    const data = await fs.readFile(file, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error(`데이터 읽기 오류 (${file}):`, error);
    return [];
  }
}

// 파일에 데이터 쓰기
async function writeData<T>(file: string, data: T[]): Promise<void> {
  try {
    await initializeDB();
    await fs.writeFile(file, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error(`데이터 쓰기 오류 (${file}):`, error);
    throw new Error('데이터를 저장하는 중 오류가 발생했습니다.');
  }
}

export interface Comment {
  id: string;
  post_id: string;
  author_id: string;
  content: string;
  created_at: string;
  author?: Author;
}

export interface Author {
  id: string;
  name: string;
  avatar_url?: string;
}

export interface Like {
  id: string;
  post_id: string;
  user_id: string;
  created_at: string;
}

// 댓글 서비스
export const commentService = {
  async getPostComments(postId: string) {
    const comments = await readData<Comment>(FILES.comments);
    return comments
      .filter(comment => comment.post_id === postId)
      .sort((a, b) => 
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
  },

  async createComment(comment: Omit<Comment, 'id' | 'created_at'>) {
    const comments = await readData<Comment>(FILES.comments);
    const newComment: Comment = {
      ...comment,
      id: crypto.randomUUID(),
      created_at: new Date().toISOString()
    };
    
    comments.push(newComment);
    await writeData(FILES.comments, comments);
    return newComment;
  },

  async deleteComment(id: string) {
    const comments = await readData<Comment>(FILES.comments);
    const newComments = comments.filter(c => c.id !== id);
    await writeData(FILES.comments, newComments);
  }
};

// 좋아요 서비스
export const likeService = {
  async getPostLikes(postId: string): Promise<number> {
    try {
      const likes = await readData<Like>(FILES.likes);
      return likes.filter(like => like.post_id === postId).length;
    } catch (error) {
      console.error('좋아요 수 조회 중 오류:', error);
      return 0;
    }
  },

  async hasUserLiked(postId: string, userId: string): Promise<boolean> {
    try {
      const likes = await readData<Like>(FILES.likes);
      return likes.some(like => 
        like.post_id === postId && like.user_id === userId
      );
    } catch (error) {
      console.error('사용자 좋아요 확인 중 오류:', error);
      return false;
    }
  },

  async toggleLike(postId: string, userId: string): Promise<boolean> {
    try {
      const likes = await readData<Like>(FILES.likes);
      const existingLike = likes.find(like => 
        like.post_id === postId && like.user_id === userId
      );

      if (existingLike) {
        // 좋아요 취소
        const newLikes = likes.filter(like => like.id !== existingLike.id);
        await writeData(FILES.likes, newLikes);
        return false;
      } else {
        // 좋아요 추가
        const newLike: Like = {
          id: crypto.randomUUID(),
          post_id: postId,
          user_id: userId,
          created_at: new Date().toISOString()
        };
        likes.push(newLike);
        await writeData(FILES.likes, likes);
        return true;
      }
    } catch (error) {
      console.error('좋아요 토글 중 오류:', error);
      throw new Error('좋아요 처리 중 문제가 발생했습니다.');
    }
  }
};
