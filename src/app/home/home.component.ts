import { Component, OnInit } from '@angular/core';
import { TakingSurveyService } from '../service/taking-survey.service';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faChartPie=faChartPie;
  resultsList:any[];


  constructor(private takinsSurveyService:TakingSurveyService) {
  }

  ngOnInit(): void {
    this.getPersonalStatistics();
  }


  getPersonalStatistics(){
    this.takinsSurveyService.getResultsForUser().subscribe((r:any) =>{
      console.log(r)
      this.resultsList = r.resultsList;
      console.log(this.resultsList)
     });}


}
