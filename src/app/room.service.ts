import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Room} from './model/room';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';
import {Quiz} from './model/quiz';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient, private auth: AuthenticationService) {
  }

  getAllQuizzes(): Observable<Quiz[]> {
    return this.http.get('http://quizit.azurewebsites.net/api/quizs',
      {headers: {Authorization: `Bearer ${this.auth.getToken()}`}})
      .pipe(map((res: Quiz[]) => {
        return res;
      }));
  }

  getRoomDetails(id: number): Observable<Room> {
    return this.http.get('http://quizit.azurewebsites.net/api/rooms/' + id,
      {headers: {Authorization: `Bearer ${this.auth.getToken()}`}})
      .pipe(map((res: Room) => {
        return res;
      }));
  }

  createRoom(room: Room): Observable<any> {
    return this.http.post<Room>('http://quizit.azurewebsites.net/api/rooms/addroom',
      room, {headers: {Authorization: `Bearer ${this.auth.getToken()}`}});
  }
}
