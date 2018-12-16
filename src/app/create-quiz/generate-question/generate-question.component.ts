import {Component, Input} from '@angular/core';
import {createQuestion, Question} from '../../model/question';
import {Answer, createAnswer} from '../../model/answer';

@Component({
  selector: 'generate-question',
  templateUrl: './generate-question.component.html',
  styleUrls: ['./generate-question.component.css']
})
export class GenerateQuestionComponent {

  @Input()
  model: Question = createQuestion();

  tagCorrect(answer: Answer) {
    answer.isCorrect = !answer.isCorrect;
    console.log(this.model.answers);
  }

  deleteAnswer(answer: Answer) {
    let index = this.model.answers.indexOf(answer);
    this.model.answers.splice(index, 1);
  }

  addAnswer() {
    this.model.answers.push(createAnswer());
  }
}
