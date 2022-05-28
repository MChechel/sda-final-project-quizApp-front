import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { theQuestion, theQuestionDTO } from './question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  baseUrl:string = 'http://localhost:8080/api/questions'
  constructor(private http:HttpClient) {  }


  getQuestions():Observable<any>{
    return this.http.get(`${this.baseUrl}/`)
  }

  getQuestion(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  putQuestion(question:theQuestion):Observable<any>{
    return this.http.put(`${this.baseUrl}/${question.id}`,question);
  }

  postQuestion(question:theQuestion):Observable<any>{
    return this.http.post(`${this.baseUrl}`,question);
  }

  deleteQuestion(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`)
  }

  deleteQeustions():Observable<any>{
    return this.http.delete(`${this.baseUrl}`)
  }


}
