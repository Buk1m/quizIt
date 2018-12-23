import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {CreateQuizComponent} from './quiz/quiz-create/create-quiz.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {SidebarComponent} from './navigation/sidebar/sidebar.component';
import {TopbarComponent} from './navigation/topbar/topbar.component';
import {LoginComponent} from './user/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegisterComponent} from './user/register/register.component';
import {CreateRoomComponent} from './room/room-create/create-room.component';
import {CreateQuestionComponent} from './quiz/quiz-questions/question-create/create-question.component';
import {AddDefinitionComponent} from './add-definition/add-definition.component';
import {QuestionAnswersComponent} from './quiz/quiz-questions/question-answers/question-answers.component';
import {AnswerComponent} from './quiz/quiz-questions/question-answers/answer/answer.component';
import {QuizQuestionsComponent} from './quiz/quiz-questions/quiz-questions.component';
import {RoomListComponent} from './room/room-list/room-list.component';
import {RoomEntryComponent} from './room/room-entry/room-entry.component';
import {RoomComponent} from './room/room-view/room.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ProfileComponent} from './user/profile/profile.component';
import {PagingComponent} from './room/room-list/paging/paging.component';
import {NgxPaginationModule, PaginationService} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    CreateQuizComponent,
    CreateQuestionComponent,
    HomeComponent,
    SidebarComponent,
    TopbarComponent,
    LoginComponent,
    RegisterComponent,
    CreateRoomComponent,
    AddDefinitionComponent,
    QuestionAnswersComponent,
    AnswerComponent,
    QuizQuestionsComponent,
    RoomListComponent,
    RoomEntryComponent,
    RoomComponent,
    ProfileComponent,
    PagingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
  ],
  providers: [PaginationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
