import { NgModule } from '@angular/core';
import { MatCommonModule, MatOption, MatOptionModule, MatOptionSelectionChange } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { AppRoutingModule } from './app-routing.module';
import { AnswerComponent } from './answer/answer.component';
import { NavComponent } from './nav/nav.component';
import { AnswerFormComponent } from './answer-form/answer-form.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserFormComponent } from './user-form/user-form.component';
import { RequestInterceptor } from './request.interceptor';
import { SurveyComponent } from './survey/survey.component';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { HomeComponent } from './home/home.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { TakingSurveyFormComponent } from './taking-survey-form/taking-survey-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { UserUpdateComponent } from './user-update/user-update.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TakingSurveyComponent } from './taking-survey/taking-survey.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SurveyStatisticsComponent } from './survey-statistics/survey-statistics.component'

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    AnswerComponent,
    NavComponent,
    AnswerFormComponent,
    QuestionFormComponent,
    UserLoginComponent,
    UserFormComponent,
    SurveyComponent,
    SurveyFormComponent,
    HomeComponent,
    UserNavComponent,
    TakingSurveyFormComponent,
    UserUpdateComponent,
    TakingSurveyComponent,
    SurveyStatisticsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:RequestInterceptor, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
