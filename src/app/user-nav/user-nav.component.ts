import { Component, OnInit } from '@angular/core';
import { AuthService } from '../user-login/AuthService ';
import { ActivatedRoute } from '@angular/router';
import { faUserLarge } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faCertificate } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.scss']
})
  export class UserNavComponent implements OnInit {
    faUserLarge=faUserLarge;
    faDoorClosed=faArrowUpRightFromSquare;
    faCertificate=faCertificate;
    constructor(private authService:AuthService, private route:ActivatedRoute) { }
    username:string;
    ngOnInit(): void {
      this.username = sessionStorage.getItem('user');



    }

    logout(){
      this.authService.logout();
    }

  }
