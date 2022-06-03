import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  debounceTime} from 'rxjs/operators';
import { theQuestionDTO } from './question.model';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})

export class QuestionComponent implements OnInit {

questions:any[]=[];
currentSurveyId:number = 150;

  constructor(private qeustionService:QuestionService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getQeustions();
    this.route.queryParams.subscribe(queryParams =>{
      if(queryParams['surveyId']){
        console.log('the survey id is '+queryParams['surveyId']);
        this.currentSurveyId = queryParams['surveyId'];
      }
    })
  }


  getQeustions():void{
    debounceTime(500);
    this.qeustionService.getQuestions().subscribe((q) =>{
      this.questions = q.questionList;

      console.log(q);
    });
    }



    deleteQeustion(id:number):void{
      this.qeustionService.deleteQuestion(id).subscribe(()=>{
        console.log(`Item # ${id} is deleted!`);
        this.getQeustions();
      });
      debounceTime(250);
      this.getQeustions();


    }
    deleteQuestions():void{
      this.qeustionService.deleteQeustions().subscribe(()=>{
        console.log(`All answers were deleted!!`);
        this.getQeustions();
      });
      debounceTime(250);
      this.getQeustions();
    }


}
