import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/service/question.service';
import { theQuestion } from '../question/question.model';


@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {
  form:FormGroup = new FormGroup({
    id: new FormControl('999'),
    content: new FormControl('Please, delete this text and insert your question here!'),
    points: new FormControl(0)

  });
  isEditing:boolean = false;

  QUSTION_FORM={
    id:null,
    content:null,
    points:null
  }
  currentSurveyId:number = 150;
  constructor(private service:QuestionService,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(queryParams =>{
      if(queryParams['surveyId']){
        console.log('the survey id is '+queryParams['surveyId']);
        this.currentSurveyId = queryParams['surveyId'];
      }
    })
    console.log('the form is initiated!')
    //this.createForm;1
    this.route.params.subscribe(params =>{
       if(params['id']){
        this.isEditing = true;
               this.service.getQuestion(params['id']).subscribe((q:theQuestion)=>{
                 console.log(q);
                 this.form.setValue({
                   id:q.id,
                   content:q.content,
                   points:q.points})
                }
       )}
              })

  }

  onSubmit():void{
    if(this.isEditing){
      this.service.putQuestion(this.form.value).subscribe(()=>{
        console.log(this.form.value);
        this.form.reset
      })
    }else{
      this.service.postQuestion(this.form.value).subscribe(()=>{
        console.log(this.form.value);
        this.form.reset
      })
    }

    }

}
