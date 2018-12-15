import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css']
})
export class CreateRoomComponent implements OnInit {

  roomForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.roomForm = fb.group(
      {
        roomName: ['', Validators.required],
        usersNumber: ['', [Validators.required, Validators.min(2), Validators.max(4)]]
      }
    );
  }

  ngOnInit() {
  }

  createRoom() {
    console.log('zbududowalem ci dom na piasku');
  }
}
