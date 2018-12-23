import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizzesPaginationService {

  constructor(private http: HttpClient) {
  }

  getPages(indexFrom: number, indexTo: number): Observable<any> {
    return this.http.get('api/quizzes-pages/' + indexFrom + '/' + indexTo);
  }

}
