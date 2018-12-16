import {User} from './user';

export class Room {
  Name: string;
  UserId: string;
  QuizId: number;
  RoomId: number;
  Users: User[];
  MaxUsersCount: number;
}
