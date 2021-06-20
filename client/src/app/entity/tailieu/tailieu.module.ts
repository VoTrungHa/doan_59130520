import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule}from '@angular/forms'
import { TailieuRoutingModule } from './tailieu-routing.module';
import { TailieuComponent } from './tailieu.component';
import { QuesionService } from '../Question/quesion.service';
import {NgxPaginationModule}from 'ngx-pagination'
import {NgbModule}from '@ng-bootstrap/ng-bootstrap'
import { CalendarsModule } from 'src/app/date/calendars/calendars.module';

@NgModule({
  declarations: [TailieuComponent],
  imports: [
    CommonModule,
    TailieuRoutingModule,
    FormsModule,
    NgbModule,
    NgxPaginationModule,
    CalendarsModule,
  ],
  providers: [QuesionService],
})
export class TailieuModule {}
