import {Component, OnInit} from '@angular/core';
import {HubConnection} from '@aspnet/signalr';
import * as signalR from '@aspnet/signalr';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';
import {Room} from '../model/room';
import {RoomService} from '../room.service';
import {Quiz} from '../model/quiz';
import {QuizService} from '../quiz.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  private _hubConnection: HubConnection | undefined;
  public async: any;
  message = '';
  messages: string[] = [];
  id: number;
  roomDetails: Room;
  quiz: Quiz;
  gameStarted: boolean;

  constructor(
    private root: ActivatedRoute,
    private auth: AuthenticationService,
    private rs: RoomService,
    private route: Router,
    private quizService: QuizService) {
  }

  public sendMessage(): void {
    const data = `User: ${this.auth.getUserDetails().unique_name} joined to room`;

    if (this._hubConnection) {
      this._hubConnection.invoke('JoinRoom', 'room' + this.id, data);
    }
    this.messages.push(data);
  }

  ngOnInit() {
    this.id = parseInt(this.root.snapshot.paramMap.get('id'), 10);
    this.rs.getRoomDetails(this.id).subscribe(res => {
      this.roomDetails = res;
    });

    this._hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('http://quizit.azurewebsites.net/hub/chat', {skipNegotiation: true, transport: signalR.HttpTransportType.WebSockets})
      .configureLogging(signalR.LogLevel.Information)
      .build();

    this._hubConnection.start().catch(err => console.error(err.toString()));

    this._hubConnection.on('joinedMethod', (data: any) => {
      const received = `Received: ${data}`;
      this.messages.push(received);
    });
  }

  beginGame() {
    this.quizService.getQuizDetails(this.roomDetails.quizId).subscribe((res) => {
      this.quiz = res;
      debugger
      this.gameStarted = true;
    });
  }
}
