import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";
import { Survey } from '../survey/survey.model';



@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  private baseUrl = 'http://localhost:8080/survey'


  constructor(private http: HttpClient) {
  }


  getSurveys(): Observable<any> {
    console.log(this.http.get(`${this.baseUrl}/`))
    return this.http.get(`${this.baseUrl}/`)
  }


  getSurvey(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  putSurvey(survey: Survey): Observable<any> {
    return this.http.put(`${this.baseUrl}/update/${survey.id}`, survey);
  }

  postSurvey(survey: Survey): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, survey);
  }

  deleteSurvey(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`)
  }

}

