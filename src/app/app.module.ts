import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { AppRoutingModule } from './app-routing.module';
import { AnswerComponent } from './answer/answer.component';
import { NavComponent } from './nav/nav.component';
import { AnswerFormComponent } from './answer-form/answer-form.component';
import { QuestionFormComponent } from './question-form/question-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    AnswerComponent,
    NavComponent,
    AnswerFormComponent,
    QuestionFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
