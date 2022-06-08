import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { theQuestion, theQuestionDTO } from '../questionDirectory/question/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  currentSurveyId:number;
  baseUrl:string = 'http://localhost:8080/api/questions'

  constructor(private http:HttpClient, private route:ActivatedRoute) {

  }


  getQuestions():Observable<any>{
    let qp = new HttpParams();
    this.route.queryParams.subscribe(queryParams =>{
      if(queryParams['surveyId']){
        console.log('the survey id is '+queryParams['surveyId']);
        qp = qp.append("surveyId",queryParams['surveyId']);
      }
    })
    return this.http.get(`${this.baseUrl}/`,{params:qp})
  }

  getQuestion(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  putQuestion(question:theQuestion):Observable<any>{
    let qp = new HttpParams();
    this.route.queryParams.subscribe(queryParams =>{
      if(queryParams['surveyId']){
        console.log('the survey id is '+queryParams['surveyId']);
        qp = qp.append("surveyId",queryParams['surveyId']);
      }
    })
    return this.http.put(`${this.baseUrl}/${question.id}`,question,{params:qp});
  }

  postQuestion(question:theQuestion):Observable<any>{
   /*
   */

   let qp = new HttpParams();
   this.route.queryParams.subscribe(queryParams =>{
     if(queryParams['surveyId']){
       console.log('the survey id is '+queryParams['surveyId']);
       qp = qp.append("surveyId",queryParams['surveyId']);
     }
   })

   return this.http.post(`${this.baseUrl}`,question,{params:qp});
  }

  deleteQuestion(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`)
  }

  deleteQeustions():Observable<any>{
    let qp = new HttpParams();
    this.route.queryParams.subscribe(queryParams =>{
      if(queryParams['surveyId']){
        console.log('the survey id is '+queryParams['surveyId']);
        qp = qp.append("surveyId",queryParams['surveyId']);
      }
    })
    return this.http.delete(`${this.baseUrl}`,{params:qp})
  }


}
