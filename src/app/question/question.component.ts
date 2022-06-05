import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  debounceTime} from 'rxjs/operators';
import { theQuestionDTO } from './question.model';
import { QuestionService } from './question.service';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faBackwardStep } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})

export class QuestionComponent implements OnInit {

questions:any[]=[];
currentSurveyId:number = 150;
faCheck = faCheck;
faXmark = faXmark;
faTrashCan = faTrashCan;
faPenToSquare = faPenToSquare;
faBackwardStep = faBackwardStep;
faArrowRight = faArrowRight;


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
