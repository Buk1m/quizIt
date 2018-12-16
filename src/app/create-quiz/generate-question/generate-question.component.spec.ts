import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateQuestionComponent } from './generate-question.component';

describe('GenerateQuestionComponent', () => {
  let component: GenerateQuestionComponent;
  let fixture: ComponentFixture<GenerateQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
