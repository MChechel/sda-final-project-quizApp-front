import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Query } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { SurveyService } from '../service/survey.service';

@Injectable({
  providedIn: 'root'
})
export class TakingSurveyService {

  uniqueHashCode:string;
  baseUrl:string = `http://localhost:8080/api/questions/results`;

  constructor(private http:HttpClient,
     private route:ActivatedRoute,
     private surveySurvice:SurveyService,
     ) { }



  getUniqueCode(surveyId:number):any{
    this.surveySurvice.getSurvey(surveyId).subscribe((s)=>{
      this.uniqueHashCode= s.hashCode;
    })
  }

  sendSurveyResults(userResult){
      this.http.post(`${this.baseUrl}`,userResult).subscribe((res)=>{
        console.log(res);
      })

}

getResultsForUser():Observable<any>{
  let qp = new HttpParams();
    this.route.params.subscribe(params =>{
        qp = qp.append("userLogin",sessionStorage.getItem('user'));
        qp = qp.append("sort",'amountOfPoints');
      }
      )
      return this.http.get(`${this.baseUrl}/personal`,{params:qp});
    };

getResultsForSurvey():Observable<any>{
  let qp = new HttpParams();
    this.route.params.subscribe(params =>{
        qp = qp.append("id",params['id']);
        qp = qp.append("sort",'amountOfPoints');
      }
      )
      return this.http.get(`${this.baseUrl}/personal`,{params:qp});
    };


}


