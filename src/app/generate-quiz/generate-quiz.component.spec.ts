import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateQuizComponent } from './generate-quiz.component';

describe('GenerateQuizComponent', () => {
  let component: GenerateQuizComponent;
  let fixture: ComponentFixture<GenerateQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
