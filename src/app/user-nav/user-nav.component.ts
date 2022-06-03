import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user-login/AuthService ';
import { faUserLarge } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.scss']
})
  export class UserNavComponent implements OnInit {
    faUserLarge=faUserLarge;
    constructor(private authService:AuthService) { }

    ngOnInit(): void {

    }

    logout(){
      this.authService.logout();
    }

  }
