import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, QueryParamsHandling } from '@angular/router';
import { theUSer } from '../userDirectory/user-form/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl:string = `http://localhost:8080/api/create-account`
  userUpdate:string = `http://localhost:8080/api/users`

  userLoginCheck:string = `http://localhost:8080/login/checkEmail`

  constructor(private http:HttpClient,private route:ActivatedRoute) {  }



  postUser(user:theUSer):Observable<any>{
    return this.http.post(`${this.baseUrl}`,(user));
  }


putUser(user:theUSer,inititalLogin:string):Observable<any>{
  let qp = new HttpParams();
      qp = qp.append("email",inititalLogin);
    return this.http.put(`${this.userUpdate}`,(user),{params:qp});
  }



  checkIfUserExists(email:string):Observable<any>{
    let qp = new HttpParams();
        qp = qp.append("login",email);
    return this.http.get(`${this.userLoginCheck}`,{params:qp});
  }
}
