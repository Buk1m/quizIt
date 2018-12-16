import { Injectable } from '@angular/core';
import {Quiz} from './model/quiz';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  baseUrl = 'http://quizit.azurewebsites.net/api/quizs';
  constructor(private http: HttpClient,
              private authService: AuthenticationService) { }

  postQuiz(quiz: Quiz) {
    let url = this.baseUrl;
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


  getQuiz(id: number) {
    let url = this.baseUrl + '/' + id;
    return this.http.get<Quiz>(url, {headers: {Authorization: `Bearer ${this.authService.getToken()}`}});
  }
}
