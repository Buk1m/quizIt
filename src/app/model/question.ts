import {Answer, createAnswer} from './answer';

export class Question {
  content: string;
  urlImage: string;
  questionType: string;
  answers: Answer[];
}

export function createQuestion(): Question {
  return {
    content: '',
    urlImage: '',
    questionType: 'test',
    answers: [],
  };
}
