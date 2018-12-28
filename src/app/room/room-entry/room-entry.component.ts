import {Component, Input, OnInit} from '@angular/core';
import {Room} from '../../model/room';
import {RoomService} from '../../services/room.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-room-entry',
  templateUrl: './room-entry.component.html',
  styleUrls: ['./room-entry.component.css']
})
export class RoomEntryComponent implements OnInit {

  @Input()
  room: Room;

  constructor(private rs: RoomService, private route: Router) {
  }

  ngOnInit() {
  }

  onJoin(roomId: number) {
    this.rs.joinRoom(roomId).subscribe(() => {
      this.route.navigateByUrl('room/' + roomId);
    });
  }
}
