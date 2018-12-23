import {Component, OnInit} from '@angular/core';
import {createQuestion} from '../../model/question';
import {createQuiz, Quiz} from '../../model/quiz';
import {AuthenticationService} from '../../services/authentication.service';
import {QuizService} from '../../services/quiz.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.css'],
})
export class CreateQuizComponent implements OnInit {
  quiz: Quiz = createQuiz();

  ngOnInit() {
    this.quiz = createQuiz();
  }

  constructor(private  authService: AuthenticationService,
              private quizService: QuizService,
              private router: Router) {
  }

  addQuestion() {
    this.quiz.questions.push(createQuestion());
  }

  createQuiz() {
    const userDetails = this.authService.getUserDetails();
    this.quiz.authorId = userDetails.nameid;
    this.quizService.postQuiz(this.quiz)
      .subscribe(() => {
          this.router.navigateByUrl('/');
        }, (err) => {
          alert('Something went wrong');
          console.log(err);
        }
      );
  }

  togglePrivate() {
    this.quiz.access = !this.quiz.access;
  }
}
