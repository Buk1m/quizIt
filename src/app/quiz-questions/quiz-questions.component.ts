import { Component, OnInit } from '@angular/core';
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

  quiz: Quiz;

  constructor(private quizService: QuizService,
              private authService: AuthenticationService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    const userDetails = this.authService.getUserDetails();
    const id = +this.route.snapshot.paramMap.get('id');
    this.quizService.getQuiz(id).subscribe((quiz: Quiz) => this.quiz = quiz);
  }

}
