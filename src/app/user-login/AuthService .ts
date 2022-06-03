import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  username: string;
  password: string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;

  sessionId:any = "";

  constructor(private http:HttpClient, private router:Router) {
  }

  login(username:String, password:String){
    let url = 'http://localhost:8080/login';
    this.http.post<any>(url,{
      username,
      password})
      .subscribe(res=>{
      console.log(username + " " + password)
      if(res){
        console.log(res.sessionId);
        this.sessionId = res.sessionId;

        sessionStorage.setItem(
          'token',this.sessionId
        );
        this.router.navigate(['']);
      }else{
        alert('Authentification FAILED!')
      }
    });
  }

  logout(){
    this.sessionId=null;
    sessionStorage.removeItem(
      'token');
    this.router.navigate(['']);
  }


}
