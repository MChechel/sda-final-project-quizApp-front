import { HttpSentEvent } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AnswerService } from './answer-service';
import { theAnswer } from './answer.model';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {

answers:any[] = [];

  constructor(private httpService:AnswerService) { }


  ngOnInit(): void {
  this.getAnswers();


  }

getAnswers():void{
  this.httpService.getAnswers().subscribe((a:any[]) =>{
    this.answers = a;
  });
}



deleteAnswer(id:number):void{
  this.httpService.deleteAnswer(id).subscribe(()=>{
    console.log(`Item # ${id} is deleted!`);
    this.getAnswers();
  });



}

deleteAnswers():void{
  this.httpService.deleteAnswers().subscribe(()=>{
    console.log(`All answers were deleted!!`);
    this.getAnswers();
  });
}



}
