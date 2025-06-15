// 여기에서는 file-db를 사용하는 예시를 보여줍니다
import { promises as fs } from 'fs';
import path from 'path';

const DB_DIR = path.join(process.cwd(), 'data', 'db');

// 데이터베이스 파일 경로
const FILES = {
  comments: path.join(DB_DIR, 'comments.json'),
  likes: path.join(DB_DIR, 'likes.json'),
} as const;

// 데이터베이스 초기화
async function initializeDB() {
  try {
    await fs.mkdir(DB_DIR, { recursive: true });
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

// 데이터베이스 초기화 실행
initializeDB();

export { FILES, initializeDB };
