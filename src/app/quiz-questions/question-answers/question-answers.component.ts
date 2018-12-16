import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from '../../model/question';

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

  checkedCorrect: number;

  correctAmount: number;

  ngOnInit() {
    let result = 0;
    for (let answer of this.question.answers) {
      if (answer.isCorrect === true) {
        result++;
      }
    }
    this.correctAmount = result;
  }
  checkAnswer($event: any) {
    if ($event.selected === 0) {
      this.checkedCorrect--;
    } else if ($event.selected === 1) {
      this.checkedCorrect++;
    }
    this.correctness.emit(this.checkedCorrect / this.correctAmount);
  }
}
