import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SurveyService } from '../service/survey.service';
import {  debounceTime} from 'rxjs/operators';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {

  faChartPie=faChartPie;
faTrashCan = faTrashCan;
faPenToSquare = faPenToSquare;
faArrowRight = faArrowRight;

  public title = "Survey"


  surveys: any[] = [];

  constructor(private surveyService: SurveyService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getSurveys();
  }

  getSurveys(): void {
    this.surveyService.getMySurveys().subscribe((s) => {
      debounceTime(250);
      this.surveys = s.surveyList;
      console.log(s);
    });
  }

  deleteSurvey(id: number): void {
    this.surveyService.deleteSurvey(id).subscribe(() => {
      console.log(`Item # ${id} is deleted!`);
      this.getSurveys();
    });
  }

}

