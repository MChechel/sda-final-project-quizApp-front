import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnswerComponent } from './answerDirectory/answer/answer.component';
import { QuestionComponent } from './questionDirectory/question/question.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationGuard } from './authentification.guard';
import { SurveyComponent } from './surveyDirectory/survey/survey.component';
import { HomeComponent } from './home/home.component';
import { UserUpdateComponent } from './userDirectory/user-update/user-update.component';
import { UserLoginComponent } from './userDirectory/user-login/user-login.component';
import { UserFormComponent } from './userDirectory/user-form/user-form.component';
import { SurveyFormComponent } from './surveyDirectory/survey-form/survey-form.component';
import { TakingSurveyComponent } from './surveyDirectory/taking-survey/taking-survey.component';
import { SurveyStatisticsComponent } from './surveyDirectory/survey-statistics/survey-statistics.component';
import { QuestionFormComponent } from './questionDirectory/question-form/question-form.component';
import { AnswerFormComponent } from './answerDirectory/answer-form/answer-form.component';


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
    {path: 'chooseSurvey', component: TakingSurveyComponent},
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
