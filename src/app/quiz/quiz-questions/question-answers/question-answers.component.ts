import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from '../../../model/question';

@Component({
  selector: 'app-question-answers',
  templateUrl: './question-answers.component.html',
  styleUrls: ['./question-answers.component.css']
})
export class QuestionAnswersComponent implements OnInit {

  @Input()
  question: Question;

  @Output()
  correctness: EventEmitter<number> = new EventEmitter<number>();

  checkedCorrect = .0;

  correctAmount = .0;

  ngOnInit() {
    console.log(this.question);
    let result = .0;
    for (const answer of this.question.answers) {
      if (answer.isCorrect === true) {
        result++;
      }
    }
    console.log(result);
    this.correctAmount = result;
  }

  checkAnswer(event: any) {
    if (event.selected && event.isCorrect) {
      this.checkedCorrect++;
    } else {
      this.checkedCorrect--;
    }
    console.log(this.checkedCorrect / this.correctAmount);
    this.correctness.emit(this.checkedCorrect / this.correctAmount);
  }
}
