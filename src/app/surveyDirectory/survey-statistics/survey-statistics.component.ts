import { Component, OnInit } from '@angular/core';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';
import { TakingSurveyService } from 'src/app/service/taking-survey.service';
@Component({
  selector: 'app-survey-statistics',
  templateUrl: './survey-statistics.component.html',
  styleUrls: ['./survey-statistics.component.scss']
})
export class SurveyStatisticsComponent implements OnInit {

  constructor(private takinsSurveyService:TakingSurveyService) { }
  faChartPie=faChartPie;
  resultsList:any[];

  ngOnInit(): void {
    this.getSurveyStatistics();
  }

  getSurveyStatistics(){
    this.takinsSurveyService.getResultsForUser().subscribe((r:any) =>{
      console.log(r)
      this.resultsList = r.resultsList;
      console.log(this.resultsList)
     });}


}
