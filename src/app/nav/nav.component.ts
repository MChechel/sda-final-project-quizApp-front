import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/AuthService ';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  faArrowRightToBracket=faArrowRightToBracket;

 isLoggedIn:boolean=false;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    sessionStorage.length!==0?this.isLoggedIn=false:this.isLoggedIn=true;
  }

  logout(){
    this.authService.logout();
  }

}
