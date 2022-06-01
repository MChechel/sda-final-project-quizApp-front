import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { theUSer } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl:string = 'http://localhost:8080/api/create-account/'
  constructor(private http:HttpClient) {  }

  postUser(user:theUSer):Observable<any>{
    return this.http.post(`${this.baseUrl}`,(user));
  }

}
