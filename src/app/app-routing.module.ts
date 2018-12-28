import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './user/login/login.component';
import {CreateQuizComponent} from './quiz/quiz-create/create-quiz.component';
import {RegisterComponent} from './user/register/register.component';
import {CreateRoomComponent} from './room/room-create/create-room.component';
import {QuestionAnswersComponent} from './quiz/quiz-questions/question-answers/question-answers.component';
import {RoomListComponent} from './room/room-list/room-list.component';
import {QuizQuestionsComponent} from './quiz/quiz-questions/quiz-questions.component';
import {AuthenticationGuardService} from './services/authentication-guard.service';
import {RoomComponent} from './room/room-view/room.component';
import {ProfileComponent} from './user/profile/profile.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthenticationGuardService]
  },
  {
    path: 'room/create',
    component: CreateRoomComponent,
    canActivate: [AuthenticationGuardService]
  },
  {
    path: 'add-quiz',
    component: CreateQuizComponent,
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
