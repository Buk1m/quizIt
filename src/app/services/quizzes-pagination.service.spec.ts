import { TestBed, inject } from '@angular/core/testing';

import { QuizzesPaginationService } from './quizzes-pagination.service';

describe('QuizzesPaginationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuizzesPaginationService]
    });
  });

  it('should be created', inject([QuizzesPaginationService], (service: QuizzesPaginationService) => {
    expect(service).toBeTruthy();
  }));
});
