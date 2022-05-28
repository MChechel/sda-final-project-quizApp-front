import { HttpSentEvent } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AnswerService } from './answer-service';
import { theAnswer } from './answer.model';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {

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
    this.answers = a;
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
