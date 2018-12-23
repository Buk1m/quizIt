import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './authorization/login/login.component';
import {GenerateQuizComponent} from './create-quiz/generate-quiz/generate-quiz.component';
import {RegisterComponent} from './authorization/register/register.component';
import {CreateRoomComponent} from './create-room/create-room.component';
import {QuestionAnswersComponent} from './quiz-questions/question-answers/question-answers.component';
import {RoomListComponent} from './room-list/room-list.component';
import {QuizQuestionsComponent} from './quiz-questions/quiz-questions.component';
import {AuthenticationGuardService} from './authentication-guard.service';
import {RoomComponent} from './room/room.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {
    path: 'room/create',
    component: CreateRoomComponent,
    canActivate: [AuthenticationGuardService]
  },
  {
    path: 'add-quiz',
    component: GenerateQuizComponent,
    canActivate: [AuthenticationGuardService]
  },
  {
    path: 'question',
    component: QuestionAnswersComponent,
    canActivate: [AuthenticationGuardService]
  },
  {
    path: 'rooms',
    component: RoomListComponent,
    canActivate: [AuthenticationGuardService]
  },
  {
    path: 'quiz/:id',
    component: QuizQuestionsComponent,
    canActivate: [AuthenticationGuardService]
  },
  {path: 'room/:id', component: RoomComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
