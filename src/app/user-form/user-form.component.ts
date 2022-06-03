import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from './passwordValidator.directive';
import { UserService } from './user.service';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  form:FormGroup = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.minLength(4)]),
    password: new FormControl('',[Validators.required, Validators.minLength(4)]),
    passwordConfirm: new FormControl('',[Validators.required, Validators.minLength(4)]),
    firstName: new FormControl(),
    lastName: new FormControl()
  },{validators: passwordValidator});

  isValid:boolean = false;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  }

  onSubmit():void{
    this.userService.checkIfUserExists(this.form.value.email).subscribe((q)=>{
      q==null?this.userService.postUser(this.form.value).subscribe(()=>{
        console.log(this.form.value);
        this.form.reset
      }):alert("USERNAME IS TAKEN - please enter another one");
    })
//    if(this.userService.checkIfUserExists(this.form.value.email)!=null){
 //     console.log("USERNAME IS TAKEN - please enter another one");
 //     this.form.reset
//    }else{
//      this.userService.postUser(this.form.value).subscribe(()=>{
 //       console.log(this.form.value);
 //       this.form.reset
//      })
 //   }

    }



}
