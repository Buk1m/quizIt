import {createQuestion, Question} from './question';

export class Quiz {
  access: number;
  authorId: string;
  questions: Question[];
}

export function createQuiz() {
  return {
    access: 0,
    authorId: '-1',
    questions: [],
  };
}
