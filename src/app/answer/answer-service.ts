import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { theAnswer } from './answer.model';


@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  qId:number = 5;

  baseUrl:string = `http://localhost:8080/api/questions/`

  constructor(private http:HttpClient) {


   }


  getAnswers(qId:number):Observable<any>{

    return this.http.get(`${this.baseUrl}/${qId}/answers`)
  }

  getAnswer(qId:number,id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/${qId}/answers/${id}`)
  }

  putAnswer(qId:number,answer:theAnswer):Observable<any>{
    return this.http.put(`${this.baseUrl}/${qId}/answers/${answer.id}`,answer);
  }

  postAnswer(qId:number,answer:theAnswer):Observable<any>{
    return this.http.post(`${this.baseUrl}/${qId}/answers`,answer);
  }

  deleteAnswer(qId:number,id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${qId}/answers/${id}`)
  }

  deleteAnswers(qId:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${qId}/answers`)
  }

}
