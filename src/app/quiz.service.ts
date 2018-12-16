import { Injectable } from '@angular/core';
import {Quiz} from './model/quiz';
import {HttpClient} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  baseUrl = 'http://quizit.azurewebsites.net/';
  constructor(private http: HttpClient,
              private authService: AuthenticationService) { }

  postQuiz(quiz: Quiz) {
    let url = this.baseUrl + 'api/quizs';
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

  
}