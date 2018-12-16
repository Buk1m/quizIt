import { Component, OnInit } from '@angular/core';
import {Quiz} from '../model/quiz';
import {AuthenticationService} from '../authentication.service';
import {QuizService} from '../quiz.service';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.css']
})
export class QuizQuestionsComponent implements OnInit {

  quiz: Quiz;

  constructor(private quizService: QuizService,
              private authService: AuthenticationService) { }

  ngOnInit() {
    const userDetails = this.authService.getUserDetails();
    const id = +this.route.snapshot.paramMap.get('id');
    this.quiz = this.http.get<Quiz>()
  }

}
