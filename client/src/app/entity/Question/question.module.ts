import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {NgxPaginationModule} from 'ngx-pagination'

import { ROUTERQUESTION } from './question-routing.module';
import { RouterModule } from '@angular/router';
import { QuestionComponent } from './question.component';
import { TranslateModule } from '@ngx-translate/core';
import { ModalQuestionComponent } from './modal-question/modal-question.component';
import {ReactiveFormsModule,FormsModule}from '@angular/forms';
import { DetailQuestionComponent } from './detail-question/detail-question.component';
const ROUTE_STATE=[...ROUTERQUESTION]

@NgModule({
  declarations: [QuestionComponent, ModalQuestionComponent, DetailQuestionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTE_STATE),
    FontAwesomeModule,
    TranslateModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule,
  ],
})
export class QuestionModule {}
