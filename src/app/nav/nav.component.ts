import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user-login/AuthService ';
import { UserLoginComponent } from '../user-login/user-login.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout();
  }

}
