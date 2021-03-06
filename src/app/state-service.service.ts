import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateServiceService {

  baseUrl:string = 'http://localhost:8080/api/questions'
  constructor(private http:HttpClient) { }

  getAnswers():Observable<any>{
    return this.http.get(`${this.baseUrl}/5/answers`)
  }

  getAnswer(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/5/answers/${id}`)
  }

  deleteAnswer(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/5/answers/${id}`)
  }

  deleteAnswers():Observable<any>{
    return this.http.delete(`${this.baseUrl}/5/answers`)
  }

}
