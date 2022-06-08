import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionService } from 'src/app/service/question.service';
import { SurveyService } from 'src/app/service/survey.service';



export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-taking-survey-form',
  templateUrl: './taking-survey-form.component.html',
  styleUrls: ['./taking-survey-form.component.scss']
})
export class TakingSurveyFormComponent implements OnInit {

  constructor(private surveySurvice:SurveyService, private questionSurvice:QuestionService ) { }

  surveys:any[];
  questions:any[];

  ngOnInit(): void {
    this.getSurveys();


  }


    getSurveys(): void {
      this.surveySurvice.getSurveys().subscribe((s) => {
        this.surveys = s.surveyList;
        console.log(this.surveys);
      });
    }

    getOneSurvey(uniqueCode){
      this.surveySurvice.getSurveys().subscribe((s) => {
        this.surveys = s.surveyList;
        console.log(this.surveys);
      });
    }

}
