import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxPaginationModule}from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MyhomeRoutingModule } from './myhome-routing.module';
import { MyhomeComponent } from './myhome.component';
import {CalendarsModule}from '../../date/calendars/calendars.module';
import {FormsModule,ReactiveFormsModule}from '@angular/forms';
import { DetailComponent } from './detail/detail.component';
import { MyhomesinhvienComponent } from './detail/myhomesinhvien/myhomesinhvien.component';
import { MyhomequestionComponent } from './detail/myhomequestion/myhomequestion.component';
import { MyhomeinforComponent } from './detail/myhomeinfor/myhomeinfor.component';
import { ThanhtichComponent } from './thanhtich/thanhtich.component';

@NgModule({
  declarations: [MyhomeComponent, DetailComponent, MyhomesinhvienComponent, MyhomequestionComponent, MyhomeinforComponent, ThanhtichComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgxPaginationModule,
    MyhomeRoutingModule,
    CalendarsModule,
    FontAwesomeModule,
  ],
})
export class MyhomeModule {}
