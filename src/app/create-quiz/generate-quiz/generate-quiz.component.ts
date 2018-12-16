import {Component} from '@angular/core';
import {createQuestion} from '../../model/question';
import {createQuiz, Quiz} from '../../model/quiz';
import {AuthenticationService} from '../../authentication.service';
import {QuizService} from '../../quiz.service';

@Component({
  selector: 'app-generate-quiz',
  templateUrl: './generate-quiz.component.html',
  styleUrls: ['./generate-quiz.component.css'],
})
export class GenerateQuizComponent {
  quiz: Quiz = createQuiz();

  constructor(private  authService: AuthenticationService,
              private quizService: QuizService) {
  }

  addQuestion() {
    this.quiz.questions.push(createQuestion());
  }

  createQuiz() {
    let userDetails = this.authService.getUserDetails();
    this.quiz.authorId = userDetails._id;

    this.quizService.postQuiz(Quiz);
  }

  togglePrivate() {
    this.quiz.access = !this.quiz.access as number;
  }
}
