import {Question} from './question';
import {User} from './user';

export interface Quiz {
  quizId: number;
  authorId: number;
  author: User;
  questions: Question[];
}
