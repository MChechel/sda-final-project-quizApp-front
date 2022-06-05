import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { theUSer } from '../user-form/user.model';
import { UserService } from '../user-form/user.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from '../user-form/passwordValidator.directive';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit {
  form:FormGroup = new FormGroup({
    email: new FormControl('test',[Validators.required, Validators.minLength(4)]),
    password: new FormControl('',[Validators.required, Validators.minLength(4)]),
    passwordConfirm: new FormControl('',[Validators.required, Validators.minLength(4)]),
    firstName: new FormControl('test'),
    lastName: new FormControl('test')
  },{validators:passwordValidator});

  USER_FORM={
    email:null,
    firstName:null,
    lastName:null
  }
  isFormVisible:Boolean=false;

  constructor(private userService:UserService, private route:ActivatedRoute, private fromBuilder:FormBuilder) { }

  currentUser:theUSer;

  ngOnInit(): void {

  this.getData();

  this.form.setValue({
    email:this.currentUser.email,
    password:null,
    passwordConfirm:null,
    firstName:this.currentUser.firstName,
    lastName:this.currentUser.lastName
  })

  }

getData(){
  this.route.params.subscribe(params =>{
    this.userService.checkIfUserExists(params['login']).subscribe((u)=>{
      this.currentUser=u;

})
    });
}
activateForm(){
  this.isFormVisible?this.isFormVisible=false:this.isFormVisible=true;
  this.form.setValue({
    email:this.currentUser.email,
    password:this.currentUser.password,
    passwordConfirm:this.currentUser.password,
    firstName:this.currentUser.firstName,
    lastName:this.currentUser.lastName
  })
}

updateUser():void{
  this.route.params.subscribe(params =>{
      this.userService.putUser(this.form.value,params['login']).subscribe(()=>{
        this.form.reset;
        this.activateForm()
        this.getData();
      })
    });
    }



}
