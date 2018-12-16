import {createQuestion, Question} from './question';

export class Quiz {
  name: string;
  access: number;
  authorId: string;
  questions: Question[];
}

export function createQuiz() {
  return {
    name: '',
    access: 0,
    authorId: '-1',
    questions: [],
  };
}
