import { Component, OnInit } from '@angular/core';

import { theQuestionDTO } from './question.model';
import { QuestionService } from './question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})

export class QuestionComponent implements OnInit {

questions:any[]=[];

  constructor(private qeustionService:QuestionService) { }

  ngOnInit(): void {
    this.getQeustions();
  }


  getQeustions():void{
    this.qeustionService.getQuestions().subscribe((q) =>{
      this.questions = q.questionList;
      console.log(q);
    });
    }

    deleteQeustion(id:number):void{
      this.qeustionService.deleteQuestion(id).subscribe(()=>{
        console.log(`Item # ${id} is deleted!`);

        this.getQeustions();
        this.getQeustions(); this.getQeustions(); this.getQeustions();

      });
    }
    deleteQuestions():void{
      this.qeustionService.deleteQeustions().subscribe(()=>{
        console.log(`All answers were deleted!!`);
        this.getQeustions();
        this.getQeustions();
      });
    }
}
