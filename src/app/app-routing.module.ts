import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import { GenerateQuizComponent } from './create-quiz/generate-quiz/generate-quiz.component';
import {RegisterComponent} from './register/register.component';
import {CreateRoomComponent} from './create-room/create-room.component';
import {QuestionAnswersComponent} from './quiz-questions/question-answers/question-answers.component';
import {RoomListComponent} from './room-list/room-list.component';
import {QuizQuestionsComponent} from './quiz-questions/quiz-questions.component';


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'room/create', component: CreateRoomComponent },
  {path: 'add-quiz', component: GenerateQuizComponent},
  {path: 'question', component: QuestionAnswersComponent},
  {path: 'rooms', component: RoomListComponent},
  {path: 'quiz/:id', component: QuizQuestionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
