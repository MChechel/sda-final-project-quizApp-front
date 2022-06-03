import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswerComponent } from './answer/answer.component';
import { QuestionComponent } from './question/question.component';
import { RouterModule, Routes } from '@angular/router';
import { AnswerFormComponent } from './answer-form/answer-form.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserFormComponent } from './user-form/user-form.component';
import { AuthentificationGuard } from './authentification.guard';
import { SurveyComponent } from './survey/survey.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { HomeComponent } from './home/home.component';
import { TakingSurveyFormComponent } from './taking-survey-form/taking-survey-form.component';

const routes: Routes = [
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'login',component:UserLoginComponent},
  {path:'newUser',component:UserFormComponent},
  {path: 'surveys', component: SurveyComponent},
  {path: 'survey-form', component: SurveyFormComponent},
  {path: 'survey-form/:id', component: SurveyFormComponent},
  {path: 'questionsTest', component: QuestionComponent},
  {path: 'home', component: HomeComponent},
  {path: 'takeSurvey', component: TakingSurveyFormComponent},

  /**
   *
   */

  {path:'',canActivate:[AuthentificationGuard], children:[
    {path:'question-form/:id',component:QuestionFormComponent},
    {path:'question-form',component:QuestionFormComponent},
    {path:'questions',component:QuestionComponent},
    {path:':questionId/answers',  component:AnswerComponent},
    {path:':questionId/answer-form',component:AnswerFormComponent},
    {path:':questionId/answer-form/:id',component:AnswerFormComponent}
  ]}


];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
