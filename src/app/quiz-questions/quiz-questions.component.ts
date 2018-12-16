import { Component, OnInit } from '@angular/core';
import {Quiz} from '../model/quiz';
import {AuthenticationService} from '../authentication.service';
import {QuizService} from '../quiz.service';
import {Route} from '@angular/router';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.css']
})
export class QuizQuestionsComponent implements OnInit {

  quiz: Quiz;

  constructor(private quizService: QuizService,
              private authService: AuthenticationService,
              private route: Route) { }

  ngOnInit() {
    const userDetails = this.authService.getUserDetails();
    const id = +this.route.snapshot.paramMap.get('id');
    // this.quiz = this.quizService
  }

}
