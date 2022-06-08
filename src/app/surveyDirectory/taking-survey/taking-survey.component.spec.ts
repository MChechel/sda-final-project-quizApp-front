import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TakingSurveyComponent } from './taking-survey.component';

describe('TakingSurveyComponent', () => {
  let component: TakingSurveyComponent;
  let fixture: ComponentFixture<TakingSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TakingSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TakingSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
