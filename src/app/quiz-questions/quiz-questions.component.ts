import {Component, Input, OnInit} from '@angular/core';
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

  constructor(private quizService: QuizService,
              private authService: AuthenticationService,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
