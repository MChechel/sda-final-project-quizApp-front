import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { theAnswer } from './answer.model';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  baseUrl:string = 'http://localhost:8080/api/questions'
  constructor(private http:HttpClient) { }

  getAnswers():Observable<any>{
    return this.http.get(`${this.baseUrl}/5/answers`)
  }

  getAnswer(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/5/answers/${id}`)
  }

  putAnswer(answer:theAnswer):Observable<any>{
    return this.http.put(`${this.baseUrl}/5/answers/${answer.id}`,answer);
  }

  postAnswer(answer:theAnswer):Observable<any>{
    return this.http.post(`${this.baseUrl}/5/answers`,answer);
  }


  deleteAnswer(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/5/answers/${id}`)
  }

  deleteAnswers():Observable<any>{
    return this.http.delete(`${this.baseUrl}/5/answers`)
  }

}
