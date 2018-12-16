import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Quiz} from '../model/quiz';
import {AuthenticationService} from '../authentication.service';
import {QuizService} from '../quiz.service';
import {ActivatedRoute, Route} from '@angular/router';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.css']
})
export class QuizQuestionsComponent implements OnInit {
  @Input()
  quiz: Quiz;

  @Output() score: EventEmitter<number> = new EventEmitter<number>();

  time = 0;
  interval;

  constructor(private quizService: QuizService,
              private authService: AuthenticationService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const userDetails = this.authService.getUserDetails();
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


  countScore($event: number) {
    this.score.emit($event / this.time);
  }

  done() {
    this.pauseTimer();
  }
}
