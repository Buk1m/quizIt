import {Component, Input} from '@angular/core';
import {createQuestion, Question} from '../../../model/question';
import {Answer, createAnswer} from '../../../model/answer';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent {

  @Input()
  model: Question = createQuestion();

  tagCorrect(answer: Answer) {
    answer.isCorrect = !answer.isCorrect;
    console.log(this.model.answers);
  }

  deleteAnswer(answer: Answer) {
    const index = this.model.answers.indexOf(answer);
    this.model.answers.splice(index, 1);
  }

  addAnswer() {
    this.model.answers.push(createAnswer());
  }
}
