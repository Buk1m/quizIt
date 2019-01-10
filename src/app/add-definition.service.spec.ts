import { TestBed } from '@angular/core/testing';

import { AddDefinitionService } from './add-definition.service';

describe('AddDefinitionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddDefinitionService = TestBed.get(AddDefinitionService);
    expect(service).toBeTruthy();
  });
});
