import { Component, OnInit } from '@angular/core';
import { Answer } from '../model/answer';

@Component({
  selector: 'app-generate-quiz',
  templateUrl: './generate-quiz.component.html',
  styleUrls: ['./generate-quiz.component.css']
})
export class GenerateQuizComponent implements OnInit {
  question: string;
  public answers: Answer[] = [
    {content: "", isCorrect: false},
    {content: "", isCorrect: false}
  ]
  constructor() { 
    console.log(this.answers);
  }

  ngOnInit() {
  }

  onClick() {
    this.answers.push({content: "", isCorrect: false});
    console.log(this.answers);
  }
}
