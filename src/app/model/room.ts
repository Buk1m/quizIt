import {User} from './user';

export class Room {
  name: string;
  userId: string;
  quizId: number;
  roomId: number;
  roomUsers: User[];
  maxUsersCount: number;
}
