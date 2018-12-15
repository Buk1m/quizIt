import { Answer } from './answer';

export class Question {
    content: string;
    urlImage: string;
    questionType: string;
    answers: Answer[];
}