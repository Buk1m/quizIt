import {Component, Input, Output} from '@angular/core';
import {Question} from '../../model/question';

@Component({
  selector: 'app-question-answers',
  templateUrl: './question-answers.component.html',
  styleUrls: ['./question-answers.component.css']
})
export class QuestionAnswersComponent {

  @Input()
  question: Question = {
    content: "ELOELO",
    urlImage: "",
    questionType: "Test",
    answers: [
      {content: "Test1", isCorrect: false},
      {content: "Test2", isCorrect: false},
      {content: "Test3", isCorrect: true},
    ]
  };

  @Output()
  selectedAnswers: number[] = [];

  moveOn() {

  }
}
