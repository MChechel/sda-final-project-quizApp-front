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
import { UserUpdateComponent } from './user-update/user-update.component';
import { TakingSurveyComponent } from './taking-survey/taking-survey.component';
import { SurveyStatisticsComponent } from './survey-statistics/survey-statistics.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'login',component:UserLoginComponent},
  {path:'newUser',component:UserFormComponent},


  {path:'',canActivate:[AuthentificationGuard], children:[
    {path:'accountInfo/:login',component:UserUpdateComponent},
    {path: 'surveys', component: SurveyComponent},
    {path: 'survey-form', component: SurveyFormComponent},
    {path: 'survey-form/:id', component: SurveyFormComponent},
    {path: 'questionsworkshop', component: QuestionComponent},
    {path: 'home', component: HomeComponent},
    {path: 'chooseSurvey', component: TakingSurveyFormComponent},
    {path: 'takeSurvey', component: TakingSurveyComponent},
    {path: 'surveys/statistics/:id', component: SurveyStatisticsComponent},
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
