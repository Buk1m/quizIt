import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RoomService} from '../../services/room.service';
import {Room} from '../../model/room';
import {Quiz} from '../../model/quiz';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {appear} from '../../animations';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.css'],
  animations: [appear]
})
export class CreateRoomComponent implements OnInit {

  roomForm: FormGroup;
  quizList: Quiz[];

  constructor(
    private fb: FormBuilder,
    private roomService: RoomService,
    private router: Router,
    private auth: AuthenticationService) {
    this.roomForm = fb.group(
      {
        roomName: ['', Validators.required],
        usersNumber: ['', [Validators.required, Validators.min(2), Validators.max(4)]],
        chosenQuiz: ['', [Validators.required]],
      }
    );
  }

  createRoom() {
    const room = new Room;
    room.name = this.roomForm.controls['roomName'].value;
    room.maxUsersCount = this.roomForm.controls['usersNumber'].value;
    room.quizId = this.roomForm.controls['chosenQuiz'].value;
    room.userId = this.auth.getUserDetails().nameid;
    console.log(room);
    this.roomService.createRoom(room).subscribe(() => this.router.navigateByUrl('/')
    );
  }

  ngOnInit(): void {
    this.roomService.getAllQuizzes().subscribe((quizzes => {
      this.quizList = quizzes;
    }));
  }
}
