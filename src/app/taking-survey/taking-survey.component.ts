import { Component, OnInit } from '@angular/core';
import { AnswerService } from '../answer/answer-service';
import { QuestionService } from '../question/question.service';
import { takingSurveyModel } from './taking-survey-model';
import { TakingSurveyService } from './taking-survey.service';


@Component({
  selector: 'app-taking-survey',
  templateUrl: './taking-survey.component.html',
  styleUrls: ['./taking-survey.component.scss']
})
export class TakingSurveyComponent implements OnInit {

  notValid:boolean=true;
  questions:any[];
  answers:any[];
  count:number=0;
  quizResults = new Map<string, string>();
  quizResultsQuestion:string='';
  quizResultsAnswer:string='';
  surveyHashCode:string;
  theResults:takingSurveyModel={
    id: 0,
    results: '',
    userLogin: undefined,
    surveyUniqueCode: undefined,
    amountOfPoints: 0,
    maxAmountOfPoints: 0

  }

  constructor(private questionService:QuestionService,
    private answerService:AnswerService,
    private takingSurveyService: TakingSurveyService,
  ) {

  }

  ngOnInit(): void {
    this.getQuestions();
    this.theResults.amountOfPoints=0;
    this.theResults.userLogin=sessionStorage.getItem('user');

  }

  radioChangeHandler(event:any){
    this.quizResults.set(event.target.value,event.target.id)
    this.quizResults.size==this.count?this.notValid=false:this.notValid=true;
  //  this.theResults.answerQuestionString+='|',event.target.value,':'+event.target.id,'|';
    this.theResults.results+=`,${event.target.value}:${event.target.id},`;
  }

    getQuestions(){
    this.questionService.getQuestions().subscribe((q) =>{
      this.questions = q.questionList;
      for(let q of this.questions){
        this.theResults.surveyUniqueCode = q.survey.hashCode;
        this.answerService.getAnswers(q.id).subscribe((a:any[]) =>{
           this.answers = a;
           this.count++;
          });}
    });
  }


  mainSubmit(){
        this.takingSurveyService.sendSurveyResults(this.theResults);
      }

}


