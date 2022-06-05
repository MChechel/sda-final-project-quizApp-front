import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute} from '@angular/router';
import {SurveyService} from "../service/survey.service";
import {Survey} from "../survey/survey.model";


@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.scss']
})

export class SurveyFormComponent implements OnInit {

  surveyForm: FormGroup = new FormGroup({
    id: new FormControl('111'),
    title: new FormControl('Plate TITLE here, instead of that text'),
    description: new FormControl('Plate description here, instead of that text')

  });

  isEditing: boolean = false;

  constructor(private fb: FormBuilder, private surveyService: SurveyService, private route: ActivatedRoute) {
  }


  ngOnInit(): void {

    console.log('the form is initiated!')
    //this.createForm;
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditing = true;
        this.surveyService.getSurvey(params['id']).subscribe((s: Survey) => {
            console.log(s);
            this.surveyForm.setValue({
              id:s.id,
              title: s.title,
              description: s.description
            })
          }
        )
      }
    })
  }


  onSubmit(): void {
    console.log(this);
    if (this.isEditing
    ) {
      this.surveyService.putSurvey(this.surveyForm.value).subscribe(() => {
        console.log(this.surveyForm.value);
        this.surveyForm.reset
      })
    } else {
      this.surveyService.postSurvey(this.surveyForm.value).subscribe(() => {
        console.log("in else");
        console.log(this.surveyForm.value);
        this.surveyForm.reset
      })
    }
  }

}
