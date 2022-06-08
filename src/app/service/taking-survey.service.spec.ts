import { TestBed } from '@angular/core/testing';

import { TakingSurveyService } from './taking-survey.service';

describe('TakingSurveyService', () => {
  let service: TakingSurveyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TakingSurveyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
