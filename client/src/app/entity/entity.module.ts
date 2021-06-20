import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntityRoutingModule } from './entity-routing.module';
import { QuestionModule } from './Question/question.module';
import { BaithiModule } from './baithi/baithi.module';
import {CalendarsModule}from '../date/calendars/calendars.module'
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EntityRoutingModule,
    QuestionModule,
    BaithiModule,
    CalendarsModule,

  ],
})
export class EntityModule {}
