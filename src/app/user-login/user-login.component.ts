import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './AuthService ';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {


  username: string;
  password: string;
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  invalidLogin = false;
  loginSuccess = false;

  sessionId:any = "";


  constructor(private authService:AuthService) {}

  ngOnInit(): void {
  }
/**
 *
 *


 login(){
   let url = 'http://localhost:8080/login';
  this.http.post<any>(url,{
    username:this.username,
    password:this.password
  }).subscribe(res=>{
    console.log(this.username + " " + this.password)
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
  sessionStorage.setItem(
    'token',this.sessionId
    );
    this.router.navigate(['']);
  }
  */

login(){
  this.authService.login(this.username, this.password );
}


}
