export class Answer {
    isCorrect: boolean;
    content: string;
}

export function createAnswer(): Answer {
  return {
    isCorrect: false,
    content: '',
  };
}
