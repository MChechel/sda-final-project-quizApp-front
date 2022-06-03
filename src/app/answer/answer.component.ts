import { HttpSentEvent } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AnswerService } from './answer-service';
import { theAnswer } from './answer.model';
import {  debounceTime} from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faBackwardStep } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss'],

})
export class AnswerComponent implements OnInit {
  faCheck = faCheck;
  faXmark = faXmark;
  faTrashCan = faTrashCan;
  faPenToSquare = faPenToSquare;
  faBackwardStep = faBackwardStep;

  answerSetIsNotComplite:boolean=true;
  correctAnswersCount:number=0;
answers:any[] = [];
qId:number;
  constructor(private httpService:AnswerService, private route:ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.qId = params['questionId'];
      //console.log(params['questionId'])
    })
  this.getAnswers(this.qId);


  }

getAnswers(qId:number):void{
  this.httpService.getAnswers(qId).subscribe((a:any[]) =>{
    debounceTime(500);
    this.answers = a;
    for(var currentAsnwer of this.answers){
      if(currentAsnwer.correct){
        this.correctAnswersCount+=1;
      }
      if(this.correctAnswersCount>1){
          break;
      }
    }
    if(this.correctAnswersCount==1 && this.answers.length>1){
      this.answerSetIsNotComplite=false;
  }
    console.log(this.correctAnswersCount);
  });
}

deleteAnswer(qId:number,id:number):void{
  this.httpService.deleteAnswer(qId,id).subscribe(()=>{
    console.log(`Item # ${id} is deleted!`);
    this.getAnswers(this.qId);
  });
}
deleteAnswers(qId:number):void{
  this.httpService.deleteAnswers(qId).subscribe(()=>{
    console.log(`All answers were deleted!!`);
    this.getAnswers(this.qId);
  });
}

}
