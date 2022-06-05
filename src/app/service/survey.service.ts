import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import {Observable} from "rxjs";
import { Survey } from '../survey/survey.model';
import { ActivatedRoute } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  private baseUrl = 'http://localhost:8080/survey'


  constructor(private http: HttpClient,private route:ActivatedRoute) {
  }


  getSurveys(): Observable<any> {
    console.log(this.http.get(`${this.baseUrl}/`))
    return this.http.get(`${this.baseUrl}/`)
  }
/**/
  getMySurveys(): Observable<any> {
    let qp = new HttpParams();
    qp = qp.append("user",sessionStorage.getItem('user'));
    sessionStorage.getItem('user')
    return this.http.get(`${this.baseUrl}/personal`,{params:qp});
  }

  getSurvey(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  putSurvey(survey: Survey): Observable<any> {
    return this.http.put(`${this.baseUrl}/update/${survey.id}`, survey);
  }

  postSurvey(survey: Survey): Observable<any> {
    let qp = new HttpParams();
    qp = qp.append("user",sessionStorage.getItem('user'));
    sessionStorage.getItem('user')
    return this.http.post(`${this.baseUrl}/add`, survey,{params:qp});
  }

  deleteSurvey(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`)
  }

}

