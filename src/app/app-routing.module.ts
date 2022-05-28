import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswerComponent } from './answer/answer.component';
import { QuestionComponent } from './question/question.component';
import { RouterModule, Routes } from '@angular/router';
import { AnswerFormComponent } from './answer-form/answer-form.component';

const routes: Routes = [
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'answer',  component:AnswerComponent},
  {path:'question',component:QuestionComponent},
  {path:'answer/:id',component:AnswerFormComponent},
  {path:'answers',component:AnswerFormComponent}
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
