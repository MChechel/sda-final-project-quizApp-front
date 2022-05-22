import { HttpSentEvent } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StateServiceService } from '../state-service.service';
import { theAnswer } from './answer.model';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {

answers:theAnswer[] = [];

  constructor(private httpStateService:StateServiceService) { }


  ngOnInit(): void {
  this.getAnswers();
  }

getAnswers():void{
  this.httpStateService.getAnswers().subscribe((a:any[]) =>{
    this.answers = a;
  });
  console.log(this.answers);
}


}
