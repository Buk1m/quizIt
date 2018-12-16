import { Component, OnInit } from '@angular/core';
import {Quiz} from '../model/quiz';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.css']
})
export class QuizQuestionsComponent implements OnInit {

  quiz: Quiz;

  constructor(private ,
              private authServcie: AuthenticationService) { }

  ngOnInit() {
    const userDetails = this.authServcie.getUserDetails();
    const id = +this.route.snapshot.paramMap.get('id');
    this.quiz = this.http.get<Quiz>()
  }

}
