import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Answer} from '../../../../model/answer';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent {

  @Input()
  answer: Answer;
  @Output()
  selection = new EventEmitter();

  selected = false;
}
