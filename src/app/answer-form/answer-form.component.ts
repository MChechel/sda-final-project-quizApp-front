import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnswerService } from '../answer/answer-service';
import { theAnswer } from '../answer/answer.model';


@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.scss']
})
export class AnswerFormComponent implements OnInit {
  form:FormGroup = new FormGroup({
    id: new FormControl('100'),
    content: new FormControl('Please, delete this text and insert the answer option you want to add. And initially the answer will be chosen incorrect option'),
    correct: new FormControl(false)

  });
isEditing:boolean = false;
qId:number;
ANSWER_FORM= {
  id:null,
  content:null,
  correct:false
}
constructor(private service:AnswerService, private route:ActivatedRoute, private formBuilder:FormBuilder) { }

ngOnInit(): void {
  console.log('the form is initiated!')
  //this.createForm;
  this.route.params.subscribe(params =>{
    this.qId = params['questionId'];
     if(params['id']){
      this.isEditing = true;
             this.service.getAnswer(this.qId,params['id']).subscribe((a:theAnswer)=>{
               this.form.setValue({
                 id:a.id,
                 content:a.content,
                 correct:a.correct})
             //  this.form.setValue({a })
              }
     )}
            })
      }



  createForm():void{
   // this.form = this.formBuilder.group({...this.ANSWER_FORM})
 //  this.form =

}

onSubmit():void{
  console.log(this.qId);
  if(this.isEditing){
    this.service.putAnswer(this.qId,this.form.value).subscribe(()=>{
      console.log(this.form.value);
      this.form.reset
    })
  }else{
      this.service.postAnswer(this.qId,this.form.value).subscribe(()=>{
        console.log(this.form.value);
        this.form.reset
      })

  }

  }
}
