import {Component} from '@angular/core';
import {createQuestion, Question} from '../../model/question';
import {createQuiz, Quiz} from '../../model/quiz';

@Component({
  selector: 'app-generate-quiz',
  templateUrl: './generate-quiz.component.html',
  styleUrls: ['./generate-quiz.component.css'],
})
export class GenerateQuizComponent {
  quiz: Quiz = createQuiz();

  addQuestion() {
    this.quiz.questions.push(createQuestion());
  }

  createQuiz() {

  }

  togglePrivate() {
    this.quiz.access = !this.quiz.access as number;
  }
}
