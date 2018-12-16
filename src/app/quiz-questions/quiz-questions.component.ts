import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Quiz} from '../model/quiz';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.css']
})
export class QuizQuestionsComponent implements OnInit {
  @Input()
  quiz: Quiz;
  value = .0;

  @Output() score: EventEmitter<number> = new EventEmitter<number>();

  time = .0;
  interval;

  constructor() {
  }

  ngOnInit() {
    console.log(this.quiz);
    this.startTimer();
  }

  startTimer() {
    this.interval = setInterval(() => {
      this.time++;
    }, 1000);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  countScore(event: number) {
    this.value += event / (this.time !== 0 ? this.time : 1);
    console.log(this.value);
  }

  done() {
    this.pauseTimer();
    this.score.emit(this.value);
  }
}
