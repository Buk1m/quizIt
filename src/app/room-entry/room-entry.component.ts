import {Component, Input, OnInit} from '@angular/core';
import {Room} from '../model/room';
import {RoomService} from '../room.service';

@Component({
  selector: 'app-room-entry',
  templateUrl: './room-entry.component.html',
  styleUrls: ['./room-entry.component.css']
})
export class RoomEntryComponent implements OnInit {

  @Input()
  room: Room;

  constructor(private rs: RoomService) {
  }

  ngOnInit() {
  }

  onJoin(roomId: number) {
    this.rs.joinRoom(roomId).subscribe(/* TODO move to details view*/);
  }
}
