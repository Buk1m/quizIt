import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionAnswersComponent } from './question-answers.component';

describe('QuestionAnswersComponent', () => {
  let component: QuestionAnswersComponent;
  let fixture: ComponentFixture<QuestionAnswersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionAnswersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
