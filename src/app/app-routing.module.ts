import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswerComponent } from './answer/answer.component';
import { QuestionComponent } from './question/question.component';
import { RouterModule, Routes } from '@angular/router';
import { AnswerFormComponent } from './answer-form/answer-form.component';
import { QuestionFormComponent } from './question-form/question-form.component';

const routes: Routes = [
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'questions',component:QuestionComponent},
  {path:'question-form/:id',component:QuestionFormComponent},
  {path:'question-form',component:QuestionFormComponent},
  {path:':questionId/answers',  component:AnswerComponent},
  {path:':questionId/answer-form',component:AnswerFormComponent},
  {path:':questionId/answer-form/:id',component:AnswerFormComponent},
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
