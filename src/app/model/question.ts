import {Answer, createAnswer} from './answer';

export class Question {
  content: string;
  urlImage: string;
  type: string;
  answers: Answer[];
}

export function createQuestion(): Question {
  return {
    content: '',
    urlImage: '',
    type: '',
    answers: [],
  };
}
