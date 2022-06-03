import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SurveyService } from '../service/survey.service';
import {  debounceTime} from 'rxjs/operators';
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  public title = "Survey"


  surveys: any[] = [];

  constructor(private surveyService: SurveyService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getSurveys();
  }

  getSurveys(): void {
    this.surveyService.getSurveys().subscribe((s) => {
      debounceTime(250);
      this.surveys = s.surveyList;
      console.log(s);
    });
  }

  // TODO: this is not working
  deleteSurvey(id: number): void {
    this.surveyService.deleteSurvey(id).subscribe(() => {
      console.log(`Item # ${id} is deleted!`);

      this.getSurveys();
    });
  }

}

