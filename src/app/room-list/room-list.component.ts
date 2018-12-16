import {Component, OnInit} from '@angular/core';
import {Room} from '../model/room';
import {RoomService} from '../room.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  rooms: Room[];

  constructor(private rs: RoomService) {
  }

  ngOnInit() {
    this.rs.getAllRooms().subscribe(rooms => {
      this.rooms = rooms;
      console.log(this.rooms);
    });
  }

}
