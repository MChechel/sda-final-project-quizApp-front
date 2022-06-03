import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question/question.service';
import { SurveyService } from '../service/survey.service';


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

  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 2, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];
  constructor(private surveySurvice:SurveyService, private questionSurvice:QuestionService ) { }

  surveys:any[];
  questions:any[];

  ngOnInit(): void {
    this.getSurveys();
    this.getQeustions();


  }

  getQeustions():void{
    this.questionSurvice.getQuestions().subscribe((q) =>{
      this.questions = q.questionList;
      console.log(q);
    });
    }

    getSurveys(): void {
      this.surveySurvice.getSurveys().subscribe((s) => {
        this.surveys = s.surveyList;
        console.log(s);
      });
    }

}
