import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuizzesPaginationService {

  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getPages(indexFrom: number, indexTo: number): Observable<any> {
    return this.http.get(this.apiUrl + 'quizzes-pages/' + indexFrom + '/' + indexTo);
  }

}
