import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';
import {Quiz} from '../model/quiz';
import {map} from 'rxjs/operators';
import {Room} from '../model/room';

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

  getAllRooms(): Observable<Room[]> {
    return this.http.get('http://quizit.azurewebsites.net/api/rooms',
      {headers: {Authorization: `Bearer ${this.auth.getToken()}`}})
      .pipe(map((res: Room[]) => {
        console.log(res);
        return res;
      }));
  }

  joinRoom(roomId: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.auth.getToken()}`
      }),
    };
    const userId = this.auth.getUserDetails().nameid;
    return this.http.post('http://quizit.azurewebsites.net/api/rooms/adduser/' + roomId, userId,
      httpOptions);
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
