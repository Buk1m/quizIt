import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {GenerateQuizComponent} from './create-quiz/generate-quiz/generate-quiz.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {SidebarComponent} from './sidebar/sidebar.component';
import {TopbarComponent} from './topbar/topbar.component';
import {LoginComponent} from './authorization/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RegisterComponent} from './authorization/register/register.component';
import {CreateRoomComponent} from './create-room/create-room.component';
import {GenerateQuestionComponent} from './create-quiz/generate-question/generate-question.component';
import { AddDefinitionComponent } from './add-definition/add-definition.component';
import { QuestionAnswersComponent } from './quiz-questions/question-answers/question-answers.component';
import { AnswerComponent } from './quiz-questions/question-answers/answer/answer.component';
import { QuizQuestionsComponent } from './quiz-questions/quiz-questions.component';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomEntryComponent } from './room-entry/room-entry.component';
import { RoomComponent } from './room/room.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    GenerateQuizComponent,
    GenerateQuestionComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
