import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { theUSer } from './user.model';
import { ActivatedRoute, QueryParamsHandling } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl:string = `http://localhost:8080/api/create-account`
  userLoginCheck:string = `http://localhost:8080/login/checkEmail`

  constructor(private http:HttpClient,private route:ActivatedRoute) {  }

  postUser(user:theUSer):Observable<any>{
    return this.http.post(`${this.baseUrl}`,(user));
  }


  checkIfUserExists(email:string):Observable<any>{
    let qp = new HttpParams();
        qp = qp.append("login",email);
    return this.http.get(`${this.userLoginCheck}`,{params:qp});
  }
}
