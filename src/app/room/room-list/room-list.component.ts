import {Component, OnInit} from '@angular/core';
import {Room} from '../../model/room';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {RoomService} from '../../services/room.service';
import {appear, fade} from '../../animations';

interface IServerResponse {
  total: number;
  rooms: Room[];
}

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css'],
  animations: [appear, fade],
})
export class RoomListComponent implements OnInit {

  rooms: Observable<Room[]>;
  p = 1;
  total: number;
  loading: boolean;

  constructor(private http: HttpClient, private rs: RoomService) {
  }

  ngOnInit() {
    this.getPage(1);
  }

  getPage(page: number) {
    this.loading = true;
    this.rooms = this.serverCall(page).pipe(
      tap(res => {
        this.total = res.total;
        this.p = page;
        this.loading = false;
      }),
      map(res => {
        console.log(res.rooms);
        console.log(this.loading);
        return res.rooms;
      })
    );
  }

  // TODO: move to service
  serverCall(page: number): Observable<IServerResponse> {
    const start = (page) * 5;

    // TODO: remove mock after server implementation
    return this.rs.getAllRooms().pipe(map((res) => {
      return {total: 10, rooms: res};
    }));
    // return this.http.get('http://quizit.azurewebsites.net/api/rooms/page/' + start + '/' + 5).pipe(
    //   map((res: IServerResponse) => res));
  }
}
