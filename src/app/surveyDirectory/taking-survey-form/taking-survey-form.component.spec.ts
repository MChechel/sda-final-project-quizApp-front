import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakingSurveyFormComponent } from './taking-survey-form.component';

describe('TakingSurveyFormComponent', () => {
  let component: TakingSurveyFormComponent;
  let fixture: ComponentFixture<TakingSurveyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakingSurveyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakingSurveyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
