import {Injectable} from '@angular/core';
import {Quiz} from '../model/quiz';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient,
              private authService: AuthenticationService) {
  }

  postQuiz(quiz: Quiz) {
    const url = this.apiUrl;
    return this.http.post<Quiz>(
      url,
      quiz,
      {headers: {Authorization: `Bearer ${this.authService.getToken()}`}}
    )
      .pipe(map((res) => {
        console.log(res);
        return res;
      }));
  }

  getQuizDetails(quizId) {
    return this.http.get(this.apiUrl + 'quizs/' + quizId,
      {headers: {Authorization: `Bearer ${this.authService.getToken()}`}})
      .pipe(map((res: Quiz) => {
      return res;
    }));
  }
}
