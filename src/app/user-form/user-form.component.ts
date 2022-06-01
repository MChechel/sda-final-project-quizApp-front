import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  form:FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
    passwordConfirm: new FormControl(),
    firstName: new FormControl(''),
    lastName: new FormControl('')
  });
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  onSubmit():void{

      this.userService.postUser(this.form.value).subscribe(()=>{
        console.log(this.form.value);
        this.form.reset
      })


}
}
